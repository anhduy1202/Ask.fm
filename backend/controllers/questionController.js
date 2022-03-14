const db = require("../database");
const middlewareController = require("./middlewareController");
const questionController = {
  //CREATE QUESTION
  createQuestion: (req, res) => {
    const authorId = req.body.authorId;
    const receiveId = req.params.userId;
    const content = req.body.content;
    try {
      db.query(
        "INSERT INTO question (authorId, receiveId, content) VALUES  (?,?,?);",
        [authorId, receiveId, content],
        (err, results) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).send("Question created!");
        }
      );
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  //GET ALL QUESTIONS FROM A USER
  /*
  Note: Only get answered question for guest user
  get both unanswered and answered for author user
   */
  getAllFromOne: (req, res) => {
    const userId = req.params.userId.trim();
    try {
      middlewareController.verifyToken(req, res, () => {
        if (req.user.id == userId) {
          console.log("author user");
          db.query(
            "SELECT content, time, answer FROM question WHERE receiveId = ?",
            [userId],
            (err, results) => {
              if (err) {
                res.status(500).send(err);
              }
              res.status(200).send(results);
            }
          );
        } else {
          //guest user can only see answered question
          console.log("guest user");
          db.query(
            "SELECT content, time, answer FROM question WHERE receiveId = ? AND answered = 1",
            [userId],
            (err, results) => {
              if (err) {
                res.status(500).send(err);
              }
              res.status(200).send(results);
            }
          );
        }
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  //GET ONE QUESTION
  getOneQuestion: (req, res) => {
    const id = req.params.questionId;
    try {
      middlewareController.verifyToken(req, res, () => {
        if (req.user.id == userId) {
          db.query(
            "SELECT content, time FROM question WHERE id = ?",
            [id],
            (err, results) => {
              if (err) {
                res.status(500).send(err);
              }
              res.status(200).send(results);
            }
          );
        } else {
          res.status(403).send("You're not allowed to do that");
        }
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  //ANSWER QUESTION
  answerQuestion: (req, res) => {
    const id = req.params.questionId;
    const answer = req.body.answer;
    try {
      //Find author of the question
      db.query(
        "SELECT authorId, answered FROM question WHERE id = ?",
        [id],
        (err, results) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log(results);
          middlewareController.verifyToken(req, res, () => {
            if (req.user.id == results[0].authorId) {
              //If question hasn't been answered
              if (results[0].answered == 0) {
                db.query(
                  "UPDATE question SET answered = 1, answer = ? WHERE id = ?",
                  [answer, id],
                  (err2, results2) => {
                    if (err) {
                      res.status(500).send(err2);
                    }
                    res.status(200).send("Question answered");
                  }
                );
              } else {
                return res
                  .status(403)
                  .send("You already answered this question");
              }
            } else {
              res.status(403).send("You're not allowed to do that");
            }
          });
        }
      );
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};

module.exports = questionController;
