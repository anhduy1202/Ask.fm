import React from "react";
import "./heading.css";

interface IProps {
  text: String;
  type: String;
}

const Heading: React.FC<IProps> = (props) => {
  const { text, type } = props;
  return <p className={`heading-${type}`}> {text} </p>;
};

export default Heading;
