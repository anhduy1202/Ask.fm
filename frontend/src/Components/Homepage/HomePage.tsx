import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./homepage.css";
import Question from "./Questions/Question";
import axios from "axios";
import useFetchQuestions from "../../Hook/useFetchQuestions";

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
    const [responses, isError, isLoading] = useFetchQuestions<IQuestion>('v1/question');
 
  return (
    <Layout type={"home"}>
      <section className="home-container">
        {responses?.map((responses,idx) => {
          return (
            <div key={idx} className="question-container">
              <Question question={responses} />
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default HomePage;
