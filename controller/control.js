const path = require("path");

exports.getHome = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/userForm.html"));
};

exports.getError = (req, res, next) => {
  res.status(404).json({
    Error: "URL Not Found",
  });
};
