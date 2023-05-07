
import fs from 'fs';
import { Database } from 'sqlite3';



interface IFilesGroup {
  [key: string]: string[];
}

function GetFiles(path: string): IFilesGroup {
  var files = fs.readdirSync(path);
  // gruop files by extension
  const groupedFiles: IFilesGroup = files.reduce((r: any, e: any) => {
    // get extension with regex
    let ext = `${e}`.match(/[^.]+.?(\w+)$/)[1];
    if (!r[ext]) {
      r[ext] = [];
    }
    // if item is directory scan it and concat result to current array
    if (fs.lstatSync(`${path}/${e}`).isDirectory()) {
      let children = GetFiles(`${path}/${e}`);
      for (const key in children) {
        if (!r[key]) {
          r[key] = [];
        }
        // r[key] = r[key].concat(children[key]);
        children[key].forEach((element: string) => {
          r[key].push(element);
        });
      }
    } else {
      r[ext].push(`${path}/${e}`);
    }
    return r;
  }, {});
  return groupedFiles;
}
export function MigrateDatabase() {
  const path = "/app/public/media"
  const db = new Database('database.db');
  db.exec('DROP TABLE IF EXISTS media')
  db.exec('CREATE TABLE IF NOT EXISTS media (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT, type TEXT)');
  const files = GetFiles(path);
  for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
      const element = files[key];
      element.forEach((file: string) => {
        if (!!key)
        db.run(`INSERT INTO media (path, type) VALUES ('${file}', '${key}')`);
      });
    }
  }

}

export default {
  MigrateDatabase,
};
