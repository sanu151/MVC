require("dotenv").config();
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const userRouter = require("./route/routes");
const productControl = require("./route/routes");
const { server } = require("./controller/control");

app.use(express.static("public")); // Handle Static Files like css, images etc

app.use(express.urlencoded({ extended: true })); // handel incoming request bodies from HTML form

app.use(userRouter);
app.use(productControl);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
