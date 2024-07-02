import { useEffect, useState } from "react";
import axios from "axios";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { IUser } from '@/pages/types/user'

const inter = Inter({ subsets: ["latin"] });

async function getUsers() {
	const { data } = await axios("/api/pullRequests/user");
	return data;
}

export default function Home() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  const userListElements = users.map((user) => {
	const userPullRequestElements = user.pull_requests.slice().map((pullRequest) => {
		return (
			<tr key={`${pullRequest.repo_name}:${pullRequest.title}:${pullRequest.created_at}`}>
				<td>{pullRequest.repo_name}</td>
				<td>{pullRequest.title}</td>
			</tr>
		)
	})

	return (
		<div key={user.id}>
		<h2>User: {user.nickname}</h2>
		<table>
		  <tbody>
			<tr>
			  <th>Repo</th>
			  <th>PR Titles</th>
			</tr>
			{userPullRequestElements}
		  </tbody>
		</table>
	  </div>
	)
  })

  return (
    <main className={styles.main}>
      <div className={inter.className}>
		{userListElements}
      </div>
    </main>
  );
}
