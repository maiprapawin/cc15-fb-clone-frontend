export default function FormButton({ children, onClick }) {
  return (
    <button
      className="px-3 py-1.5 hover:bg-gray-100 text-blue-600 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
