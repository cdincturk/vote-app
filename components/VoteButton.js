// components/VoteButton.js

import { useDispatch } from "react-redux";
import { addVote } from "../redux/slices/userVoteSlice";
import styles from "@/styles/VoteButton.module.scss";

function VoteButton({ userId }) {
  const dispatch = useDispatch();

  const handleVote = () => {
    dispatch(addVote({ userId }));
  };

  return (
    <button onClick={handleVote} className={styles.voteButton}>
      Oy Ver
    </button>
  );
}

export default VoteButton;
