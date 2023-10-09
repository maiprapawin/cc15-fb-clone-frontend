import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useAuth } from "../../hooks/use-auth";
import Modal from "../../components/Modal";
import { useState } from "react";
import PostForm from "./PostForm";

function Button({ children, onClick }) {
  return (
    <div
      className="bg-gray-200 hover:bg-gray-300 flex-1 rounded-full text-gray-500 px-3 py-1.5 cursor-pointer flex items-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function CreatePostButton({ createPost }) {
  // เอารูป authUser มา สำหรับกล่องสร้าง post
  const { authUser } = useAuth();

  // state สำหรับ modal ของกล่องสร้าง post
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border rounded-lg px-4 py-3 shadow flex gap-2">
      <Link to={`/profile/${authUser.id}`}>
        <Avatar src={authUser.profileImage} />
      </Link>
      <Button onClick={() => setIsOpen(true)}>
        What&apos;s on your mind, {authUser.firstName}
      </Button>
      <Modal
        title="create post"
        open={isOpen}
        maxWidth={32}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <PostForm onSuccess={() => setIsOpen(false)} onSubmit={createPost} />
      </Modal>
    </div>
  );
}
