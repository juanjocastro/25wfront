import { Navbar, Container, Nav } from "react-bootstrap";
import "./header-styles.scss";
import logo from "../../Assets/images/top-logo.png";

export default function Navbar_() {
  return (
    <Container fluid className=" p-0 header-navbar">      
        <Navbar collapseOnSelect expand="md" className="p-0 my-navbar">
          <Container className="p-0">
            <Navbar.Brand href="#home">
              <img src={logo} id="top-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto d-inline-flex flex-wrap">
                <Nav.Link className="my-link" href="#">Home</Nav.Link>
                <Nav.Link className="my-link"  href="#">About</Nav.Link>
                <Nav.Link className="my-link" href="#">Products</Nav.Link>
                <Nav.Link className="my-link" href="#">Services</Nav.Link>
                <Nav.Link className="my-link" href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    
  );
};

