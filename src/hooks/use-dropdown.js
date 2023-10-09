import { useEffect, useRef, useState } from "react";

function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownEl = useRef(null); // {current: null}
  // useRef เหมือนเป็น hook ตัวนึงที่ประกาศตัวแปรได้ จะมีค่า key = current เช่น const a = useRef(20); // a = {current: 20}
  // useRef เหมือนเป็น memory ของ state
  // Component เปลี่ยนแปลง useRef = ไม่ rerender แต่ state = rerender

  // useEffectจะ run ก็ต่อเมื่อ Component ด้านล่างถูกรันแล้ว
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownEl.current?.contains(e.target)) {
        setIsOpen(false); //ถ้าคลิกตรงไหนในหน้าจอเว็บที่ไม่ใช่กล่อง dropdown = ให้ปิดกล่อง dropdown
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return { dropDownEl, isOpen, setIsOpen }; //ใช้อะไรบ้าง เอามาใส่ในนี้
}

export default useDropdown;
