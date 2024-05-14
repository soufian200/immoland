import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import profileimg from "../images/profile.png";
import { BiLogOut } from "react-icons/bi";
import logo from "../images/logo.png";
export default function Layout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token and user data from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div>
      <nav className=" ">
        <div className="container mx-auto px-4">
          <div className=" px-10 flex justify-between items-center h-16">
            <Link to={`/home`}>
              <img src={logo} alt="" width={150} />
            </Link>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleLogout}
                className="bg-gray-200 hover:bg-gray-300 h-10 flex items-center justify-center w-10 rounded-full"
              >
                <BiLogOut size={20} />
              </button>
              <Link to={"/profile"}>
                <div className="flex justify-center space-x-2 items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full">
                    <img src={profileimg} alt="" />
                  </div>
                  <h2 className="font-bold">{user.name}</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
