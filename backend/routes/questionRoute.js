const middlewareController = require("../controllers/middlewareController");
const questionController = require("../controllers/questionController");

const route = require("express").Router();

//CREATE QUESTION
route.post(
  "/:userId",
  middlewareController.verifyToken,
  questionController.createQuestion
);

//GET ALL QUESTIONS FROM ONE USER
route.get("/:userId", questionController.getAllFromOne);

//GET ONE QUESTION
route.get(
  "/detail/:questionId",
  middlewareController.verifyToken,
  questionController.getOneQuestion
);

//ANSWER QUESTION
route.put(
  "/:questionId",
  middlewareController.verifyToken,
  questionController.answerQuestion
);

module.exports = route;
