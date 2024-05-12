const path = require("path");

const users = require("../model/userDatabase");

exports.getHome = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/userForm.html"));
};

exports.saveUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  // console.log(users);
  res.status(201).json({
    success: true,
    users,
  });
};

exports.getError = (req, res, next) => {
  res.status(404).json({
    Error: "URL Not Found",
  });
};
