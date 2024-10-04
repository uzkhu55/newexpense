"use client";

import { useUser } from "@/provider/UserProvider";

const ProfileDropdown = () => {
  const { logOutHandler } = useUser();

  return (
    <div className="dropdown  dropdown-right">
      <div tabIndex={0} role="button">
        <img src="./1.jpg" className="w-[50px] h-[50px] rounded-full" alt="" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-black menu text-white ml-4 rounded-box z-[1] w-[108px] p-2 shadow"
      >
        <li>
          <button onClick={logOutHandler}>Log out</button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
