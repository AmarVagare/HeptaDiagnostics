import "./App.css";
import Footer from "./Components/Footer";
import Information from "./Components/Information";
import Navbar from "./Components/Navbar";
import Package from "./Components/Package";
import QA from "./Components/QA";
import Slider from "./Components/Slider";



function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Package />
      <Information />
      <QA />
      <Footer />
    </>
  );
}

export default App;
