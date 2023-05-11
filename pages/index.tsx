import { useEffect, useState } from "react";
import axios from "axios";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

interface IPullRequests {
  id: number;
  name: string;
  gravatar_id: string;
  github_profile: string | null;
  twitter_profile: string | null;
  contributions_count: number;
  link: string;
  pullRequests: { title: string; repo_name: string }[];
}

export function Home() {
  const [prList, setPrList] = useState<IPullRequests[]>();

  const fetchData = async (): Promise<IPullRequests[]> => {
    // Documentation: https://24pullrequests.com/api
    const { data } = await axios("https://24pullrequests.com/users.json");
    return data;
  };

  useEffect(() => {
    fetchData().then((data) => setPrList(data));
  });

  return (
    <main className={styles.main}>
      <div className={inter.className}>
        {prList?.map((elm) => (
          <div>
            <h2>User: {elm.name}</h2>
            <table>
              <tbody>
                <tr>
                  <th>Repo</th>
                  <th>PR Titles</th>
                </tr>
                {elm.pullRequests.map((inner) => (
                  <tr>
                    <td>{inner.repo_name}</td>
                    <td>{inner.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  );
}
