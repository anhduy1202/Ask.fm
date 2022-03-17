import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const AuthHeading: React.FC = () => {
  return (
    <div className="auth-container">
      <Link to="/" className="home-heading">
        Home
      </Link>
      <Link to="/login" className="login-heading">
        Login
      </Link>
    </div>
  );
};

export default AuthHeading;
