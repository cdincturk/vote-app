// components/UserDetail.js

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styles from "@/styles/UserDetail.module.scss";

function UserDetail() {
  const router = useRouter();
  const { id } = router.query;

  const users = useSelector((state) => state.user.users);

  const user = users.find((u) => u.id === parseInt(id));
  console.log(user);

  if (!user) {
    return <div>Kullanıcı bulunamadı.</div>;
  }

  return (
    <div className={styles.userDetail}>
      <h2>Kullanıcı Detayları</h2>
      <p>Adı: {user.name}</p>
      <p>Kullanıcı Adı: {user.username}</p>
      <p>Mail: {user.email}</p>
      <p>Telefon: {user.phone}</p>
      <p>Web sitesi: {user.website}</p>
      <p>Şirket: {user.company.name}</p>
      <p>
        Adres: {user.address.city} {user.address.city} {user.address.suite}
      </p>
    </div>
  );
}

export default UserDetail;
