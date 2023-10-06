import { useRef, useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import { ImageIcon } from "../../icons";
import axios from "../../config/axios";
import Loading from "../../components/Loading";

export default function PostForm({ onSuccess }) {
  // ทำให้รูปที่เลือกมาแสดง
  const [file, setFile] = useState(null);
  // สำหรับการ create post: message
  const [message, setMessage] = useState("");
  // loading ระหว่างรอ post create
  const [loading, setLoading] = useState(false);
  //เอาชื่อ user มาใส่
  const { authUser } = useAuth();
  const fileEl = useRef(null);

  //เอาไว้ handle ตอนที่ user คลิกปุ่ม Post ให้ส่งไปที่ server
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      //validate เช็คว่า message/ file มีค่ามั้ย (ลองฝึกเอง)
      //จากนั้น create post

      const formData = new FormData();

      if (file) {
        formData.append("image", file);
      }
      if (message) {
        formData.append("message", message);
      }

      setLoading(true);

      await axios.post("/post", formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <textarea
          className="block w-full outline-none resize-none"
          rows="5"
          placeholder={`What's on your mind, ${authUser.firstName}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)} //เมื่อเกิดการเปลี่ยนแปลง textarea ให้ไปอัพเดท message state
        />

        {file ? (
          <div
            onClick={() => fileEl.current.click()}
            className="cursor-pointer max-h-52 overflow-hidden"
          >
            <img src={URL.createObjectURL(file)} alt="post" />
          </div>
        ) : (
          <SelectImageButton onClick={() => fileEl.current.click()} />
        )}

        <input
          type="file"
          className="hidden"
          ref={fileEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <CreateButton>Post</CreateButton>
      </form>
    </>
  );
}

// rows = จำนวนแถวของ textarea
// resize-none = ไม่ให้กล่อง resize ได้

function CreateButton({ children }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 w-full rounded-lg font-semibold">
      {children}
    </button>
  );
}

function SelectImageButton({ onClick }) {
  //รับ onClick เข้ามา แล้ว binding onClick เข้าไปที่กล่อง div ด้านล่างนี้
  return (
    <div
      onClick={onClick}
      className="bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2"
    >
      <div className="bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center">
        <ImageIcon />
      </div>
      <span>Add photo</span>
    </div>
  );
}
