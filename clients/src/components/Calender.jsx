"use client";
export const Calender = ({ value }) => {
  return (
    <div className="card rounded-sm outline-none flex text-black border-2 border-gray-100 w-fit justify-content-center">
      <input type="date" defaultValue={`${value}`} />
    </div>
  );
};
