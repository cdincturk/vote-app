import styles from "@/styles/Home.module.scss";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";
import VoteButton from "../components/VoteButton";
import Link from "next/link";
import { useEffect } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default function Home({ users }) {
  const userVotes = useSelector((state) => state.userVotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(users));
  }, []);

  const sortedUsers = [...users].sort((first, second) => {
    const votesFirst = userVotes[first.id] || 0;
    const votesSecond = userVotes[second.id] || 0;
    return votesSecond - votesFirst;
  });

  return (
    <>
      <main className={styles.main}>
        <div className={styles.profile}>
          {sortedUsers.length === 0 ? (
            <div>Yükleniyor...</div>
          ) : (
            sortedUsers.map((user) => (
              <div
                key={user.id}
                className={styles.profile__card}
                href={`/users/${user.id}`}
              >
                <div className={styles.profile__detail}>
                  <span>İsim</span>
                  <span>{user.name}</span>
                </div>
                <div className={styles.profile__detail}>
                  <span>Bölüm</span>
                  <span>{user.company.bs}</span>
                </div>
                <Link
                  href={`/users/${user.id}`}
                  className={styles.profile__detailbtn}
                >
                  Detay Gör
                </Link>
                <VoteButton userId={user.id} />
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}
