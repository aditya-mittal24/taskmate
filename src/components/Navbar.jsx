import React, {useState} from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    const [tab, setTab] = useState(1)
    function handleClick(event) {
        if (event.target.name === "todo") {
          setTab(1);
        } else if (event.target.name === "project") {
          setTab(2);
        } else if (event.target.name === "team") {
          setTab(3);
        }
        event.preventDefault();
      }
  return (
    <div className="bg-white rounded-tl-[10px] rounded-tr-[10px] py-[10px] px-[16px] flex justify-between items-center">
      <h1 className="text-[#9333EA] sm:text-[20px] text-[19px] leading-[23px] font-medium">
        TaskMate
      </h1>
      <ul className="flex justify-between items-center">
          <li>
            <a href="/" onClick={handleClick} className={tab===1? "text-[#9333EA] sm:px-4 px-2 ml-3":"text-[#6B7280] sm:px-4 px-2"} name="todo">ToDo</a>
          </li>
          <li>
            <a href="/" onClick={handleClick} className={tab===2? "text-[#9333EA] sm:px-4 px-2":"text-[#6B7280] sm:px-4 px-2"} name="project">Project</a>
          </li>
          <li>
            <a href="/"  onClick={handleClick} className={tab===3? "text-[#9333EA] sm:px-4 px-2":"text-[#6B7280] sm:px-4 px-2"} name="team">Team</a>
          </li>
        </ul>
        <div className="justify-between md:flex hidden items-center w-[70px]">
        <DarkModeIcon sx={{ fontSize: 30 }} className=" px-1"/>
        <AccountCircleIcon sx={{ fontSize: 30 }} className="px-1  text-[#9333EA]"/>
        </div>
    </div>
  );    
}

export default Navbar;
