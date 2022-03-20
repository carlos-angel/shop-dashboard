import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

export default function Alert({ type, message, onClose }) {
  let colors = "";
  let svgColor = "";
  let typeMessage = "";
  switch (type) {
    case "danger":
      colors = "border-red-400 text-red-700 bg-red-100";
      svgColor = "text-red-500";
      typeMessage = "Error! ";
      break;

    case "success":
      colors = "border-green-400 text-green-700 bg-green-100";
      svgColor = "text-green-500";
      typeMessage = "Success! ";
      break;

    default:
      break;
  }

  return (
    <div
      className={`flex items-center justify-between border px-4 py-3 rounded relative mb-5 ${colors}`}
      role="alert"
    >
      <div>
        <strong className="font-bold">{typeMessage}</strong>
        <span className="block sm:inline">{message}</span>
      </div>
      <button type="button">
        <XCircleIcon className={`w-6 h-6 ${svgColor}`} onClick={onClose} />
      </button>
    </div>
  );
}
