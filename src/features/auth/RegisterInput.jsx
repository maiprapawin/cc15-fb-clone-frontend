export default function RegisterInput({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="block w-full border rounded-md outline-none px-3 py-1.5 text-sm focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-300"
    />
  );
}
