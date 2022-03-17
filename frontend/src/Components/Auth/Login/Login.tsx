import React, { useState } from "react";
import "../auth.css";
import AuthLayout from "../AuthLayout";


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <AuthLayout type="Login">
      <form className="auth-form">
        <label> Email </label>
        <input type="text" />
        <label> Password </label>
        <input type="text" />
      </form>
    </AuthLayout>
  );
};

export default Login;
