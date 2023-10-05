import ActionButton from "./ActionButton";

export default function ReceiverAction() {
  return (
    <div className="flex gap-4">
      <ActionButton>Accept</ActionButton>
      <ActionButton>Reject</ActionButton>
    </div>
  );
}
