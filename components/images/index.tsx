import { IFile } from "@/hooks/files";
import React from "react";


export const Images = (props:{files:IFile[]}) => (
    <div className="image-container">
            <div className="image-row">
                {props.files.map((file,i) =>{if(i%2==0) return(
                    <div key={i} className={`image-${i%6==0?'large':'short'}`} style={{backgroundImage:`url("${file.path}")`}} ></div>
                )})}
            </div>
            <div className="image-col">
                {props.files.map((file,i) =>{if(i%2==1) return(
                    <div key={i} className={`image-${i%6==0?'large':'short'}`} style={{backgroundImage:`url("${file.path}")`}} ></div>
                )})}
            </div>
        </div>
)