import React from "react";
import { BiArea, BiBath, BiHeart } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import { Link } from "react-router-dom";
import APPROUTES from "../utils/APPROUTES";

export default function Listing({ item }) {
  return (
    <Link to={`${APPROUTES.details}/${item.id}`}>
      <div className="">
        <img
          class="  bg-gray-200 mx-auto "
          src={
            item.image_path.includes("https://")
              ? item.image_path
              : "http://localhost:8000/storage/" + item.image_path
          }
          alt=""
        />
        <div className=" pt-4 flex justify-between ">
          <div>
            <h2 className="  font-semibold">{item.title}</h2>

            <div className="flex space-x-3 my-1 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-50  p-1 rounded-full">
                  <BiArea size={23} />
                </div>
                <h3 className="">{item.space} m2</h3>
              </div>

              <div className="flex items-center space-x-2 ">
                <div className="bg-gray-50  p-1 rounded-full">
                  <MdOutlineBed size={23} />
                </div>
                <h3 className="">{item.rooms}</h3>
              </div>
            </div>

            <h1 className=" text-sm text-gray-600 capitalize">{item.city}</h1>
            <h1 className=" text-gl text-slate-700 font-bold">
              {item.price} MAD
            </h1>
          </div>
          <div>
            <div className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full">
              <BiHeart size={23} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
