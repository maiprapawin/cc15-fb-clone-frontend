import { useEffect, useState } from "react";
import CreatePostButton from "../features/post/CreatePostButton";
import PostList from "../features/post/PostList";
import axios from "../config/axios";

export default function HomePage() {
  const [allPost, setAllPost] = useState([]);

  const createPost = async (data) => {
    //ส่ง fn นี้เป็น prop >> ไปที่ CreatePostButton >> ไปที่ PostForm
    const res = await axios.post("/post", data);
    const newPost = res.data.post; //ส่ง key ชื่อ post มาจาก post-controller ฝั่ง back
    setAllPost([newPost, ...allPost]); //เอา newPost ไว้ข้างหน้าเพราะว่าโพสใหม่จะอยู่บนสุด & clone obj เก่ามา
  };

  //เรียกข้อมูล post
  useEffect(() => {
    axios
      .get("/post/friend")
      .then((res) => {
        setAllPost(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostButton createPost={createPost} />
      <PostList allPost={allPost} />
    </div>
  );
}
