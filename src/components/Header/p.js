import { Container, Row, Col } from "react-bootstrap";
import "./header-styles.scss";

export default function P() {
  return (
    <Container>
      <Row>
        <Col lg={4} sm={8} className="my-p">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
