import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Offer from "./components/sections/Offer";
import Gallery from "./components/sections/Gallery";
import Reviews from "./components/sections/Reviews";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="bg-cream text-dark">
      <Navbar />

      <main>
        <Hero />
        <Offer />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
