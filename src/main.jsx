// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // ทำให้ตอนนี้ใครก็ตามที่อยู่ใน App สามารถดึงค่าที่อยู่ใน AuthContextProvider ไปใช้งานได้
  // ไม่ว่าจะเป็น Route, Layout, Pages สามารถดึงค่าไปใช้ได้หมดเลย
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  // </React.StrictMode>,
);
