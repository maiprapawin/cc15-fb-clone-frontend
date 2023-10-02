import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import { RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";

const router = createBrowserRouter([
  {
    // แต่ path ที่เหลือมันใช้ header ร่วมกัน เราเลยสร้างเป็น nested route
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    // ก้อน children นี้คือ Outlet
    children: [
      { path: "", element: <HomePage /> },
      { path: "friend", element: <FriendPage /> },
      { path: "profile/:profileId", element: <ProfilePage /> },
      // : คือ path parameter แปลว่าหลัง : คือเป็น profile อะไรก้ได้
    ],
  },

  {
    //ถ้า path ใน browser เราเป็น /login = ให้มัน render ไปที่หน้า LoginPage
    // ถ้า user เรามีค่า มันจะ redirect ไปหน้า home
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
]);

export default function Route() {
  return <RouterProvider router={router} />; //มันจะเช็คตัวหลัง / ให้ ตาม router ที่เรากำหนดไว้ด้านบน
}
