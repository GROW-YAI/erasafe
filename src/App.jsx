import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSlider from "./components/layout/HeroSlider";
import About from "./components/sections/About";
import Features from "./components/sections/Features";

import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/layout/Footer";
import ProductDisplay from "./components/Sections/ProductDisplay";
import Innovator from "./components/Sections/Innovator";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main className="mt-16">
        <HeroSlider />
        <About />
        <ProductDisplay/>
        <Features />
        <Innovator/>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
