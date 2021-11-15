import { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "../../Assets/styles/_contact-styles.scss";
import MensajeForm from "./MensajeForm";
import FormContact from "./Form-Contact";

export default () => {
  const [statusSend, setStatusSend] = useState(0);
  const [activeMsj, setActiveMsj] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleChangeName = (event) => {
    const name = event.target.value;
    
    /* Validacion del campo name */
    const regexName = RegExp(/^[a-zA-Z ]+$/);
    const resName = regexName.test(name);  
    console.log(name.length)  
    
    resName && name.length > 0 && name.length < 12  ? setNameValid(true) : setNameValid(false);   
    
    setFormData({ ...formData, name });   
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    
    /* Validacion del campo email */
    const regexEmail = RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
    const resEmail = regexEmail.test(email);    
    
    resEmail ? setEmailValid(true) : setEmailValid(false);   
    
    setFormData({ ...formData, email });   
  };

  const handleChangePhone = (event) => {
    const phone = event.target.value;
    
    /* Validacion del campo phone */
    const regexPhone = RegExp(/^[0-9]+$/);
    const resPhone = regexPhone.test(phone);   
    console.log(resPhone) 
    
    resPhone ? setPhoneValid(true) : setPhoneValid(false);   
    
    setFormData({ ...formData, phone });   
  };

  const handleChangeMessage = (event) => {
    const message = event.target.value;
    
    /* Validacion del campo message */
    const regexMessage = RegExp(/^[a-zA-Z0-9 ]+$/);
    const resMessage = regexMessage.test(message);    
    
    resMessage ? setMessageValid(true) : setMessageValid(false);   
    
    setFormData({ ...formData, message });   
  };


  const prueba = () => {    

             
    console.log(nameValid)
    
   
  };

  
  const formToggle = () => {
    setActiveMsj(false);
  };

  const handleSubmit = () => {
    if(nameValid && emailValid && phoneValid && messageValid){

      setActiveMsj(true);      

    const sendData = async () => {
      try {
        const response = await axios.post(
          /* "https://jsonplaceholder.typicode.com/posts", */
         /*  "http://127.0.0.1:8000/api/saveUsuarios", */
          "https://proyecto-25w.herokuapp.com/api/saveUsuarios", 
          
          formData
        );
        setStatusSend(response.status);
      } catch (err) {
        setStatusSend(err.message.split(" ")[5]);
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

    }else{

    }
  };

  

  return (
    <div id="contact" className="contact">
      <Container className="my-container-contact">
        {!activeMsj ? (
          <FormContact
            onChangeName={handleChangeName}
            onChangeEmail={handleChangeEmail}
            onChangePhone={handleChangePhone}
            onChangeMessage={handleChangeMessage}
            onClick={handleSubmit}
            nameValid={nameValid}
            emailValid={emailValid}
            phoneValid={phoneValid}
            messageValid={messageValid}
            valor="Send"
          />
        ) :  (
          <MensajeForm onClick={formToggle} status={statusSend} />
        )}
        <div class="contact-img"></div>
      </Container>
    </div>
  );
};
