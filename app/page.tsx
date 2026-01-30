import Hero from './components/Hero';
import About from './components/About';
import Businesses from './components/Businesses';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Businesses />
      <WhyChoose />
      <Contact />
    </main>
  );
}
