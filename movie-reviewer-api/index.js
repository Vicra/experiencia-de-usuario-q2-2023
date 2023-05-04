const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { isEmail, isPassword } = require("./utils/validator");
app.use(bodyParser.json());

app.post("/login/", function (req, res) {
  // 0. TODO: middleware

  // 1. verificacion de los parametros (formato)
  if (isEmail(req.body.email)) {
    console.log("valido");
  } else {
    console.log("no es valido");
  }

  if (isPassword(req.body.password)) {
    console.log("password valido");
  } else {
    console.log("password no es valido");
  }

  // 2. TODO: ejecucion del procedimiento
  // 2.1 validacion en base de datos

  // 3. TODO: mandar una respuesta para cada escenario

  // 4. TODO: control de excepciones try catch
  res.send({
    success: true,
  });
});

app.listen(3000);
