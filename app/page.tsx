import Hero from './components/Hero';
import About from './components/About';
// import Businesses from './components/businesses/Businesses';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Businesses from './businesses/Businesses';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    <Businesses/>
      <WhyChoose />
      <Contact />
    </main>
  );
}
