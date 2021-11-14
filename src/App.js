import "./Assets/styles/App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Services from "./components/Servicess/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
//import Prueba from "./components/Prueba/Prueba";

function App() {
  return (
    <>
      <Header />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
      {/* <Prueba /> */}

     
    </>
  );
}

export default App;
