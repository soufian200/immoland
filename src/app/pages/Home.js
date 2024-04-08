import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import APPROUTES from "../utils/APPROUTES";
import { BiArea, BiBath, BiHeart, BiSearch } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import Listing from "../components/Listing";

export default function Home() {
  // dataset
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
  return (
    <Layout>
      {/* search bar */}

      <div className="bg-gray-100 pt-2 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="shadow p-4 bg-white mb-4 ">
            <div className="max-w-6xl mx-auto ">
              {/* <div className="bg-green-40 grid grid-cols-6 gap-3">
                <div className="bg-red-30 col-span-3">
                  <input
                    type="text"
                    id="last_name"
                    className="p-2.5 w-full border"
                    placeholder="Search for anything
                      "
                  />
                </div>
                <div className="bg-red-30 col-span-2">
                  <select id="countries" className="h-full w-full border">
                    <option selected>Choose a City</option>
                    <option value="US">Rabat</option>
                    <option value="CA">Casa</option>
                    <option value="FR">Agadir</option>
                    <option value="DE">Tangier</option>
                  </select>
                </div>
                <div className="bg-red-30 ">
                  <button className="bg-blue-500 hover:opacity-90 py-2 px-10">
                    <BiSearch size={30} className="text-white" />
                  </button>
                </div>
              </div> */}
              <div className="grid grid-cols-5 gap-4 bg-blue-20">
                <div className="bg-red-30">
                  <div>
                    <input
                      type="text"
                      id="last_name"
                      className="p-2.5 w-full border"
                      placeholder="Search for anything
                      "
                    />
                  </div>
                </div>
                <div className="bg-green-30 ">
                  <select id="countries" className="p-2.5 w-full border">
                    <option selected>Choose a City</option>
                    <option value="US">Rabat</option>
                    <option value="CA">Casa</option>
                    <option value="FR">Agadir</option>
                    <option value="DE">Tangier</option>
                  </select>
                </div>
                <div className="bg-red-30">
                  <div>
                    <input
                      type="number"
                      id="last_name"
                      className="p-2.5 w-full border"
                      placeholder="space (m2)"
                    />
                  </div>
                </div>
                <div className="bg-red-30">
                  <div>
                    <div className="grid grid-cols-2 gap-0.5 ">
                      <input
                        type="number"
                        id="last_name"
                        className="py-2.5 border"
                        placeholder="  Min price"
                      />
                      <input
                        type="number"
                        id="last_name"
                        className="py-2.5 border"
                        placeholder="  Max price"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-red-30 flex items-end">
                  <button className="bg-blue-500 hover:opacity-90 py-2 px-10">
                    <BiSearch size={30} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-3 pb-14 pt-4 shadow p-4 bg-white">
            <h1 className="font-bold text-2xl text-gray-800">
              Search Bar here
            </h1>
            <div className="grid grid-cols-4 gap-x-3 gap-y-7">
              {listings.map((item, index) => {
                return <Listing item={item} />;
              })}
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
            <div className="bg-blue-300 ">
              <img
                src="https://a0.muscache.com/im/pictures/26fab98c-bf20-41cc-88a9-418be5c91527.jpg?im_w=720"
                alt="img"
              />
            </div>
          ))} */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
