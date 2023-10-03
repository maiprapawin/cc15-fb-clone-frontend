import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuth();

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Avatar />
      </div>
      {isOpen && (
        <div className="w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
          <Link to="/profile/aaaaaa" onClick={() => setIsOpen(false)}>
            <div className=" flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
              <Avatar className="h-14" />
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-gray-500">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="m-2 border" />
          <div
            className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
            onClick={logout}
          >
            <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <div className="font-semibold text-sm">Log out</div>
          </div>
        </div>
      )}
    </div>
  );
}
