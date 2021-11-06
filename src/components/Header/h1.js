import { Container, Row, Col } from "react-bootstrap";
import "./header-styles.scss";


export default function H1_() {
  return (
    <Container >
      <Row>
        <Col lg={6} sm={8} className="my-h1">Sed ut perspiciatis unde omnis iste natus</Col>
      </Row>
    </Container>
  );
}
