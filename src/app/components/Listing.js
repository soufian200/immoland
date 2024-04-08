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
          src="https://a0.muscache.com/im/pictures/26fab98c-bf20-41cc-88a9-418be5c91527.jpg?im_w=720"
          alt=""
        />
        <div className=" pt-4 flex justify-between ">
          <div>
            <h2 className=" text-lg font-semibold">{item.title}</h2>

            <div className="flex space-x-3 my-1 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-50  p-1 rounded-full">
                  <BiArea size={23} />
                </div>
                <h3 className="">{item.area} m2</h3>
              </div>

              <div className="flex items-center space-x-2 ">
                <div className="bg-gray-50  p-1 rounded-full">
                  <BiBath size={23} />
                </div>
                <h3 className="">{item.bathrooms}</h3>
              </div>

              <div className="flex items-center space-x-2 ">
                <div className="bg-gray-50  p-1 rounded-full">
                  <MdOutlineBed size={23} />
                </div>
                <h3 className="">{item.rooms}</h3>
              </div>
            </div>

            <h1 className=" text-sm text-gray-400">Rabat</h1>
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
