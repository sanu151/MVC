require("dotenv").config();
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const userRouter = require("./route/routes");
const { server } = require("./controller/control");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
