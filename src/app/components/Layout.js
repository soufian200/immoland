import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import profileimg from "../images/profile.png";
export default function Layout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <nav className=" ">
        <div className="container mx-auto px-4">
          <div className=" px-10 flex justify-between items-center h-16">
            <Link to={`/home`}>
              <h2 className="font-bold">LOGO</h2>
            </Link>
            <Link to={"/seller/" + user.id}>
              <div className="flex justify-center space-x-2 items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full">
                  <img src={profileimg} alt="" />
                </div>
                <h2 className="font-bold">{user.name}</h2>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
