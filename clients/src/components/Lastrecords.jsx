import React from "react";
import { FaHome } from "react-icons/fa";

const Lastrecords = ({ drill, setLastRecord }) => {
  return (
    <div className="flex mb-12  w-[100%] h-fit flex-col items-start bg-white rounded-md">
      <div className="font-bold text-xl flex m-4">Last records</div>
      <div className="flex w-[100%] h-1 bg-gray-200"></div>
      <div className="flex justify-between border-b-[2px] w-[100%] items-center  gap-4">
        <div className="flex items-center m-5 gap-4">
          <FaHome className="w-[40px] h-[40px]" />
          <div className="flex flex-col">
            <div>{drills}</div>
            <div>3 hours ago</div>
          </div>
        </div>
        <div className="m-5 items-center">{setLastRecord}</div>
      </div>
      <div className="flex justify-between border-b-[2px] w-[100%] items-center  gap-4">
        <div className="flex items-center m-5 gap-4">
          <FaHome className="w-[40px] h-[40px]" />
          <div className="flex flex-col">
            <div>{drill}</div>
            <div>3 hours ago</div>
          </div>
        </div>
        <div className="m-5 items-center">-1000$</div>
      </div>
      <div className="flex justify-between border-b-[2px] w-[100%] items-center  gap-4">
        <div className="flex items-center m-5 gap-4">
          <FaHome className="w-[40px] h-[40px]" />
          <div className="flex flex-col">
            <div>Lenting & Renting</div>
            <div>3 hours ago</div>
          </div>
        </div>
        <div className="m-5 items-center">-1000$</div>
      </div>
      <div className="flex justify-between border-b-[2px] w-[100%] items-center  gap-4">
        <div className="flex items-center m-5 gap-4">
          <FaHome className="w-[40px] h-[40px]" />
          <div className="flex flex-col">
            <div>Lenting & Renting</div>
            <div>3 hours ago</div>
          </div>
        </div>
        <div className="m-5 items-center">-1000$</div>
      </div>
      <div className="flex justify-between border-b-[2px] w-[100%] items-center  gap-4">
        <div className="flex items-center m-5 gap-4">
          <FaHome className="w-[40px] h-[40px]" />
          <div className="flex flex-col">
            <div>Lenting & Renting</div>
            <div>3 hours ago</div>
          </div>
        </div>
        <div className="m-5 items-center">-1000$</div>
      </div>
    </div>
  );
};

export default Lastrecords;
