const express = require("express");
const router = express.Router();
const userInformationController = require("../controllers/userInformationController");

router.get("/", userInformationController.getAllUsers);

router.get("/:id", userInformationController.getOneUser);

router.post("/", userInformationController.createUser);

router.put("/:id", userInformationController.updateUser);

router.delete("/:id", userInformationController.deleteUser);

module.exports = router;
