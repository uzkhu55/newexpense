"use client";

import { useEffect, useState } from "react";
import Record from "./Record";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import axios from "axios";

const Records = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [error, setError] = useState(null);
  const [drill, setDrill] = useState();
  const [lastRecord, setLastRecord] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios("http://localhost:8000/api/getexpense", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);

        setDrill(response.data.category);
        setLastRecord(response.data.expense);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <div className="bg-gray-100 flex pt-6">
      <div className="flex bg-white h-fit w-[282px] ml-[200px] mr-[50px] rounded-2xl flex-col">
        <div className="font-bold m-4 text-xl">Records</div>
        <div className="m-4">
          <Record
            text={"+ Add"}
            bg={"bg-blue-600"}
            tcolor={"text-white"}
            rounded={"rounded-2xl"}
            width={"w-[250px]"}
            height={"h-[32px]"}
            hover={"hover:bg-blue-600"}
            minHeight={"min-h-[20px]"}
          />
        </div>
        <input
          placeholder="Search"
          className="w-[250px] m-4 p-2 bg-gray-100 rounded-lg border-[1px] outline-none border-gray-300 h-8"
          type="text"
          name=""
          id=""
        />
        <div className="flex m-4 flex-col gap-2">
          <div>Types</div>
          <div className="flex ml-4 items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-xs" />
            All
          </div>
          <div className="flex ml-4 items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-xs" />
            Income
          </div>
          <div className="flex ml-4 items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-xs" />
            Expense
          </div>
        </div>
        <div className="flex m-4 flex-col">
          <div className="flex w-[250px] justify-between items-center">
            <div>Category</div>
            <button className="text-gray-300">Clear</button>
          </div>
          <div className="flex flex-col">
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Food & Drinks
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Shopping
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Housing
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Transsportation
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Vehicle
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Life & Entertaiment
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Communication, PC
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Financial expense
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Investments
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
            <button className="flex w-[250px] items-center m-2 justify-between">
              <div className="flex gap-4 items-center">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <IoMdEyeOff className="swap-on h-6 w-6 text-gray-400 fill-current"></IoMdEyeOff>
                  <IoMdEye className="swap-off h-6 w-6 text-gray-400 fill-current"></IoMdEye>
                </label>
                Income
              </div>
              <MdOutlineArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col m-4 gap-4">
          <div className="font-bold">Amount range</div>
          <div>
            <input
              className="w-[120px] h-[50px] border-[1px] border-gray-300 rounded-xl p-4"
              type="text"
              onChange={handleRangeChange}
              value={rangeValue}
              min={0}
              max={100}
            />
          </div>
          <div className="w-[250px]">
            <input
              type="range"
              min={0}
              max={100}
              value={rangeValue}
              onChange={handleRangeChange}
              className="range text-white bg-blue-500 range-xs"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex w-[1500px] mt-4 justify-between">
            <div className="flex items-center gap-4">
              <button className="rounded-md h-8 w-8 items-center justify-center flex bg-gray-200 ">
                <RiArrowLeftSLine />
              </button>
              <div>Last 30 days</div>
              <button className="rounded-md h-8 w-8 items-center justify-center flex bg-gray-200 ">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn gap-8 bg-gray-50 border-[1px] border-gray-300 m-1"
              >
                Newest first
                <IoMdArrowDropdown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Oldest first</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[1500px] mt-4 bg-white rounded-xl p-4 justify-between flex">
            <div className="flex gap-4 items-center">
              <input type="checkbox" className="checkbox checkbox-xs" />
              Select All
            </div>
            <div>-35500</div>
          </div>
        </div>
        <div className="w-[1500px]">
          <div>
            <div className="pt-4 font-bold">Today</div>
            <div>
              <div className="w-[1500px] mt-4 bg-white rounded-xl p-4 items-center justify-between flex">
                <div className="flex gap-4 items-center">
                  <input type="checkbox" className="checkbox" />
                  <FaHome className="h-8 w-8" />
                  <div className="flex flex-col">
                    <div>{drill}</div>
                    <div className="text-gray-400 text-xs">14:00</div>
                  </div>
                </div>
                <div className="text-green-400">{lastRecord}</div>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="pt-4 font-bold">Yesterdday</div>
            <div>
              <div className="w-[1500px] mt-4 bg-white rounded-xl p-4 items-center justify-between flex">
                <div className="flex gap-4 items-center">
                  <input type="checkbox" className="checkbox" />
                  <FaHome className="h-8 w-8" />
                  <div className="flex flex-col">
                    <div>Lending Renting</div>
                    <div className="text-gray-400 text-xs">14:00</div>
                  </div>
                </div>
                <div className="text-green-400">- 1,000</div>
              </div>
              <div className="w-[1500px] mt-4 bg-white rounded-xl p-4 items-center justify-between flex">
                <div className="flex gap-4 items-center">
                  <input type="checkbox" className="checkbox" />
                  <MdFastfood className="h-8 w-8" />
                  <div className="flex flex-col">
                    <div>Lending Renting</div>
                    <div className="text-gray-400 text-xs">14:00</div>
                  </div>
                </div>
                <div className="text-red-400">- 1,000</div>
              </div>
              <div className="w-[1500px] mt-4 bg-white rounded-xl p-4 items-center justify-between flex">
                <div className="flex gap-4 items-center">
                  <input type="checkbox" className="checkbox" />
                  <MdFastfood className="h-8 w-8" />
                  <div className="flex flex-col">
                    <div>Lending Renting</div>
                    <div className="text-gray-400 text-xs">14:00</div>
                  </div>
                </div>
                <div className="text-yellow-400">- 1,000</div>
              </div>
              <div className="w-[1500px] mt-4 bg-white rounded-xl p-4 items-center justify-between flex">
                <div className="flex gap-4 items-center">
                  <input type="checkbox" className="checkbox" />
                  <MdFastfood className="h-8 w-8" />
                  <div className="flex flex-col">
                    <div>Lending Renting</div>
                    <div className="text-gray-400 text-xs">14:00</div>
                  </div>
                </div>
                <div className="text-yellow-400">- 1,000</div>
              </div>
              <div className="w-[1500px] mt-4 bg-white rounded-xl p-4 items-center justify-between flex">
                <div className="flex gap-4 items-center">
                  <input type="checkbox" className="checkbox" />
                  <MdFastfood className="h-8 w-8" />
                  <div className="flex flex-col">
                    <div>Lending Renting</div>
                    <div className="text-gray-400 text-xs">14:00</div>
                  </div>
                </div>
                <div className="text-yellow-400">- 1,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
