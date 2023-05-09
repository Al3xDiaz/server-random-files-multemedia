import { ISuccessResponse } from "@/models/responses";
import { useCallback, useEffect, useState } from "react"

interface IFormat {
    type: string;
}

const useFormats = () => {
    const  [formats, setFormats] = useState<IFormat[]>([]);

    const getFormats = useCallback(async () => {
        const response = await fetch("http://localhost:3000/api/formats");
        const json:ISuccessResponse = await response.json();
        setFormats(json.data);
    }
    , []);

    useEffect(() => {
        getFormats();
    }
    , [getFormats]);

    return formats;
}
export default useFormats;