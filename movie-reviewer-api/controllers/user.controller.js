const HTTPCodes = require("../utils/HTTPCodes");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const { isEmail, isPassword } = require("../utils/validator");
const { registerUser, getCredentials } = require("../services/user.service");

async function register(req, res) {
  try {
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
      const salt = crypto.randomBytes(128).toString("base64");
      const encryptedPassword = crypto
        .pbkdf2Sync(password, salt, 30000, 64, "sha256")
        .toString("base64");

      // req.body
      /*
      {
        email: ""
        password: ""
      }
      */
      const [newUserId] = await registerUser({
        ...req.body,
        encryptedPassword,
        // salt: salt,
        salt,
      });

      res.send({
        success: true,
        newUserId,
      });
    }
  } catch (e) {
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).send({
      message: "Internal server error",
      detail: e.toString(),
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  // 0. TODO: middleware

  // 1. verificacion de los parametros (formato)
  try {
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
      const [credentials] = await getCredentials(email);

      console.log("credentials", credentials);
      const encryptedPassword = crypto
        .pbkdf2Sync(password, credentials.salt, 30000, 64, "sha256")
        .toString("base64");

      console.log("process.env.TOKEN_KEY", process.env.TOKEN_KEY);
      if (encryptedPassword == credentials.password) {
        // generate
        const accessToken = jwt.sign(
          { email },
          process.env.TOKEN_KEY || "AS4D5FF6G78NHCV7X6X5C",
          {
            expiresIn: "1d",
          }
        );

        const refreshToken = jwt.sign(
          { email },
          process.env.TOKEN_KEY || "AS4D5FF6G78NHCV7X6X5C",
          {
            expiresIn: "1m",
          }
        );
        res.send({
          accessToken,
          refreshToken,
          name: credentials.name,
        });
      } else {
        res.status(HTTPCodes.UNAUTHORIZED).send({
          message: "Contrasena incorrecta",
        });
      }
    }
  } catch (e) {
    // logging
    // writeFile(exception e)
    console.log(e);

    // alerts/notifications
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).send({
      message: "Try again later",
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
