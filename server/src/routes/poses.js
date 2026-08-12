const express = require("express");
const router = express.Router();
const posesController = require("../controllers/poses");


// router.get("/", posesController.getPoses);
router.get("/poses", posesController.showPoses);

module.exports = router;