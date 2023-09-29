const ACCESS_TOKEN = "ACCESS_TOKEN";

// ลดความผิดพลาดเวลาที่เราพิมพ์ผิด = มันจะลิงค์ไปที่ตัวแปร token เดียวกัน
// ใส่ค่า token เข้าไปใน localStorage
export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
// read ค่า token จาก localStorage
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
