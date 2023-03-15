import React from "react";
import List from "./List";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="rounded-[10px] h-[460px] w-[670px]">
        <Navbar />
        <div className="flex justify-between items-between mt-7">
          <Sidebar />
          <List />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
