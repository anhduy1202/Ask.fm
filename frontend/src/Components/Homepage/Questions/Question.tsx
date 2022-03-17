import React from "react";
import { IQuestion } from "../HomePage";

interface IProps {
  question: IQuestion;
}
const Question: React.FC<IProps> = (props) => {
  const { question } = props;
  const { time, id, name, receiveId, content, answer, answered } = question;
  return (
    <>
      <div className="quesiton-content">Q: {content}</div>
      <div className="qeustion-author">{name}</div>
    </>
  );
};

export default Question;
