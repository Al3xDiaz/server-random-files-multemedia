import { Images } from "@/components/images";
import { Videos } from "@/components/videos";
import useFiles from "@/hooks/files";
import { useRouter } from "next/router";
import React from "react";


export const Files = () => {
    const { format } = useRouter().query;
    const files = useFiles(format as string);
    if (files.length == 0) return <div>loading</div>
    if (/jpg|jpeg|png|gif/.test(format as string)) 
        return <Images files={files} />
    if (/mp4|webm/.test(format as string))
        return <Videos files={files} /> 
    return <div>
        <h1>Unsupported format</h1>
        <p>Sorry, we don't support {format} files yet.</p>
        <p>you can see the list files for download:</p>
        <p>
            {files.map(x=><a href={x.path}>{x.path}</a>)}
        </p>
    </div>
}


export default Files;