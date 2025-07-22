
// import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import "./I18/I18";
import Navbar from "./componants/Navbar/Navbar";
import Hero from "./componants/Hero/Hero";
import Highlights from "./componants/Highlights/Highlights";
import Model from "./componants/Model/Model";
import Features from "./componants/Features/Features";
import HowItWork from "./componants/HowItWorks/HowItWork";
import Footer from "./componants/Footer/Footer";




function App() {

  const { t } = useTranslation();


  return (
    <main className="bg-black ">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWork />
      <Footer />
    </main>
  );
}

export default App;
