import React from "react";
import { CgSpinner } from "react-icons/cg";

export default function Loader() {
  return (
    <div className="flex">
      <div className="bg-white p-1 rounded-full">
        <CgSpinner size={23} className="animate-spin" />
      </div>
    </div>
  );
}
