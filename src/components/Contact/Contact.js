import { Container, Form, FloatingLabel } from "react-bootstrap";
import "../../Assets/styles/_contact-styles.scss";

import Button from "../common/Button";

export default () => {
  return (
    <div className="contact">
      <Container className="my-container-contact">
        <div className="my-container__h2-form">
          <h2 class="contact-h2">
            Get in touch<span> We are hiring!</span>
          </h2>
          <div className="my-form">
            <FloatingLabel
              controlId="floating-inp"
              label="Name"
              className="tt mb-4"
            >
              <Form.Control type="text" placeholder="###" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Email"
              className="mb-4"
            >
              <Form.Control type="email" placeholder="###" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Phone"
              className="mb-4"
            >
              <Form.Control type="phone" placeholder="###" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Message"
              className="mb-4"
            >
              <Form.Control
                as="textarea"
                placeholder="###"
                style={{ height: "10rem", paddingTop:"2rem" }}
              />
            </FloatingLabel>

            <Container className="container-button">
              <Button />
            </Container>
          </div>
        </div>
        <div class="contact-img"></div>
      </Container>
    </div>
  );
};

<section class="main__section-contact" id="contact">
  <div class="section-contact__container">
    <div class="section-contact__form">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Name</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Phone</label>
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Message</label>
      </div>
      <a href="#" id="boton2">
        Send
      </a>
    </div>

    <div class="section-contact__img"></div>

    <h2 class="section-contact__h2">
      Get in touch<span> We are hiring!</span>
    </h2>
  </div>
</section>;
