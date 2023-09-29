import { createContext, useState } from "react";
import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

// หลังจากนี้ถ้าเราเอา <AuthContextProvider> ไปครอบ component อะไรก็ตาม พวกลูกก็จะเอาค่าเราไปใช้ได้
export default function AuthContextProvider({ children }) {
  // state ตัวนี้จะบอกว่า ถ้าเป็น null แปลว่า user ไม่ได้ลอคอินอยู่
  // แต่ถ้า user login = เราต้องอัพเดท state ให้เป็นข้อมูลของ user
  // เช่น {id: 1, firstName: "John", lastName: "Doe", profileImage:"..."}
  // เพราะใน component ต่างๆ จะต้องเอาชื่อ หรือรูป ของ user ไปโชว์ใน component ต่างๆ
  const [authUser, setAuthUser] = useState({}); // userState(null) ก็ได้

  //// Function: Login ////
  // เรียก fn มาใช้ตอน submit form
  const login = async (credential) => {
    try {
      const res = await axios.post("/auth/login", credential);
      addAccessToken(res.data.accessToken); //ได้ access token ได้มาจาก res
      setAuthUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
