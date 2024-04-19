import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaFacebookMessenger, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import profileimg from "../images/profile.png";
import { MdOutlineBed } from "react-icons/md";
import { useEffect, useState } from "react";
import { GiBowlingAlley } from "react-icons/gi";
import Listing from "../components/Listing";
import axios from "axios";
import Loader from "../components/Loader";
export default function PostDetail() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const postId = id;

  const [imgs, setImgs] = useState([
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  ]);
  const [crrImg, setCrrImg] = useState(imgs[0]);

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
  ];
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the details of the post by ID
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/posts/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setPost(response.data);
      } catch (err) {
        setError("Failed to fetch post details");
        console.error("Error fetching post details:", err);
      }
    };

    fetchPostDetail();
  }, [postId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Layout>
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto space-y-3 pb-14 pt-4">
          {/* <h1>Listing detail {id}</h1> */}

          {/*  */}
          {/* <div class="grid gap-4 ">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={crrImg} alt="" />
            </div>
            <div class="grid grid-cols-5 gap-4">
              {imgs.map((src, index) => (
                <button onClick={() => setCrrImg(src)}>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={src}
                      alt=""
                    />
                  </div>
                </button>
              ))}
            </div>
          </div> */}

          <div className="shadow-lg p-4  space-y-3 divide-y bg-white">
            {!post ? (
              <Loader />
            ) : (
              <div>
                <div className="space-y-2 ">
                  <div className="flex justify-between mt-3">
                    <h1 className="font-bold text-2xl">{post.title}</h1>
                    <h2 className="text-3xl font-bold text-primary">
                      {post.price}MAD
                    </h2>
                  </div>
                  <div className="flex space-x-3 text-gray-400">
                    <div className="flex space-x-1">
                      <CiLocationOn size={23} />
                      <h4>{post.city}</h4>
                    </div>
                    <div className="flex space-x-1">
                      <CiClock2 size={23} />
                      <h4>il y a 18 minutes</h4>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div class="grid grid-cols-8 grid-row-4 gap-2 ">
                  <div className="bg-red-300 col-span-4 row-span-2 relative">
                    <img
                      src={`http://localhost:8000/storage/${post.image_path}`}
                      alt={post.title}
                    />
                    {/* <img
                  src="https://a0.muscache.com/im/pictures/a11da12e-fcec-4115-827b-019043a04c25.jpg?im_w=1200"
                  alt="img"
                /> */}
                    <button className="absolute bottom-2 flex space-x-2 right-2 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-full">
                      <GrGallery />
                      <span className="font-bold text-xs">See All Photos</span>
                    </button>
                  </div>
                  <div className=" col-span-2">
                    <img
                      src="https://a0.muscache.com/im/pictures/26fab98c-bf20-41cc-88a9-418be5c91527.jpg?im_w=720"
                      alt="img"
                    />
                  </div>
                  <div className=" col-span-2">
                    <img
                      src="https://a0.muscache.com/im/pictures/efa62a16-83ea-46cb-b9c9-70506e1221f1.jpg?im_w=720"
                      alt="img"
                    />
                  </div>
                  <div className=" col-span-2">
                    <img
                      src="https://a0.muscache.com/im/pictures/74c96903-8903-49d2-9c6b-eb3dd31d1544.jpg?im_w=720"
                      alt="img"
                    />
                  </div>
                  <div className=" col-span-2">
                    <img
                      src="https://a0.muscache.com/im/pictures/99304542-041f-42a9-987e-4d82bb7b472f.jpg?im_w=720"
                      alt="img"
                    />
                  </div>
                </div>

                {/*  */}
                <div className=" pt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2 ">
                    <div className="w-20 h-20 bg-gray-200 rounded-full">
                      <img src={profileimg} alt="" />
                    </div>
                    <Link to="/seller/1">
                      <div>
                        <h3 className="font-medium text-lg">{user.name}</h3>
                        <h4 className="text-blue-500 text-xs font-bold flex items-center">
                          <BiSolidCheckCircle size={19} /> Verified
                        </h4>
                      </div>
                    </Link>
                  </div>
                  <div className=" flex space-x-2">
                    <button
                      type="button"
                      class="text-white bg-indigo-500 hover:bg-primary/90 p-5 rounded-full"
                    >
                      <FaFacebookMessenger size={23} />
                    </button>
                    <button
                      type="button"
                      class="text-white bg-green-500 hover:bg-primary/90 p-5 rounded-full"
                    >
                      <FaWhatsapp size={23} />
                    </button>
                    <button
                      type="button"
                      class="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-bg-primary/50 font-medium rounded-full text-sm px-6 py-4 text-center space-x-1 inline-flex items-center dark:focus:ring-[#3b5998]/55 "
                    >
                      <FaPhoneAlt />
                      <span>06 12 34 55 00</span>
                      {/* <span>Contact the seller</span> */}
                    </button>
                  </div>
                </div>

                {/*  */}
                <div className=" pt-4">
                  <h3 className="font-bold">Description</h3>
                  <p className="text-lg text-gray-500">{post.description}</p>
                </div>

                {/*  */}
                <div className="pt-4">
                  <h3 className="font-bold">Details</h3>
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            Space
                          </th>
                          <td class="px-6 py-4">{post.space}m2</td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            Rooms
                          </th>
                          <td class="px-6 py-4">{post.rooms}</td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            Beds
                          </th>
                          <td class="px-6 py-4">3</td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            Floors
                          </th>
                          <td class="px-6 py-4">2</td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            Elevator in building
                          </th>
                          <td class="px-6 py-4">Yes</td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            Parking space included
                          </th>
                          <td class="px-6 py-4">No</td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                          >
                            bathrooms
                          </th>
                          <td class="px-6 py-4">3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/*  */}
                  {/* <div className="pt-8">
                    <h3 className="font-bold text-xl mb-2">Similar</h3>
                    <div className="grid grid-cols-4 gap-x-3 gap-y-7">
                      {listings.map((item, index) => {
                        return <Listing item={item} type={index} />;
                      })}
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
