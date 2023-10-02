import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  return (
    <div className="flex justify-center">
      <button className="bg-green-600 text-white rounded-md px-4 py-4 font-bold">
        Create new account
      </button>
      <Modal title="Sign up">
        <RegisterForm />
      </Modal>
    </div>
  );
}
