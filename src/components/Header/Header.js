import { Container } from "react-bootstrap";
import "./header-styles.scss";
import Navbar_ from "./navbar";
import H1_ from "./h1"
import P from "./p"
import Button from "./button";
import Slider from "./slider";

export default () => {
  return (
    <header className="header">
      <Container className="header-container">
        <Navbar_ />
        <H1_ />
        <P />
        <Button />
        <Slider />
      </Container>
    </header>
  );
};



