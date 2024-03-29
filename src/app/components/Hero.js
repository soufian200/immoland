import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="pt-12">
        <div className="bg-gray-200">hero</div>
      </div>
    </div>
  );
}
