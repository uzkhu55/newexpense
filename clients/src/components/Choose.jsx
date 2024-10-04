"use client";
import { useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { RiDrinksFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const Dropdown = ({ name, setDrill }) => {
  const [selectedItem, setSelectedItem] = useState("Choose");
  const dropdownRef = useRef(null);

  const handleSelect = (item, categoryName) => {
    setSelectedItem(item);
    setDrill(categoryName);
    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }
  };

  return (
    <div>
      <details className="dropdown" ref={dropdownRef}>
        <summary className="btn bg-gray-100 justify-start w-[320px]">
          {selectedItem}
        </summary>
        <ul className="menu dropdown-content bg-base-100 gap-2 rounded-box z-[1] w-[320px] p-2 shadow">
          <li>
            <a onClick={() => handleSelect(<FaHome />, "Home")}>
              <FaHome name={name} />
              Home
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<FaGift />, "Gift")}>
              <FaGift name={name} />
              Gift
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<IoFastFood />, "Food")}>
              <IoFastFood name={name} />
              Food
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<RiDrinksFill />, "Drink")}>
              <RiDrinksFill name={name} />
              Drink
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<FaTaxi />, "Taxi")}>
              <FaTaxi />
              Taxi
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<FaShoppingBag />, "Shopping")}>
              <FaShoppingBag name={name} />
              Shopping
            </a>
          </li>
        </ul>
      </details>
      {selectedItem !== "open or close" && <div className="mt-4"></div>}
    </div>
  );
};

export default Dropdown;
