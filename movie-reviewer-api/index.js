const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const fs = require("fs");
const YAML = require('yaml');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const cardRouter = require("./routes/card.routes");
const userRouter = require("./routes/user.routes");

// utils
app.use(cors());
app.use("/cards", cardRouter);
app.use("/user", userRouter);
app.listen(3000);
