export default function RegisterForm() {
  return (
    <form className="grid grid-cols-2">
      <div>A</div>
      <div>B</div>
      <div className="col-span-full">C</div>
      <div className="col-span-full">D</div>
      <div>E</div>
    </form>
  );
}

// col-span-full = ได้เต็มพื้นที่
