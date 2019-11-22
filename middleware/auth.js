const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // get the token from headers
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  // unauthorized response, if no token
  if (!token) return res.status(401).send("Access denied. Token missing");

  try {
    //   verify token
    const jwtToken = jwt.verify(token, config.get("myprivatekey"));
    req.user = jwtToken;
    next();
  } catch {
    //   if token invalid
    res.status(400).send("Invalid token");
  }
};
