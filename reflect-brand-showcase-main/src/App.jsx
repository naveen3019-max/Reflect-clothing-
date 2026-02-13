import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import NewArrivals from './components/NewArrivals';
import CollectionLookbook from './components/CollectionLookbook';
import About from './components/About';
import BrandStory from './components/BrandStory';
import StoreExperience from './components/StoreExperience';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Basic smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <CollectionLookbook />
        <NewArrivals />
        <About />
        <BrandStory />
        <StoreExperience />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
