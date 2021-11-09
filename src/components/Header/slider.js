import { Container, Row, Col } from "react-bootstrap";
import "./header-styles.scss";
import bullet from "../../Assets/images/arrow-left-circle.png" 


export default function Slider () {
  return (
    <Container>
      <Row>
        <Col lg={1} sm={8} className="my-slider">
          <div className="my-bullet"></div>
          <div className="my-bullet"></div>
          <div className="my-bullet"></div>

        </Col>
      </Row>
    </Container>
  );
}
