const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/create", userController.create);

module.exports = router;
