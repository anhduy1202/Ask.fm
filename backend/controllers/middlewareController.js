const jwt = require("jsonwebtoken");

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.TOKEN, (err, user) => {
        if (err) {
          return res.status(403).send("Token is not valid");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(403).send("You're not authenticated");
    }
  },
};

module.exports = middlewareController;
