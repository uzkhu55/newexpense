"use client";

import { Button } from "./Button";
import Link from "next/link";
import { Inputfor } from "./Inputfor";
import { createContext, useEffect, useState } from "react";
import { BiLogoNetlify } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/navigation";
import Errorcomp from "./Errorcomp";
import { useUser } from "@/provider/UserProvider";
const userContext = createContext();

export const Signup = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { isLoggedIn } = useUser();

  if (isLoggedIn) {
    router.push("/confirm");
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    event.preventDefault();
  };

  const logInputValue = async () => {
    if (inputValue.password !== inputValue.RepeatPassword) {
      setError("Passwords do not match");
      return;
    } else {
      try {
        const res = await axios.post("http://localhost:8000/api/user/signup", {
          email: inputValue.email,
          password: inputValue.password,
          username: inputValue.username,
        });
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex w-1/2 justify-center items-center gap-4 flex-col">
        <div className="text-2xl flex items-center gap-4 font-bold">
          <BiLogoNetlify className="w-[40px] h-[40px] text-blue-500" />
          Geld
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="font-bold mt-4 text-2xl">Create Geld account</div>
          <div>Sign up below to create your Wallet account</div>
        </div>
        <div className="mt-4">
          <Inputfor
            type={"email"}
            bg={"bg-gray-100"}
            className="w-[350px]"
            name={"username"}
            onChange={handleChange}
            placeholder={"Name"}
          />
        </div>
        <div>
          <Inputfor
            bg={"bg-gray-100"}
            className="w-[350px]"
            name={"email"}
            onChange={handleChange}
            placeholder={"Email"}
          />
        </div>
        <div>
          <Inputfor
            bg={"bg-gray-100"}
            className="w-[350px]"
            onChange={handleChange}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
          />
        </div>
        <div>
          <Inputfor
            bg={"bg-gray-100"}
            className="w-[350px]"
            onChange={handleChange}
            name={"RepeatPassword"}
            type={"password"}
            placeholder={"Repeat Password"}
          />
        </div>
        {error && <Errorcomp text={error} />}
        <div>
          <Button
            onClick={logInputValue}
            rounded={"rounded-3xl"}
            bg={"bg-blue-600"}
            hover={"hover:bg-blue-700"}
            tcolor={"text-white"}
            className={"w-[350px]"}
            text={"Sign up"}
          />
        </div>
        <div className="flex mt-2 gap-4">
          <div>Dont have account ?</div>
          <Link className="text-blue-500" href="/login">
            Log in
          </Link>
        </div>
      </div>
      <div className="flex w-[50%] bg-blue-600"></div>
    </div>
  );
};
export default Signup;
