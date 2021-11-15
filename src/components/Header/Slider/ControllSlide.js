import { useState, createContext } from "react";
import { Container, Col } from "react-bootstrap";
import "../../../Assets/styles/_header-styles.scss";


export default function ControllSlide({onClick, imgIndex}) {

  console.log(imgIndex)
  

  return (
    <Col lg={6} sm={8} className="my-slider">
      <div onClick={onClick} data-value="1" className={imgIndex === 0 ? "my-bullet2": "my-bullet"}></div>;
      <div onClick={onClick} data-value="2" className={imgIndex === 1 ? "my-bullet2": "my-bullet"}></div>;
      <div onClick={onClick} data-value="3" className={imgIndex === 2 ? "my-bullet2": "my-bullet"}></div>;
    </Col>
  );
}
