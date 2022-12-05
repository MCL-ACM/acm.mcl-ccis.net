import React from "react";
export default function Card({ number, text, onClick, active }) {
  return (
    <div
      className={"flex flex-row bg-white border p-3  rounded-lg items-center" + 
      (active ? "border-gray-500" : "border-gray-300")
    }
      onClick={onClick}
    >
      <div
        className={
          "flex  rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] items-center justify-center text-center mr-3 " +
          (active ? "bg-cyan-600 text-white" : "bg-gray-300 text-gray-600")
        }
      >
        {number}
      </div>
      <div className="">{text}</div>
    </div>
  );
}
