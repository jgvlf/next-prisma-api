import type { NextApiRequest, NextApiResponse } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type HomeData = {
  api_name: string,
  api_version: string,
}

export default function Home(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>
) {
  res.status(200).json({
    api_name: "Next Prisma Learning API",
    api_version: "V0.1",
  })
}
