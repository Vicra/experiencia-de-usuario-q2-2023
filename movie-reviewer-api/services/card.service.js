const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'victor',
    password: 'test',
    database: 'trellodb'
  }
});


async function getCards() {
  let cards = await knex.select('*')
    .from('cards');
  cards = JSON.stringify(cards);
  return JSON.parse(cards);
}

async function createCard(card, listId) {
  return knex('cards').insert({
    name: card.name,
    description: card.description,
    list_id: listId
  });
}

module.exports = {
  getCards,
  createCard
};