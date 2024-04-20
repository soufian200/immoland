import { BiLogoGmail, BiPlus, BiSolidCheckCircle } from "react-icons/bi";
import Layout from "../components/Layout";
import { FaPhoneAlt } from "react-icons/fa";
import Listing from "../components/Listing";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Empty from "../components/Empty";
import profileimg from "../images/profile.png";

export default function Profile() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  //
  const fetchPosts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:8000/api/users/${user.id}/posts`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPosts(response.data);
      console.log(posts);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch user posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="bg-gray-100 pt-2 pb-10 text-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-8 gap-3">
            <div className="bg-red-30 col-span-8">
              <div className="shadow p-4 bg-white">
                {/* <h1>My Profile</h1> */}
                <div className="flex flex-col items-center space-x-2 ">
                  <div className="w-28 h-28 bg-gray-200 rounded-full">
                    <img src={profileimg} alt="" />
                  </div>
                  <div className=" text-center">
                    <h3 className="font-medium text-lg ">{user.name}</h3>
                    <h3 className="font-medium text-sm ">{user.email}</h3>
                    <h3 className="font-medium text-lg mt-2">{user.phone}</h3>
                    <h4 className="text-blue-500 text-xs font-bold justify-center flex items-center">
                      <BiSolidCheckCircle size={19} /> Verified
                    </h4>
                  </div>
                </div>
                <div className="flex space-x-3 items-center justify-center mt-4">
                  <Link to={`/seller/${user.id}`}>
                    <div className="bg-green-500 hover:opacity-90 px-5 text-white font-bold py-2.5 flex">
                      <BiPlus size={25} />
                      <span>My Posts</span>
                    </div>
                  </Link>
                  <Link to="/create-post">
                    <div className="bg-primary hover:opacity-90 px-5 text-white font-bold py-2.5 flex">
                      <BiPlus size={25} />
                      <span>Create Post</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
