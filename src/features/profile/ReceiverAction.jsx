import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";

export default function ReceiverAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams();

  const handleClickAccept = async () => {
    try {
      await axios.patch(`/friend/${profileId}`);
      setStatusWithAuthUser("FRIEND");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex gap-4">
      <ActionButton onClick={handleClickAccept}>Accept</ActionButton>
      <ActionButton>Reject</ActionButton>
    </div>
  );
}
