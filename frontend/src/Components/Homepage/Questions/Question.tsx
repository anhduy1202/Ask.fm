import React from "react";
import { Link } from "react-router-dom";
import { IQuestion } from "../HomePage";
import {format} from "timeago.js";

interface IProps {
  question: IQuestion;
}
const Question: React.FC<IProps> = (props) => {
  const { question } = props;
  const { time, id, name, receiveId, content, answer, answered } = question;
  return (
    <>
      <div className="question-box">
        <div className="question-content">Q: {content}</div>
        <Link className="question-author" to={`/profile/${receiveId}`}>
          {name}
        </Link>
      </div>
      <div className="question-answer">A: {answer}</div>
      <div className="question-time"> {format(`${time}`)} </div>
    </>
  );
};

export default Question;
