import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./homepage.css";
import Question from "./Questions/Question";
import useFetchQuestions from "../../Hook/useFetchQuestions";
import { useDispatch } from "react-redux";
import { setFullPost } from "../../redux/navSlice";

export interface IQuestion {
  id: Number;
  name: String;
  receiveId: Number;
  content: String;
  time: String;
  answered: Boolean;
  answer: String;
}

const HomePage: React.FC = () => {
  const [responses, isError, isLoading] = useFetchQuestions<IQuestion>(
    "v1/question",
    ""
  );
  const dispatch = useDispatch();
  const openFullPost = () => {
    dispatch(setFullPost(true));
  }

  return (
    <Layout type={"home"}>
      <section className="home-container">
        {isLoading && <div className=""> Loading questions...</div>}
        {responses?.map((responses, idx) => {
          return (
            <div key={idx} className="question-container" onClick={openFullPost}>
                <Question question={responses} />
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default HomePage;
