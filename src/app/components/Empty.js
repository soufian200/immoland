import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

export default function Empty() {
  return (
    <div className=" py-10 flex items-center justify-center">
      <div className="text-center flex flex-col text-gray-400 items-center justify-center">
        <BsFillExclamationCircleFill size={40} />
        <p className="mt-2">No Data yet</p>
      </div>
    </div>
  );
}
