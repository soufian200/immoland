import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav className=" ">
        <div className="container mx-auto px-4">
          <div className=" px-10 flex justify-between items-center h-16">
            <Link to={`/home`}>
              <h2 className="font-bold">LOGO</h2>
            </Link>
            <div className="flex justify-center space-x-2 items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              <h2 className="font-bold">Mo Salah</h2>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
