import React from "react";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#F6D1FC] to-[#B9D5FF] h-screen md:flex w-full">
      <div className="text-[80px] font-bold flex justify-center items-center p-16">
        <h1 className="text-[#404040]">TaskMate</h1>
        <h1 className="text-[#9333EA]">UI</h1>
      </div>
      <MainPage />
    </div>
  );
}

export default App;
