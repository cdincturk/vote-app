// components/UserList.js

import { useDispatch } from "react-redux";
import { setUsers } from "../redux/slices/userSlice";

function UserList({ users }) {
  const dispatch = useDispatch();

  dispatch(setUsers(users));

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
