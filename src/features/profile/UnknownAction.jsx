import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";

export default function UnknownAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams(); //config ไว้ในหน้า Route.js

  const handleClickAddFriend = async () => {
    try {
      await axios.post(`/friend/${profileId}`);
      setStatusWithAuthUser("REQUESTER");
    } catch (err) {
      console.log(err);
    }
  };
  return <ActionButton onClick={handleClickAddFriend}>Add friend</ActionButton>;
}
