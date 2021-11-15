import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../Assets/images/top-logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default () =>{

  /* Navbar cambia style cuando window.scrollY supera los 90px */

  const [navbarScrollBg, setNavbarScrollBg] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 90) {
      setNavbarScrollBg(true);
    } else {
      setNavbarScrollBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <Container fluid className="fixed-top">
      <Navbar
        collapseOnSelect
        expand="md"
        className={`my-navbar ${navbarScrollBg && "my-bg"}`}
      >
        <Container>
          <Navbar.Brand >
            <Link to="home">
              <img src={logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-inline-flex flex-wrap">
              <Link to="home" smooth="easeOutCirc" duration={500}>
                <Nav.Link className="my-link">Home</Nav.Link>
              </Link>
              <Link to="about" smooth="easeInBack" duration={500}>
                <Nav.Link className="my-link">About</Nav.Link>
              </Link>
              <Link to="products" smooth="easeOutCirc" duration={500}>
                <Nav.Link className="my-link" >
                  Products
                </Nav.Link>
              </Link>
              <Link to="services" smooth="easeOutCirc" duration={500}>
                <Nav.Link className="my-link" >
                  Services
                </Nav.Link>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Nav.Link className="my-link" >
                  Contact
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
