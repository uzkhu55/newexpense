"use client";

import { Button } from "./Button";
import Link from "next/link";
import { Inputfor } from "./Inputfor";
import { useState } from "react";
import { BiLogoNetlify } from "react-icons/bi";
import Errorcomp from "./Errorcomp";
import { useUser } from "@/provider/UserProvider";
import { useRouter } from "next/navigation";
import { Loading } from "./Loading";

export const Login = ({ jump }) => {
  const { loginHandler, isLoggedIn } = useUser();
  const router = useRouter();

  if (isLoggedIn) {
    router.push("/confirm");
  }

  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const logInputValue = async () => {
    const { email, password } = inputValue;
    try {
      await loginHandler(email, password);
      jump();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen w-full">
      {loading && <Loading />}

      <div className="flex w-1/2 justify-center items-center gap-2 flex-col">
        <div className="text-2xl flex items-center gap-4 font-bold">
          <BiLogoNetlify className="w-[40px] h-[40px] text-blue-600" />
          Geld
        </div>
        <div className="flex flex-col mt-[16px] items-center gap-4">
          <div className="font-bold text-2xl">Welcome back</div>
          <div className="text-base font-normal">
            Welcome back, Please enter your details
          </div>
        </div>
        <div className="flex mt-[40px]">
          <Inputfor
            bg={"bg-gray-100"}
            name={"email"}
            className="w-[350px]"
            onChange={handleChange}
            placeholder={"Email"}
          />
        </div>
        <div className="mt-[16px]">
          <Inputfor
            bg={"bg-gray-100"}
            name={"password"}
            className="w-[350px]"
            onChange={handleChange}
            placeholder={"Password"}
          />
        </div>
        {error && <Errorcomp text={error} />}
        <div className="mt-[16px]">
          <Button
            hover={"hover:bg-blue-700"}
            rounded={"rounded-3xl"}
            onClick={logInputValue}
            bg={"bg-blue-600"}
            tcolor={"text-white"}
            className={"w-[350px]"}
            text={"Log In"}
          />
        </div>
        <div className="flex mt-8 gap-4">
          <div>Dont have account ?</div>
          <Link className="text-blue-500" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
      <div className="flex w-[50%] bg-blue-600"></div>
    </div>
  );
};
