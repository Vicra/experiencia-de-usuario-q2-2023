const express = require("express");
const router = express.Router();

const cardController = require("../controllers/card.controller");

router.get("/all/:id", cardController.getCards);
router.post("", cardController.createCard);

module.exports = router;
