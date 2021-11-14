import { useState, createContext } from "react";
import { Container, Col } from "react-bootstrap";
import "../../../Assets/styles/_header-styles.scss";


export default function ControllSlide({onClick}) {
  

  return (
    <Col lg={6} sm={8} className="my-slider">
      <div onClick={onClick} data-value="1" className="my-bullet"></div>;
      <div onClick={onClick} data-value="2" className="my-bullet"></div>;
      <div onClick={onClick} data-value="3" className="my-bullet"></div>;
    </Col>
  );
}
