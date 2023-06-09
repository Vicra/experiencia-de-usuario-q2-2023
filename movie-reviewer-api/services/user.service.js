const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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
    .select("password", "salt", "name")
    .from("users")
    .where("email", email);
  credentials = JSON.stringify(credentials);
  return JSON.parse(credentials);
};

const getAllUsers = async (limit, offset) => {
  let users = await knex
    .select("email", "id")
    .from("users")
    .limit(limit)
    .offset(offset)
    .orderBy("id");
  users = JSON.stringify(users);

  let [total] = await knex("users").count("*");
  total = total["count(*)"];
  return {
    users: JSON.parse(users),
    total,
  };
};

module.exports = {
  registerUser,
  getCredentials,
  getAllUsers,
};
