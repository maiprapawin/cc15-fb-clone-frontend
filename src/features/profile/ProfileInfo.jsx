import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
import FriendAction from "./FriendAction";
import ReceiverAction from "./ReceiverAction";
import RequesterAction from "./RequesterAction";
import UnknownAction from "./UnknownAction";

export default function ProfileInfo({
  profileUser,
  statusWithAuthUser,
  setStatusWithAuthUser,
  profileFriends,
}) {
  const mappingObj = {
    // ถ้า key เป็น "AUTH_USER" ให้ render เป็น <AuthUserAction />
    AUTH_USER: <AuthUserAction />,
    UNKNOWN: <UnknownAction setStatusWithAuthUser={setStatusWithAuthUser} />,
    FRIEND: <FriendAction setStatusWithAuthUser={setStatusWithAuthUser} />,
    REQUESTER: (
      <RequesterAction setStatusWithAuthUser={setStatusWithAuthUser} />
    ),
    RECEIVER: <ReceiverAction setStatusWithAuthUser={setStatusWithAuthUser} />,
  };

  return (
    <div className="max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className="-mt-8">
        <Avatar
          className="h-40 outline outline-[3px] outline-white"
          src={profileUser.profileImage}
        />
      </div>
      <div className="flex-1 mb-2">
        <h2 className="text-2xl font-bold">
          {profileUser.firstName} {profileUser.lastName}
        </h2>
        <span className="block text-gray-500 font-semibold mb-2">
          {profileFriends.length} Friends
        </span>
        <div className="flex -space-x-2">
          {profileFriends.map((el) => (
            <Link key={el.id} to={`/profile/${el.id}`}>
              <Avatar className="h-8" src={el.profileImage} />
            </Link>
          ))}
        </div>
      </div>
      <div>{mappingObj[statusWithAuthUser]}</div>
    </div>
  );
}
