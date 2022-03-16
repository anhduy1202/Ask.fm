import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Heading from "./Components/Heading/Heading";
import Layout from "./Components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout type="homepage">
        <Heading type="h1" text="Ask.me" />
        <Heading type="subtitle" text="Ask anything anonymously" />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/answered" element={<DashBoard />} />
          <Route path="/unanswered" element={<DashBoard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
