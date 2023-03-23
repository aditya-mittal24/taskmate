import React, { useState } from "react";
import List from "./List";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainPage() {
  const [tab, setTab] = useState(1);
  function handleClick(event) {
    if (event.target.name === "today") {
      setTab(1);
    } else if (event.target.name === "work") {
      setTab(2);
    } else if (event.target.name === "project") {
      setTab(3);
    } else if (event.target.name === "important") {
      setTab(4);
    } else {
      setTab(5);
    }
  }
  return (
    <div className="flex items-start justify-center h-full w-full">
      <div className="rounded-[10px] grid grid-cols-4 sm:gap-6 gap-y-6 gap-x-2 lg:w-[66%] md:w-[80%] w-full px-4">
        <Navbar />
        <Sidebar handleClick={handleClick} tab={tab} />
        <List tab={tab}/>
      </div>
    </div>
  );
}

export default MainPage;
