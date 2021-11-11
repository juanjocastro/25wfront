import { Container } from "react-bootstrap";
import "../../Assets/styles/_footer.scss";
import logo from "../../Assets/images/footer-logo.png"

export default () => {
  return (
    <Container fluid className="footer">
      <Container className="container-footer">
        <p>2020 © All rights reserved.</p>
        <div class="footer__img">
          <img src={logo} alt="Logo 25watts" />
        </div>
      </Container>
    </Container>
  );
};
