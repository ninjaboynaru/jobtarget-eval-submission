import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse<String>) {
  res.status(501).send('API Endpoint not implemented')
}
