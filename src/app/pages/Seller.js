import { BiLogoGmail, BiPlus, BiSolidCheckCircle } from "react-icons/bi";
import Layout from "../components/Layout";
import { FaPhoneAlt } from "react-icons/fa";
import Listing from "../components/Listing";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Empty from "../components/Empty";
import profileimg from "../images/profile.png";

export default function Seller() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [loading2, setLoading2] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const crruser = JSON.parse(localStorage.getItem("user"));

  const fetchUser = async () => {
    try {
      setLoading2(true);
      const response = await axios.get(
        `http://localhost:8000/api/users/${id}/posts`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPosts(response.data);
      setLoading2(false);
    } catch (error) {
      console.error("Failed to fetch user posts:", error);
      setLoading2(false);
    }
  };

  //
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="bg-gray-100 pt-2 pb-10 text-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-8 gap-3">
            <div className="bg-red-30 col-span-2">
              <div className="shadow p-4 space-y-4 divide-y-2 bg-white ">
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <div className="flex flex-col items-center space-x-2 ">
                      <div className="w-28 h-28 bg-gray-200 rounded-full">
                        <img src={profileimg} alt="" />
                      </div>
                      <div className=" text-center">
                        <h3 className="font-medium text-lg ">{user.name}</h3>
                        <h3 className="font-medium text-sm ">{user.email}</h3>
                        <h4 className="text-blue-500 text-xs font-bold justify-center flex items-center">
                          <BiSolidCheckCircle size={19} /> Verified
                        </h4>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h1 className="font-bold text-lg">About Me</h1>
                      <p className="text-gray-600">
                        this is a description about the seller . You can put any
                        information you want here.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-y-2 pt-4">
                      <div className="">
                        <div className="flex items-center p-2 space-x-2">
                          <FaPhoneAlt size={20} />
                          <span className="font-bold">{user.phone}</span>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex items-center p-2 space-x-2">
                          <BiLogoGmail size={20} />
                          <span className="font-bold">{user.email}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="bg-red-30 col-span-6">
              <div className="shadow p-4 bg-white">
                <div className="flex  justify-between items-center mb-4">
                  <div className="flex bg-red-40 space-x-1">
                    <span className="font-bold text-xl">
                      Posts ({posts.length})
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3  gap-x-2 gap-y-7">
                  {loading ? (
                    <Loader />
                  ) : posts.length === 0 ? (
                    <Empty />
                  ) : (
                    posts.map((item, index) => (
                      <Listing index={index} item={item} />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
