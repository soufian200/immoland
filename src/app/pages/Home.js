import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import APPROUTES from "../utils/APPROUTES";
import { BiArea, BiBath, BiHeart, BiSearch } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import Listing from "../components/Listing";
import Feed from "./Feed";
import Loader from "../components/Loader";
import { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";

export default function Home() {
  return (
    <Layout>
      {/* search bar */}

      <SearchResult />
      <div className="bg-gray-100 pt-2 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className=" space-y-3 pb-14 pt-4 shadow p-4 bg-white">
            <h1 className="font-bold text-2xl text-gray-800">Latest Posts</h1>
            <Feed />
          </div>
        </div>
      </div>
    </Layout>
  );
}
