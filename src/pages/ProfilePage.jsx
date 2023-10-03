import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";

export default function ProfilePage() {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-white shadow pb-4">
      <ProfileCover />
      <ProfileInfo />
    </div>
  );
}
