import React, { useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineNotificationImportant } from "react-icons/md";

function Sidebar(props) {
  return (
    <div className="grid col-span-1 content-between">
      <div className="flex flex-col">
        <button
          onClick={props.handleClick}
          className={
            props.tab === 1
              ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 my-1 text-left"
              : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 my-1 text-left"
          }
          name="today"
        >
          <WbSunnyIcon /> Today
        </button>
        <button
          onClick={props.handleClick}
          className={
            props.tab === 2
              ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 my-1 text-left"
              : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 my-1 text-left"
          }
          name="work"
        >
          <DateRangeIcon /> Work
        </button>
        <button
          onClick={props.handleClick}
          className={
            props.tab === 3
              ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 my-1 text-left"
              : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 my-1 text-left"
          }
          name="project"
        >
          <AiOutlineProject size={24} className="inline-block" /> Project
        </button>
        <button
          onClick={props.handleClick}
          className={
            props.tab === 4
              ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 my-1 text-left"
              : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 my-1 text-left"
          }
          name="important"
        >
          <MdOutlineNotificationImportant size={24} className="inline-block" />{" "}
          Important
        </button>
      </div>
      <button
        onClick={props.handleClick}
        className={
          props.tab === 5
            ? "bg-[#9333EA0F] text-[#9333EA] rounded-md sm:text-[16px] text-[14px] py-2 pl-3 my-1 text-left"
            : "text-[#6B7280] border-none rounded-md sm:text-[16px] text-[14px] py-2 pl-3 my-1 text-left"
        }
        name="settings"
      >
        <IoIosSettings className="text-[24px] inline-block" /> Settings
      </button>
    </div>
  );
}

export default Sidebar;
