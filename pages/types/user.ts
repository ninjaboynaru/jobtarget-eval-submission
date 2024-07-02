
export interface IUser {
	id: number;
	nickname: string;
	gravatar_id: string;
	github_profile: string | null;
	twitter_profile: string | null;
	contributions_count: number;
	link: string;
	pull_requests: { title: string; repo_name: string, created_at: string }[];
}
