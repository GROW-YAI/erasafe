import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSlider from "./components/layout/HeroSlider";
import About from "./components/pages/About";
import Features from "./components/pages/Features";

import ContactForm from "./components/pages/ContactForm";
import Footer from "./components/layout/Footer";
import ProductDisplay from "./components/pages/ProductDisplay";
import Innovator from "./components/pages/Innovator";

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
