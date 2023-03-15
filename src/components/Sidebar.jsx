import React, { useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  const [tab, setTab] = useState(1);
  function handleClick(event) {
    if (event.target.name === "today") {
      setTab(1);
    } else if (event.target.name === "myday") {
      setTab(2);
    } else if (event.target.name === "imp") {
      setTab(3);
    } else {
      setTab(4);
    }
  }
  return (
    <div className="grid content-between flex-col">
      <div className="sm:hidden flex">
        <MenuIcon className="cursor-pointer"/>
      </div>
      <div className="sm:flex flex-col hidden">
        <button
          onClick={handleClick}
          className={
            tab === 1
              ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 lg:pr-14 pr-4 my-1 text-left"
              : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 lg:pr-14 pr-4 my-1 text-left"
          }
          name="today"
        >
          <DateRangeIcon /> Today
        </button>
        <button
          onClick={handleClick}
          className={
            tab === 2
              ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 md:pr-10 pr-4 my-1 text-left"
              : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 md:pr-10 pr-4 my-1 text-left"
          }
          name="myday"
        >
          <WbSunnyIcon /> My day
        </button>
        <button
          onClick={handleClick}
          className={
            tab === 3
              ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 md:pr-10 pr-4 my-1 text-left"
              : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 md:pr-10 pr-4 my-1 text-left"
          }
          name="imp"
        >
          <NotificationImportantIcon /> Important
        </button>
      </div>
      <button
        onClick={handleClick}
        className={
          tab === 4
            ? "bg-[#9333EA0F] text-[#9333EA] rounded-md text-[16px] py-2 pl-3 md:pr-10 pr-4 my-1 text-left sm:inline hidden"
            : "text-[#6B7280] border-none rounded-md text-[16px] py-2 pl-3 md:pr-10 pr-4 my-1 text-left self-baseline sm:inline hidden"
        }
        name="settings"
      >
        <SettingsIcon /> Settings
      </button>
    </div>
  );
}

export default Sidebar;
