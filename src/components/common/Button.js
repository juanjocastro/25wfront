import { Container, Col } from "react-bootstrap";
import "../../Assets/styles/_button.scss";

export default function Button({onClick}) {
  return (
    <Container>
      <Col xl={2} lg={2} sm={8} className="p-0">
        <button type="submit" onClick={onClick} className="my-button">Button</button>
      </Col>
    </Container>
  );
}
