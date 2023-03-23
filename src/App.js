import React from "react";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#F6D1FC] to-[#B9D5FF] flex flex-col h-screen w-full">
      <div className="lg:text-[80px] text-[50px] font-bold flex justify-center items-center p-10">
        <h1 className="text-[#404040]">Task</h1>
        <h1 className="text-[#9333EA]">Mate</h1>
      </div>
      <MainPage />
    </div>
  );
}

export default App;
