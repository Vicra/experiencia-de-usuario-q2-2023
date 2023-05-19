const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "test",
    password: "test",
    database: "trellodb",
  },
});

const registerUser = async (user) => {
  return await knex("users").insert({
    email: user.email,
    password: user.encryptedPassword,
    salt: user.salt,
  });
};

const getCredentials = async (email) => {
  let credentials = await knex
    .select("password", "salt")
    .from("users")
    .where("email", email);
  credentials = JSON.stringify(credentials);
  return JSON.parse(credentials);
};

module.exports = {
  registerUser,
  getCredentials,
};
