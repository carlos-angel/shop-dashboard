import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";
import config from "@utils/alert-styles-config.util";

export default function Alert({ type, message, onClose }) {
  return (
    <div
      className={`flex items-center justify-between border px-4 py-3 rounded relative mb-5 ${config[type].colorsContent}`}
      role="alert"
    >
      <div>
        <strong className="font-bold">{config[type].titleMessage}</strong>
        <span className="block sm:inline">{message}</span>
      </div>
      <button type="button">
        <XCircleIcon className={`w-6 h-6 ${config[type].colorIcon}`} onClick={onClose} />
      </button>
    </div>
  );
}
