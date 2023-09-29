import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
  const [input, setInput] = useState({
    // สร้าง state มาเพื่อ binding state เข้ากับกล่อง input
    emailOrMobile: "",
    password: "",
  });

  /* สิ่งที่ต้องทำตอน Login 
  - send request
  - localstorage.setItem("token")
  - state => user
  */

  // const ctx = useAuth(); //ทำให้ component login form เราสามารถดึงค่าที่อยู่ใน auth context มาใช้ได้
  const { login } = useAuth(); //destructuring มา >> login คือมาจาก AuthContext.jsx

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input); //เขียน input แบบนี้ได้เลย เพราะว่าเราทำ const login ในไฟล์ AuthContext.jsx เป็น obj ไว้
  };

  return (
    //เมื่อกดปุ่ม LoginButton แล้ว onSubmit handleSubmitForm fn จะทำงาน
    <form className="grid gap-4" onSubmit={handleSubmitForm}>
      {/* Components ไว้ reuse */}
      <LoginInput
        placeholder="Email address or phone number"
        value={input.emailOrMobile}
        onChange={(e) => setInput({ ...input, emailOrMobile: e.target.value })}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <LoginButton />
    </form>
  );
}
