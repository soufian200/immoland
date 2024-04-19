import {
  BiCollection,
  BiHeart,
  BiLogoGmail,
  BiPlus,
  BiSolidCheckCircle,
} from "react-icons/bi";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import Listing from "../components/Listing";
import { Link, useParams } from "react-router-dom";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Empty from "../components/Empty";
import profileimg from "../images/profile.png";

export default function Seller() {
  const [tabs, setTabs] = useState(["listings", "favorates"]);
  const [crrTab, setCrrTab] = useState(tabs[0]);
  const favorates = [];
  const listings = [
    {
      id: 1,
      title: "House for sale",
      creationDate: "",
      city: "Rabat",
      price: 2500,
      description: `This house is located in the heart of Rabat. It has a living room with sofa and TV, a kitchenette`,
      rooms: 3,
      bathrooms: 2,
      area: 94.76,
      imageUrl: "/assets/img/house.jpg",
    },
    {
      id: 2,
      title: "House for sale",
      creationDate: "",
      city: "Rabat",
      price: 2500,
      description: `This house is located in the heart of Rabat. It has a living room with sofa and TV, a kitchenette`,
      rooms: 3,
      bathrooms: 2,
      area: 94.76,
      imageUrl: "/assets/img/house.jpg",
    },
    {
      id: 3,
      title: "House for sale",
      creationDate: "",
      city: "Rabat",
      price: 2500,
      description: `This house is located in the heart of Rabat. It has a living room with sofa and TV, a kitchenette`,
      rooms: 3,
      bathrooms: 2,
      area: 94.76,
      imageUrl: "/assets/img/house.jpg",
    },
    {
      id: 4,
      title: "House for sale",
      creationDate: "",
      city: "Rabat",
      price: 2500,
      description: `This house is located in the heart of Rabat. It has a living room with sofa and TV, a kitchenette`,
      rooms: 3,
      bathrooms: 2,
      area: 94.76,
      imageUrl: "/assets/img/house.jpg",
    },
    {
      id: 1,
      title: "House for sale",
      creationDate: "",
      city: "Rabat",
      price: 2500,
      description: `This house is located in the heart of Rabat. It has a living room with sofa and TV, a kitchenette`,
      rooms: 3,
      bathrooms: 2,
      area: 94.76,
      imageUrl: "/assets/img/house.jpg",
    },
    {
      id: 2,
      title: "House for sale",
      creationDate: "",
      city: "Rabat",
      price: 2500,
      description: `This house is located in the heart of Rabat. It has a living room with sofa and TV, a kitchenette`,
      rooms: 3,
      bathrooms: 2,
      area: 94.76,
      imageUrl: "/assets/img/house.jpg",
    },
  ];

  const listMap = { favorates, listings };

  const { id } = useParams();
  const userId = id;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/users/${userId}/posts`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <Layout>
      <div className="bg-gray-100 pt-2 pb-10 text-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-8 gap-3">
            <div className="bg-red-30 col-span-2">
              <div className="shadow p-4 space-y-4 divide-y-2 bg-white ">
                {/*  */}
                <div className="flex flex-col items-center space-x-2 ">
                  <div className="w-28 h-28 bg-gray-200 rounded-full">
                    <img src={profileimg} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-medium text-lg ">{user.name}</h3>
                    <h4 className="text-blue-500 text-xs font-bold justify-center flex items-center">
                      <BiSolidCheckCircle size={19} /> Verified
                    </h4>
                  </div>
                </div>
                {/*  */}
                <div className="pt-4">
                  <h1 className="font-bold text-lg">About Me</h1>
                  <p className="text-gray-600">
                    this is a description about the seller . You can put any
                    information you want here.
                  </p>
                </div>

                {/*  */}
                <div className="grid grid-cols-1 gap-y-2 pt-4">
                  <div className="">
                    <div className="flex items-center p-2 space-x-2">
                      <FaPhoneAlt size={20} />
                      <span className="font-bold">06 12 34 55 00</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center p-2 space-x-2">
                      <BiLogoGmail size={20} />
                      <span className="font-bold">{user.email}</span>
                    </div>
                  </div>
                  {/* <div class="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-bg-primary/50 font-medium rounded-full text-sm px-6 py-4 text-center space-x-1 inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
                    <FaPhoneAlt />
                    <span>06 12 34 55 00</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="bg-red-30 col-span-6">
              <div className="shadow p-4 bg-white">
                <div className="flex  justify-between items-center mb-4">
                  {/* <h1 className="font-bold text-xl">Profile's listings {id}</h1> */}

                  <div className="flex bg-red-40 space-x-1">
                    {tabs.map((tab, i) => (
                      <button
                        key={i}
                        onClick={() => setCrrTab(tab)}
                        className={`${
                          tab !== crrTab ? "bg-gray-100" : "bg-blue-200"
                        } flex space-x-2 p-3`}
                      >
                        <span>
                          My {tab} ({posts.length})
                        </span>
                      </button>
                    ))}
                  </div>
                  <Link to="/create-post">
                    <div className="bg-primary hover:opacity-90 px-5 text-white font-bold py-2.5 flex">
                      <BiPlus size={25} />
                      <span>Create Post</span>
                    </div>
                  </Link>
                </div>

                {listMap[crrTab].length == 0 ? (
                  <Empty />
                ) : (
                  <div className="grid grid-cols-3  gap-x-2 gap-y-7">
                    {/* {posts.map((item, index) => (
                      <Listing item={item} />
                    ))} */}
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
                )}
              </div>
            </div>
          </div>
          {/* <div className="shadow p-4 bg-white mb-4 "></div> */}
        </div>
      </div>
    </Layout>
  );
}
