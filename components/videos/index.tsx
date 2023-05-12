import { IFile } from "@/hooks/files";
import React,{useCallback,useState} from "react";


export const Videos = (props:{files:IFile[]}) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [currentVideo,setCurrentVideo] = useState(props.files[0]);
    const nextRandomVideo = useCallback(()=>{
        console.log("nextRandomVideo");        
        setCurrentVideo(props.files[Math.floor(Math.random()*props.files.length)]);
    },[,setCurrentVideo])
    React.useEffect(()=>{
        videoRef.current?.load();
    },[currentVideo])

    return (
    <div>
        <video controls ref={videoRef} autoPlay>
            <source src={currentVideo.path} type={/mp4/.test(currentVideo.path)?"video/mp4":"video/webm"} />
            Your browser does not support the video tag.
        </video>
        {props.files.length>1 && 
        <div className="video-controls">
            <input className="btn" type="button" value="next" onClick={nextRandomVideo} />
        </div>}
    </div>
)}