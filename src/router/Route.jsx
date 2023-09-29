import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    //ถ้า path ใน browser เราเป็น /login = ให้มัน render ไปที่หน้า LoginPage
    path: "/login",
    element: <LoginPage />,
  },
  {
    // แต่ path ที่เหลือมันใช้ header ร่วมกัน เราเลยสร้างเป็น nested route
    path: "/",
    element: <Layout />,
    // ก้อน children นี้คือ Outlet
    children: [
      { path: "", element: <HomePage /> },
      { path: "friend", element: <FriendPage /> },
      { path: "profile/:profileId", element: <ProfilePage /> },
      // : คือ path parameter แปลว่าหลัง : คือเป็น profile อะไรก้ได้
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />; //มันจะเช็คตัวหลัง / ให้ ตาม router ที่เรากำหนดไว้ด้านบน
}
