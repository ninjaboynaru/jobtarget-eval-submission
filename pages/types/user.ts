
export interface IUser {
	id: number;
	name: string;
	gravatar_id: string;
	github_profile: string | null;
	twitter_profile: string | null;
	contributions_count: number;
	link: string;
	pullRequests: { title: string; repo_name: string }[];
}
