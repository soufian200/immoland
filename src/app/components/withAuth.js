import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  return (props) => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If no token, redirect to login page
      return <Navigate replace to="/login" />;
    }
    // If authenticated, render the component
    return <Component {...props} />;
  };
};

export default withAuth;
