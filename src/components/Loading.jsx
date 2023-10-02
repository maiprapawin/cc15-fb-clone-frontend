import { LoaderIcon } from "../icons";

export default function Loading() {
  //ส่วนที่ 1 = backdrop (ข้างหลังจะจางๆ), ส่วนที่ 2 = spinner จริง
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex items-center justify-center min-h-full">
          <LoaderIcon className="fill-blue-600 animate-spin" />
        </div>
      </div>
    </>
  );
}

// CSS: inset-0 = top, bottom, right, left = margin 0 ทำให้เต็มหน้าจอ
// z ที่มีค่าสูงกว่า = อยู่ข้างบน
