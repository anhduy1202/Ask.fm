const middlewareController = require("../controllers/middlewareController");
const questionController = require("../controllers/questionController");

const route = require("express").Router();

//CREATE QUESTION
/* User has to log in to ask question */
route.post(
  "/:userId",
  middlewareController.verifyToken,
  questionController.createQuestion
);


//GET ALL ANSWERED QUESTIONS AVAILABLE 
route.get("/", questionController.getAllQuestions);

//GET ALL QUESTIONS FROM ONE USER
/* Anyone can see the answered question */
route.get("/:userId", questionController.getAllFromOne);

//GET ONE QUESTION
route.get(
  "/detail/:questionId",
  questionController.getOneQuestion
);

//ANSWER QUESTION
route.put(
  "/:questionId",
  middlewareController.verifyToken,
  questionController.answerQuestion
);

module.exports = route;
