export default function LoginInput({
  placeholder,
  type = "text",
  value, //ใช้กับ tag input
  onChange, //ใช้กับ tag input
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus: ring-1 focus: ring-blue-300 focus:border-blue-500"
      value={value}
      onChange={onChange}
    />
  );
}
