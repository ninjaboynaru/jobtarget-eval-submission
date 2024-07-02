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
  const [prList, setPrList] = useState<IUser[]>();

  useEffect(() => {
    getUsers().then((data) => setPrList(data));
  }, []);

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
