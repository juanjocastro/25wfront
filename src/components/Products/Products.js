import { Col, Container, Row } from "react-bootstrap";
import "./products-styles.scss";
import rightArrow from "../../Assets/images/arrow-right-circle.png";
import leftArrow from "../../Assets/images/arrow-left-circle.png";

export default () => {
  return (
    <div className="products">
      <Container className="my-container-products">
        <Col xl={10} lg={10} sm={10} className="my-img-products">
          <Col xl={6} lg={6} sm={8} className="my-slider-products">
            <div  className="products-content">
              <h3 className="products-subtitle">Sed ut perspiciatis</h3>
              <h2 className="products-h2">Nemo Enim</h2>
              <p className="products-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <div className="products-arrows">
                <a href="#">
                  <img src={leftArrow} alt="flecha izquierda" />
                </a>
                <a href="#">
                  <img src={rightArrow} alt="flecha derecha" />
                </a>
              </div>
            </div>
          </Col>
        </Col>
      </Container>
    </div>
  );
};

<section class="main__section-products" id="products">
  <div class="section-products__container">
    <div class="section-products__img"></div>
    <div class="section-products__content">
      <h3>Sed ut perspiciatis</h3>
      <h2>Nemo Enim</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </p>
      <div>
        <a href="#">
          <img
            src="./assets/images/Icon feather-arrow-left-circle.png"
            alt="flecha izquierda"
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/Icon feather-arrow-right-circle.png"
            alt="flecha derecha"
          />
        </a>
      </div>
    </div>
  </div>
</section>;
