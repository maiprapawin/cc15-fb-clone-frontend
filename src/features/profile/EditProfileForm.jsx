import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import Loading from "../../components/Loading";

export default function EditProfileForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const { authUser, updateProfile } = useAuth();

  const uploadProfileImage = async (input) => {
    try {
      // FormData API (Builtin JS API) มันจะสร้าง obj ที่มี key value เก็บข้อมูลที่เป็น binary หรือไฟล์ได้ เอาไว้สำหรับ send req ที่เป็น file
      const formData = new FormData();
      formData.append("profileImage", input); //input คือค่า file ตอนที่เราเรียก onClick save (from PictureForm.jsx)
      setLoading(true);
      await updateProfile(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const uploadCoverImage = async (input) => {
    try {
      const formData = new FormData();
      formData.append("coverImage", input);
      setLoading(true);
      await updateProfile(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {loading && <Loading />}
      <PictureForm
        title="Profile picture"
        initialSrc={authUser.profileImage}
        onSave={uploadProfileImage}
      >
        {(src, onClick) => (
          <div onClick={onClick}>
            <Avatar className="h-40" src={src} />
          </div>
        )}
      </PictureForm>
      <PictureForm
        title="Cover photo"
        initialSrc={authUser.coverImage}
        onSave={uploadCoverImage}
      >
        {(src, onClick) => (
          <div
            className="aspect-[3/1] overflow-hidden rounded-md flex items-center justify-center"
            onClick={onClick}
          >
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}
