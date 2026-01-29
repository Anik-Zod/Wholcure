import Hero from './components/Hero';
import About from './components/About';
import Businesses from './components/Businesses';
import LMS from './components/LMS';
import Careers from './components/Careers';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Businesses />
      <LMS />
      <WhyChoose />
      <Contact />
      <Careers />
    </main>
  );
}
