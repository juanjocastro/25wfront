import { useState } from "react";
import axios from "axios";
import { Container, Form, FloatingLabel } from "react-bootstrap";
import "../../Assets/styles/_contact-styles.scss";
import Button from "../common/Button";
import MensajeForm from "./MensajeForm";
import FormContact from "./Form-Contact";

export default () => {
  const [statusSend, setStatusSend] = useState(0)
  const [activeMsj, setActiveMsj] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const clave = event.target.name;
    const valor = event.target.value;

    setFormData({ ...formData, [clave]: valor });
  };

  const formToggle = () => {
    setActiveMsj(false);
  };

  const handleSubmit = () => {
    setActiveMsj(true)
    const sendData = async () => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          /* "http://127.0.0.1:8000/api/saveUsuarios" */

          formData
        );
        setStatusSend(response.status);

      } catch (err) { 
        setStatusSend(err.message.split(' ')[5]);
      }
      console.log(formData);
    };
    sendData();
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  console.log(formData);

  console.log(statusSend);


  return (
    <div id="contact" className="contact">
      <Container className="my-container-contact">
        {!activeMsj ? 
          <FormContact onClick={handleSubmit} onChange={handleChange} />
         : 
          <MensajeForm onClick={formToggle} status={statusSend} />
        }
        <div class="contact-img"></div>
      </Container>
    </div>
  );
};
