import { createContext, useState } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

// หลังจากนี้ถ้าเราเอา <AuthContextProvider> ไปครอบ component อะไรก็ตาม พวกลูกก็จะเอาค่าเราไปใช้ได้
export default function AuthContextProvider({ children }) {
  // state ตัวนี้จะบอกว่า ถ้าเป็น null แปลว่า user ไม่ได้ลอคอินอยู่
  // แต่ถ้า user login = เราต้องอัพเดท state ให้เป็นข้อมูลของ user
  // เช่น {id: 1, firstName: "John", lastName: "Doe", profileImage:"..."}
  // เพราะใน component ต่างๆ จะต้องเอาชื่อ หรือรูป ของ user ไปโชว์ใน component ต่างๆ
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  //// Send req ไปเพื่อ verify token
  // ทุกครั้งที่เปิดหน้าขึ้นมาใหม่ จะต้องมีการ verify token เสมอ = ใช้ useEffect
  // ต้องทำงานเป็น synchronous ห้ามใช้ async await = ต้องใช้ then catch หรือ wrapper fn
  // ห้ามทำ async กับ effect fn (effect fn คือ para ของ useEffect)
  // useEffect(() => {
  //   axios.get("/auth/me", {
  //     //   headers: { Authorization: `Bearer ${getAccessToken()}` }, //getAccessToken มาจากไฟล์ local-storage.js
  //   });
  // }, []);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          //ไม่ว่ายังไงก็ต้องทำ
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

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
    <AuthContext.Provider value={{ login, authUser, initialLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
