"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const AncestorProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandler = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });

      window.localStorage.setItem("token", res.data.token);
      // setIsLoggedIn(true);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const logOutHandler = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      // middleware

      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      router.push("/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ loginHandler, isLoggedIn, logOutHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
