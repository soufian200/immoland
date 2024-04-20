import React, { useEffect, useState } from "react";
import axios from "axios";
import Listing from "../components/Listing";
import Loader from "../components/Loader";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/posts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts.");
        console.error("Error fetching posts:", err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-7">
      {loading ? (
        <Loader />
      ) : posts.length > 0 ? (
        posts.map((post) => <Listing item={post} />)
      ) : (
        <p>No posts available in the feed.</p>
      )}
    </div>
  );
}

export default Feed;
