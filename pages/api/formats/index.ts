// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getFormats } from '@/services/MediaDTO';
import { IResponse } from '@/models/responses';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  getFormats().then((data) => {
    if (!data.success) 
      res.status(500).json(data)
    else
      res.status(200).json(data)
  })
}
