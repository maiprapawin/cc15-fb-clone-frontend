import { useRef, useState } from "react";
import FormButton from "./FormButton";

export default function PictureForm({ title, children, initialSrc, onSave }) {
  const [file, setFile] = useState(null); //ตอนที่ยังไม่เคยเลือกรูป ให้เป็น null
  // if (file) console.log(URL.createObjectURL(file)); //server ทำการเก็บรูปชั่วคราวให้เราเป็นลิงค์ (blob = ข้อมูลประเภทไฟล์)
  const inputEl = useRef(null);
  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        // onChange={(e) => console.dir(e.target)} // ตอนที่เราเลือกรูป มันจะเก็บไว้ แล้วเป็นค่า value: ......jpg และมีข้อมูลไฟล์รูปที่เราเลือก = e.target.files ขื่อ files: FileList
        // multiple //e.target.files (files: FileList)
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]); //รูปที่เราเลือกจะถูกเก็บไว้ที่ state ตัวนี้
          }
        }}
      />
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton onClick={() => onSave(file)}>Save</FormButton>
              <FormButton
                onClick={() => {
                  inputEl.current.value = "";
                  setFile(null);
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton
            onClick={() => {
              inputEl.current.click();
            }}
          >
            Edit
          </FormButton>
        </div>
      </div>
      <div className="flex justify-center">
        {children(file ? URL.createObjectURL(file) : initialSrc, () =>
          inputEl.current.click()
        )}
      </div>
    </div>
  );
}
