var db = require("../database");
const bcrypt = require("bcrypt");

const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
      //Hash password
      const salt = await bcrypt.genSalt(5);
      const hashed = await bcrypt.hash(password, salt);
      //Create new user
      db.query(
        "INSERT INTO user (email, password) VALUES (?,?);",
        [email, hashed],
        (err, results) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).send(results);
        }
      );
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  //LOGIN
  loginUser: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
      //Check if user email exist
      db.query(
        "SELECT * FROM user WHERE email = ?",
        [email],
        async (err, results) => {
          if (err) {
            return res.status(500).send(err);
            //If user email exists
            //Check if password is valid
          } else if (results.length > 0) {
            const validPassword = await bcrypt.compare(
              password,
              results[0]?.password
            );
            if (!validPassword) {
              res.status(404).send("Incorrect password");
            } else {
              res.status(200).send(results);
            }
          } else {
            res.status(404).send("Email doesn't exist");
          }
        }
      );
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = authController;
