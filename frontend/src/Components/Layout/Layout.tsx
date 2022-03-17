import React from "react";
import Heading from "../Heading/Heading";
import "./layout.css";

interface IProps {
  type: String;
}

const Layout: React.FC<IProps> = ({ children, type }) => {
  return (
    <section className={`${type}-container`}>
      {children}
    </section>
  );
};

export default Layout;
