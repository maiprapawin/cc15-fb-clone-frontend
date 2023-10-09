import { useAuth } from "../../hooks/use-auth";
import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../icons";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useState } from "react";

export default function PostFooter({ postObj }) {
  const { id } = postObj;
  const { authUser } = useAuth();
  const [likes, setLikes] = useState(postObj.likes); // [ { userId: 1 } ]

  // หน้าตาก้อน isLiked จะได้ก้อน obj นี้ถ้าเจอ [ { userId: 1 }, { userId: 2 } ] ถ้าไม่เจอจะเป็น undefined
  const isLiked = likes.find((el) => el.userId === authUser.id); //ถ้าเค้าเคยกดไลค์ ตัวนี้จะเป็น true ถ้าไม่เคยกดไลค์ ตัวนี้จะเป็น false

  const handleClickLike = async () => {
    try {
      await axios.post(`/post/${id}/like`);

      //เช็คว่ามีการกดไลค์ post อยู่มั้ย >> ถ้ายังไม่เคยกดไลค์ ต้องเพิ่มเข้าไปใน arr ถ้าเคยกดแล้ว ให้ลบออก

      // ถ้าไลค์แล้ว เอาออก
      if (isLiked) {
        return setLikes(likes.filter((el) => el.userId !== authUser.id));
      }
      // ถ้ายังไม่ like เพิ่มค่าเข้าไป
      setLikes([...likes, { userId: authUser.id }]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        {likes.length > 0 && (
          <div className="flex gap-1 items-center">
            <div className="bg-blue-500 h-5 w-5 rounded-full flex items-center justify-center">
              <ThumbsUpIcon />
            </div>
            <span className="text-sm text-gray-500">{likes.length}</span>
          </div>
        )}
        <span className="text-sm text-gray-500 hover:underline cursor-pointer">
          8 Comments
        </span>
      </div>
      <hr />
      <div className="flex gap-1 py-1">
        <ActionButton active={isLiked} onClick={handleClickLike}>
          <div className="flex justify-center gap-2">
            <ThumbsUpAltIcon
              className={isLiked ? "fill-blue-500" : "fill-gray-500"}
            />
            <span>Like</span>
          </div>
        </ActionButton>
        <ActionButton>
          <div className="flex justify-center gap-2">
            <MessageIcon className="fill-gray-500" />
            <span>Comment</span>
          </div>
        </ActionButton>
      </div>
    </div>
  );
}

//div ก้อนแรกคือ like & 8 comments
