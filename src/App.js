import "./App.css";
import Footer from "./Components/Footer";
import Information from "./Components/Information";
import Navbar from "./Components/Navbar";
import Package from "./Components/Package";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Package />
      <Information />

      <Footer />
    </>
  );
}

export default App;
