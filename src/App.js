// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import Hero from "./app/pages/Hero";
import FQA from "./app/pages/fqa";
import Login from "./app/pages/Login";
import Signup from "./app/pages/Signup";
import APPROUTES from "./app/utils/APPROUTES";
import PostDetail from "./app/pages/PostDetail";
import Seller from "./app/pages/Seller";
import CreatePost from "./app/pages/CreatePost";
import withAuth from "./app/components/withAuth";
import Profile from "./app/pages/Profile";

function App() {
  return (
    <Router>
      <div>
        {/* <nav className="">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path={APPROUTES.home} Component={withAuth(Home)} />
          <Route
            path={APPROUTES.details + "/:id"}
            Component={withAuth(PostDetail)}
          />
          <Route path="/seller/:id" Component={withAuth(Seller)} />
          <Route path="/profile" Component={withAuth(Profile)} />
          <Route path="/create-post" Component={withAuth(CreatePost)} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fqa" element={<FQA />} />
          <Route path="/notfound" element={<FQA />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
