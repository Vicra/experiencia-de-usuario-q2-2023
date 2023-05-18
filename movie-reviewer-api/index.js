const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cardRouter = require("./routes/card.routes");
const userRouter = require("./routes/user.routes");

// utils

app.use("/cards", cardRouter);
app.use("/user", userRouter);

app.listen(3000);
