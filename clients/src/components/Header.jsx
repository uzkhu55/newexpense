"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiLogoNetlify } from "react-icons/bi";
import Record from "./Record";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  return (
    <div className="flex bg-white justify-between h-[70px] items-center  mx-[200px]">
      <div className="flex gap-6 items-center">
        <BiLogoNetlify className="w-[40px] h-[40px] text-blue-500" />
        <Link href="/dashboard">
          <div className="font-bold">Dashboard</div>
        </Link>
        <Link href="/records">
          <div>Records</div>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <Record
            text={"+ Record"}
            bg={"bg-blue-600"}
            tcolor={"text-white"}
            rounded={"rounded-2xl"}
            width={"w-[99px]"}
            height={"h-[32px]"}
            hover={"hover:bg-blue-600"}
            minHeight={"min-h-[20px]"}
          />
        </div>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
