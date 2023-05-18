const HTTPCodes = require("../utils/HTTPCodes");

const { isEmail, isPassword } = require("../utils/validator");

function register(req, res) {
  const { email, password } = req.body;
  const errorMessages = [];
  if (!isEmail(email)) {
    errorMessages.push("Email is not valid");
  }

  if (!isPassword(password)) {
    errorMessages.push("Password is not valid");
  }

  if (errorMessages.length) {
    res.status(HTTPCodes.BAD_REQUEST).send({ error: errorMessages });
  } else {
    
    res.send({
      success: true,
    });
  }
}

function login(req, res) {
  const { email, password } = req.body;
  // 0. TODO: middleware

  // 1. verificacion de los parametros (formato)
  const errorMessages = [];
  if (!isEmail(email)) {
    errorMessages.push("Email is not valid");
  }

  if (!isPassword(password)) {
    errorMessages.push("Password is not valid");
  }

  if (errorMessages.length) {
    res.status(HTTPCodes.BAD_REQUEST).send({ error: errorMessages });
  } else {
    res.send({
      success: true,
    });
  }

  // 2. TODO: ejecucion del procedimiento
  // 2.1 validacion en base de datos

  // 3. TODO: mandar una respuesta para cada escenario

  // 4. TODO: control de excepciones try catch
}

module.exports = {
  register,
  login,
};
