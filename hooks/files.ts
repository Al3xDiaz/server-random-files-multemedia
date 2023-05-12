import { ISuccessResponse } from "@/models/responses";
import { useCallback, useEffect, useState } from "react"

export interface IFile {
    path : string;
}

export const useFiles = (format:string) => {

    const  [files, setFiles] = useState<IFile[]>([]);

    const getFiles = useCallback(async () => {
        const response = await fetch(`/api/file/${format}`);
        const json:ISuccessResponse = await response.json();
        setFiles(json.data);
    }
    , [format]);

    useEffect(() => {
        getFiles();
    }
    , [getFiles, format]);

    return files;
}
export default useFiles;