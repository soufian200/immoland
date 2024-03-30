import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="">
      <Navbar />

      <div className="">
        <div className="bg-cover bg-center h-screen flex  items-center justify-center bg-slate-800 hero">
          <div className="text-center">
            <h1 className="text-7xl  font-bold mb-4 text-white">
              Welcome to ImmoLand
            </h1>
            <p className="text-xl text-white">Find And Sell Real State</p>
            <div className="mt-10">
              <Link
                to="/login"
                className="text-sm font-bold rounded-lg bg-blue-600 px-5 py-4 text-white"
              >
                Get Started <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
