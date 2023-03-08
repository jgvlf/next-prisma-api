import type { NextApiRequest, NextApiResponse } from 'next'

type HomeData = {
  api_name: string,
  production_status: boolean,
}

export default function Home(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>
) {
  res.status(200).json({
    api_name: "Next Prisma Learning API",
    production_status: false,
  })
}
