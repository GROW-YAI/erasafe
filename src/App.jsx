import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSlider from "./components/layout/HeroSlider";
import About from "./components/sections/About";
import ProductDisplay from "./components/sections/ProductDisplay";
import Features from "./components/sections/Features";
import Innovator from "./components/sections/Innovator";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main className="mt-16">
        <HeroSlider />
        <About />
        <ProductDisplay />
        <Features />
        <Innovator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
