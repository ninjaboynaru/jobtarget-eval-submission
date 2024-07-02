import type { NextApiRequest, NextApiResponse } from 'next'
import type { IUser } from '@/pages/types/user'

// Documentation: https://24pullrequests.com/api
export default async function handler(req: NextApiRequest, res: NextApiResponse<IUser>) {
	const prUsersResponse = await fetch('https://24pullrequests.com/users.json')
	const prUsersJson = await prUsersResponse.json()

	res.status(200).json(prUsersJson)
}
