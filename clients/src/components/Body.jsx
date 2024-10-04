"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiLogoNetlify } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Lastrecords from "./Lastrecords";

export const Body = () => {
  const [balance, setBalance] = useState();
  const [currency, setCurrency] = useState();
  const [error, setError] = useState(null);
  const [drill, setDrill] = useState([]);
  const [lastRecord, setLastRecord] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios("http://localhost:8000/api/getexpense", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setDrill(response.data.category);
        setLastRecord(response.data.expense);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios("http://localhost:8000/api/getexpense", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);

        setDrill(response.data.category);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios("http://localhost:8000/api/balance", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);
        setBalance(response.data.balance);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response1 = await axios("http://localhost:8000/api/currency", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCurrency(response1.data.currency);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-[200px] flex-col flex">
      <div className="flex justify-between">
        <div className="relative mt-16">
          <img
            src="./cart.png"
            className="w-[430px] h-[246px] rounded-2xl"
            alt=""
          />
          <div className="text-2xl flex absolute top-8  left-7 text-white items-center gap-4 font-bold">
            <BiLogoNetlify className="w-[40px] h-[40px] text-white" />
            Geld
          </div>
          <div className="absolute flex flex-col gap-2  left-7 text-white top-[130px]">
            <p>Cash</p>
            <p>{balance}</p>
            <p>{currency}</p>
          </div>
        </div>
        <div className="w-[430px] h-[246px] justify-evenly flex flex-col rounded-2xl bg-white mt-16">
          <div className="flex gap-1 mt-4 ml-6 font-bold items-center">
            <GoDotFill className="text-green-400" />
            Your income
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="flex  ml-6 text-4xl font-bold">1,200,000$</div>
          <div className="flex  ml-6 text-2xl text-gray-400 ">
            Your Income Amount
          </div>
          <div className="flex gap-1 ml-6 text-xl font-bold items-center">
            <IoArrowUpCircleSharp className="text-green-400" />
            32% from last month
          </div>
        </div>
        <div className="w-[430px] h-[246px] justify-evenly flex flex-col rounded-2xl bg-white mt-16">
          <div className="flex gap-1 mt-4 ml-6 font-bold items-center">
            <GoDotFill className="text-green-400" />
            Your income
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="flex  ml-6 text-4xl font-bold">-1,200,000$</div>
          <div className="flex  ml-6 text-2xl text-gray-400 ">
            Your Income Amount
          </div>
          <div className="flex gap-1 ml-6 text-xl font-bold items-center">
            <IoArrowUpCircleSharp className="text-green-400" />
            32% from last month
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Chart1 className="bg-white flex rounded-md" />
        <Chart2 className="bg-white rounded-md" />
      </div>
      <Lastrecords drill={drill} setLastRecord={lastRecord} />
    </div>
  );
};
