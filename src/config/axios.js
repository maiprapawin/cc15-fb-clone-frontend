import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

// Interceptors ฝั่ง req หรือขาออก (para ตัวแรก = config obj, ตัวหลัง(ถ้ามี) คือถ้าเราอยากให้มันเกิด error)
axios.interceptors.request.use((config) => {
  //สำหรับ modify headers obj
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ฝั่งขากลับ จาก server to client (para ตัวแรก = call back fn มันจะพาสค่า obj ให้เรา, para2 คือถ้ากรณีเกิด error)
axios.interceptors.response.use(
  (response) => response, //เช่น 200
  (error) => {
    if (error.response.status === 401) {
      //เช่น ถ้า token ผิด ให้ remove accessToken แล้ว redirect ไปที่หน้า login
      removeAccessToken();
      window.location.href = "/login";
    }
    return Promise.reject(error); //ถ้าไม่ใช่ 401 ให้มัน return error ออกไป
  }
);

export default axios;
