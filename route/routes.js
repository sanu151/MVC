const express = require("express");
const { getUser, getHome, getError } = require("../controller/control");
const router = express.Router();

router.get("/", getHome);

router.use("/user", getUser);

router.use(getError);

module.exports = router;
