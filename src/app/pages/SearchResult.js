import React, { useState } from "react";
import Loader from "../components/Loader";
import Listing from "../components/Listing";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

export default function SearchResult() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/search?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setResults(response.data);
    } catch (error) {
      setError("Failed to fetch search results.");
      console.error("Error fetching search results:", error);
    }
    setLoading(false);
  };
  return (
    <div>
      <div className="shadow p-4 bg-white mb-4 ">
        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-5 gap-4 bg-blue-20">
            <div className="bg-red-30">
              <div>
                <input
                  type="text"
                  id="last_name"
                  className="p-2.5 w-full border"
                  placeholder="Search for anything"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
              <button
                onClick={handleSearch}
                className="bg-blue-500 hover:opacity-90 py-2 px-10"
              >
                <BiSearch size={30} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : results.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          <h1 className="font-bold text-2xl text-gray-800">Search results</h1>
          <div className="grid grid-cols-4 gap-x-3 gap-y-7 space-y-3  ">
            {results.map((post) => (
              <Listing item={post} />
            ))}
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
