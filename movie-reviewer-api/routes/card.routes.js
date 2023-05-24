const express = require("express");
const router = express.Router();

const cardController = require("../controllers/card.controller");

const { authenticateToken } = require("../auth/middleware");

router.get("/all", authenticateToken, cardController.getCards);
router.post("", cardController.createCard);

module.exports = router;
