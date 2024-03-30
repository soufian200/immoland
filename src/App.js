// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./app/components/Home";
import About from "./app/components/About";
import Contact from "./app/components/Contact";
import NotFound from "./app/components/NotFound";
import Hero from "./app/components/Hero";
import FQA from "./app/components/fqa";
import Login from "./app/components/Login";
import Signup from "./app/components/Signup";

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
          <Route path="/home" element={<Home />} />
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
