import React from "react";
import Choose from "./Choose";
import { Calender } from "./Calender";

const ExpenseForm = ({ name, setDrill, nameForChoose, onChange, onClick }) => {
  return (
    <div>
      <div className="relative">
        <p className="absolute top-8 left-10">Amount</p>
        <input
          onChange={onChange}
          name={name}
          type="text"
          placeholder="₮ 000.00"
          className="textarea m-4 bg-gray-100 focus:outline-none pt-12 textarea-bordered textarea-lg w-full max-w-xs"
        />
      </div>
      <div className="m-4 gap-2 flex flex-col">
        <div>Category</div>
        <Choose name={nameForChoose} setDrill={setDrill} />
      </div>
      <div className="flex justify-between w-[320px] m-4">
        <div>
          <p>Date</p>
          <Calender value={"2024-10-02"} />
        </div>
        <div>
          <p>Date</p>
          <Calender value={"2024-10-02"} />
        </div>
      </div>
      <button
        onClick={onClick}
        className="btn m-4 w-[320px] rounded-3xl text-white bg-blue-600 hover:bg-blue-600"
      >
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
