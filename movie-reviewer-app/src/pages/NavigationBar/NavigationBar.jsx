import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { setSearchInput } from "../../src/features/searchText/searchTextSlice";

function NavigationBar() {
  const searchText = useSelector((state) => state.searchText.value);
  const dispatch = useDispatch();

  const history = useHistory();
  const isLoggedIn = !!localStorage.getItem("accessToken");

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
            {isLoggedIn && (
              <Button variant="warning" onClick={logout}>
                Logout
              </Button>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(e) => {
                console.log(e.target.value);
                if (e.target.value !== searchText) {
                  dispatch(setSearchInput(e.target.value));
                }
                console.log(searchText);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
