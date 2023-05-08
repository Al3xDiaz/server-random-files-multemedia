import { getFilesByFormat, getFormats } from '@/services/MediaDTO';
import { IResponse } from '@/models/responses';
import type { NextApiRequest, NextApiResponse } from 'next'
import { get } from 'http';

export default async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const format = req.query.format as string
    getFilesByFormat(format).then((data) => {
        if (!data.success)
            res.status(500).json(data)
        else
            res.status(200).json(data)
    })
}