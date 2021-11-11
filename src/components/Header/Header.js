import { Container } from "react-bootstrap";
import imagen from "../../Assets/images/slider-1.png";
import Navbar_ from "./navbar";
import H1_ from "./h1";
import P from "./p";
import Button from "../common/Button";
import Slider from "./slider";


export default () => {
  return (
    <header id="header" className="header">      
        <img src={imagen} className="my-img-slider"/>
        <Container id="home" className="header-container">
          <Navbar_ />
          <H1_ />
          <P />
          <Button />
          <Slider />
        </Container>
      
    </header>
  );
};
