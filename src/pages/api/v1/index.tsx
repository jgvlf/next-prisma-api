import type { NextApiRequest, NextApiResponse } from 'next'

export default function Version(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    res.status(200).json({
        version: '1.0.0',
    })
}