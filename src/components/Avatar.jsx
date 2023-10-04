import defaultImage from "../assets/blank.png";

export default function Avatar({ className = "h-10", src }) {
  const defaultClass = "rounded-full h-10 aspect-square";
  const classes = defaultClass + " " + className;
  return <img src={src || defaultImage} alt="user" className={classes} />; //ตอนที่เค้าเข้ามา จะโชว์เป็นรูป img ของ user หรือถ้าไม่งั้นก็จะเป็นรูปเงาคนตาม default
}
