import RegisterInput from "./RegisterInput";

export default function RegisterForm() {
  return (
    <form className="grid grid-cols-2 gap-x-3 gap-y-4">
      <div>
        <RegisterInput placeholder="First name" />
      </div>
      <div>
        <RegisterInput placeholder="Last name" />
      </div>
      <div className="col-span-full">
        <RegisterInput placeholder="Email address or mobile number" />
      </div>
      <div className="col-span-full">
        <RegisterInput placeholder="Password" type="password" />
      </div>
      <div className="col-span-full">
        <RegisterInput placeholder="Confirm password" type="password" />
      </div>
      <div className="mx-auto col-span-full">
        <button className="bg-green-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[10rem]">
          Sign up
        </button>
      </div>
    </form>
  );
}

// col-span-full = ได้เต็มพื้นที่
