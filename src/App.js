import Naviagtion from "./components/navigation/Navigation";
import Header from "./components/navigation/header/header";
import Findout from "./components/navigation/findout section/findout";
import SafetySection from "./components/navigation/safetySection/safety" 
import Services from "./components/navigation/services/services";
import "./App.css";
import Delivery from "./components/navigation/watchDelivery/delivery";
import Contact from "./components/navigation/contact us/contact";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div>
      <Naviagtion />
      <div className="mainContainer">
        <Header />
        <Findout />
        <SafetySection/>
        <Services/>
        <Delivery/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
