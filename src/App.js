import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header" 
import Hero from "./components/Hero"
import Products from "./components/Products";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import Virtual from "./components/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
