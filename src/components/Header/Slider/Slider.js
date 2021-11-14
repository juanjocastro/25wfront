import imagen1 from "../../../Assets/images/slider-1.png";
import imagen2 from "../../../Assets/images/slider-2.png";
import imagen3 from "../../../Assets/images/slider-3.png";
import { Container } from "react-bootstrap";

export default function Slider({ imgIndex }) {
  const miArr = [imagen1, imagen2, imagen3];
console.log(imgIndex)
  return (
    <Container fluid className="my-img-slider"  >
      <img src={miArr[imgIndex]} className="my-image" />
    </Container>
  );
}

