
export interface IUser {
	id: number
	nickname: string
	pull_requests: { title: string; repo_name: string, created_at: string }[]
}
