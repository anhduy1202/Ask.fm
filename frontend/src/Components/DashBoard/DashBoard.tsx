import React from "react";
import Heading from "../Heading/Heading";
import Layout from "../Layout/Layout";
import "./dashboard.css";
import NavBar from "./NavBar";

const DashBoard: React.FC = () => {
  return (
    <Layout type="dashboard">
      <Heading type="h2" text="My dashboard" />
      <NavBar />
    </Layout>
  );
};

export default DashBoard;
