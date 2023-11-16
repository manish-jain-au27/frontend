import React from "react";
import { FaShoppingCart, FaUser, FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { MdStore } from "react-icons/md"; // Import the Material Design Icon
import "./BottomNavigation.css";
import ShoppingCart from "../Users/Products/ShoppingCart";
import { IoMdHome } from "react-icons/io";
const BottomNavigation = () => {
  const iconColor = "text-black";
  return (
    <nav className="bottom-navigation bg-pearl-white-glass p-4 fixed bottom-0 left-0 w-full flex justify-around items-center shadow-md">
       <Link to="/HomePage" className={iconColor}>
        <IoMdHome size={24} />
      </Link>
      
      <Link to="/all-categories"className={iconColor}>
        <FiShoppingBag size={24} />
      </Link>
      
      <Link to="/shopping-cart" className={iconColor}>
        <FaShoppingCart size={24} />
      </Link>
      <Link to="/customer-profile"className={iconColor}>
        <FaUser size={24} />
      </Link>
    </nav>
  );
};

export default BottomNavigation;
