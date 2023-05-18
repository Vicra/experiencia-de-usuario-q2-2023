const cardService = require("../services/card.service");

const getCards = async (req, res) => {
  console.log("query", req.query);
  console.log("params", req.params);
  try {
    const cards = await cardService.getCards();
    res.send(cards);
  } catch (e) {
    console.log(e);
  }
};

const createCard = async (req, res) => {
  // const card = req.body;
  // card.name

  // destructuracion de objeto
  const { name, description } = req.body;

  try {
    if (typeof name == "string" && typeof description == "string") {
      const [cardId] = await cardService.createCard(req.body);
      res.send({ cardId });
    }
  } catch (e) {
    res.status(500).send({
      error: e.toString(),
    });
  }
};

module.exports = {
  getCards,
  createCard,
};
