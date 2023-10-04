import defaultImage from "../../assets/cover.jpg";

export default function CoverImage({ src }) {
  return <img src={src || defaultImage} alt="cover" />;
  // return <img src={src ?? defaultImage} alt="cover" />;
  //เช็คว่า src เป็น null or undefined? ถ้าใช่ src จะเป็นค่า image
}
