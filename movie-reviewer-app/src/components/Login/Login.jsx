import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { useState } from "react";
import services from "../../utils/services";

import validator from "../../utils/validator";

function Login() {
  // { email, password }

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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

  function handleSubmit(e) {
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
      services.postLogin(form.email, form.password);
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
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
