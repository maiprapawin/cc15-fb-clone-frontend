import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function Authenticated({ children }) {
  // เพื่อป้องกันหน้าที่ยังไม่ได้ลอคอิน ไม่ให้เข้าหน้าที่ต้องลอคอินก่อนได้
  // children คือสิ่งที่อยู่ระหว่าง tag เปิด และ tag ปิด ที่เราเอาไปครอบไว้ = <Layout /> ในหน้า Route.jsx
  const { authUser } = useAuth();
  //authUser เป็น obj เพราะในไฟล์ AuthContext.jsx เราส่ง props เป็น obj {login, authUser}
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
