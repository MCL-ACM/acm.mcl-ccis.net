import React from "react";
import Card from "./Card";

export default function Button({ text, state, className, onClick, type }) {
  return (
    <button
      className={"border-3 px-6 py-3 rounded-lg shadow-lg " + (
        type=="NEXT" ? "bg-cyan-600 text-white" : "bg-white text-cyan-600" 
      )}
      onClick={onClick}
    >
      <p className={" " + className}>{text}</p>
    </button>
  );
}
