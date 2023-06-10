const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

async function connectToMongo() {
  try {
    const mongod = await MongoMemoryServer.create();
    const mongoUri = await mongod.getUri();

    await mongod.start(); // Start the server

    // Wait until the server is running
    await mongod.waitForRunning();

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToMongo();

const studentController = require("./controllers/student.controller");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const cardRouter = require("./routes/card.routes");
const userRouter = require("./routes/user.routes");

// utils
app.use(cors());
app.use("/cards", cardRouter);
app.use("/user", userRouter);

app.post("/student", studentController.createStudent);
app.get("/student", studentController.getAllStudents);
app.listen(3000);
