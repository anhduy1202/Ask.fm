import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Heading from "./Components/Heading/Heading";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Components/Homepage/HomePage";
import AuthHeading from "./Components/Auth/AuthHeading";
import Login from "./Components/Auth/Login/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Layout type="homepage">
        <AuthHeading />
        <Heading type="h1" text="Ask.me" />
        <Heading type="subtitle" text="Ask anything anonymously" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/answered" element={<DashBoard />} />
          <Route path="/unanswered" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
