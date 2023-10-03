import defaultImage from "../../assets/cover.jpg";

export default function CoverImage({ src = defaultImage }) {
  return <img src={src} alt="cover" />;
}
