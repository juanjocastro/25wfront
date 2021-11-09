import { Container, Row, Col } from "react-bootstrap";
import "./header-styles.scss";

export default function Button() {
  return (
    <Container>
      <Row>
        <Col xl={2} lg={2} sm={8}  className="p-0">
          <button className="my-button">Read More</button>
        </Col>
      </Row>
    </Container>
  );
}
