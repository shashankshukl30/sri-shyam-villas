import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        style={{ backgroundColor: '#6B1D2A', color: 'white', padding: '0.5rem 1rem', borderRadius: '2px', fontWeight: 600 }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" aria-label="Sri Shyam Villas Hotel Website">
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Experiences />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
        <Footer />
        <BookingCTA />
      </main>
    </>
  );
}
