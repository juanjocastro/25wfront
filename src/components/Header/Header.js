import { Container } from "react-bootstrap";
import Navbar_ from "./navbar";
import H1_ from "./h1";
import P from "./p";
import Button from "../common/Button";
import Slider from "./Slider/Slider";
import ControllSlide from "./Slider/ControllSlide";
import { useState } from "react";

export default () => {

  const [imgIndex, setImgIndex] = useState(0);

  const changeDot = (event) => {
    const val = event.target.attributes[0].nodeValue
    setImgIndex(val-1);
  };


  return (
    <header id="header" className="header">
      
      <Slider imgIndex={imgIndex} />

      <Container id="home" className="header-container">
        <Navbar_ />
        <H1_ />
        <P />
        <Button />
        <ControllSlide onClick={changeDot}/>
      </Container>
    </header>
  );
};
