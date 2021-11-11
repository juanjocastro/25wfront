import './Assets/styles/App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import slider1 from "../src/Assets/images/slider-1.png";
import Products from './components/Products/Products';
import Services from './components/Servicess/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return ( 
   <>
     <Header  />
     <About />
     <Products />
     <Services />
     <Contact />    
     <Footer />
     
   </>

  );
}

export default App;
