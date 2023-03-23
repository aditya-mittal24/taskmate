import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div className="bg-white rounded-tl-[10px] col-span-4 rounded-tr-[10px] py-[10px] px-[16px] flex justify-between items-center">
      <h1 className="text-[#9333EA] sm:text-[20px] text-[19px] leading-[23px] font-medium">
        TaskMate
      </h1>
      <p className="text-[#9333EA] px-2">ToDo List</p>
      <div className="justify-between flex items-center w-[70px]">
        <DarkModeIcon sx={{ fontSize: 30 }} className=" px-1" />
        <AccountCircleIcon
          sx={{ fontSize: 30 }}
          className="px-1  text-[#9333EA]"
        />
      </div>
    </div>
  );
}

export default Navbar;
