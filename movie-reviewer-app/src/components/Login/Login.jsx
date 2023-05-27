import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { useHistory } from "react-router-dom";
import { useState } from "react";

import services from "../../utils/services";
import validator from "../../utils/validator";

function Login() {
  const history = useHistory();
  // { email, password }

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  /*
  {
    email: "Email is invalid",
    password: "",
  }
  */

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    // validar los inputs
    if (!validator.isEmail(form.email)) {
      setErrors({
        ...errors,
        email: "Email is invalid",
      });
    } else {
      console.log("email good");
    }

    if (!validator.isPassword(form.password)) {
      setErrors({
        ...errors,
        password: "Password is invalid",
      });
    }

    if (!errors.email && !errors.password) {
      const response = await services.postLogin(form.email, form.password);

      // there is an error
      if (response.message) {
        // limpiar el formulario (password)
        setForm({
          ...form,
          password: "",
        });

        // quitar invalids de inputs, y configurar un error de backend
        setErrors({
          email: "",
          password: "",
          general: response.message.join(". "),
        });
      } else {
        // guardar el token en localStorage
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);

        // redirect al home screen
        history.push(`/?name=${response.name}`);
        // "?name" + variable
      }
      // on success
      // accessToken, refreshToken

      // on fail
      // message
    }
    // else {
    //   // no hay errores
    //   setErrors({
    //     email: "",
    //     password: "",
    //   });
    // }
  }

  return (
    <>
      <Container className="mt-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => {
                console.log(e.target.value);
                setForm({ ...form, email: e.target.value });
              }}
              isInvalid={!!errors.email}
            />
            <Form.Text
              style={{
                color: "red",
              }}
            >
              {errors.email}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              isInvalid={!!errors.password}
            />
            <Form.Text
              style={{
                color: "red",
              }}
            >
              {errors.password}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Form.Text
          style={{
            color: "red",
          }}
        >
          {errors.general}
        </Form.Text>
      </Container>
    </>
  );
}

export default Login;
