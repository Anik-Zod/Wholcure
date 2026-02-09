import Hero from './components/Hero';
import About from './components/About';
import Businesses from './components/businesses/Businesses';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import { getUiData } from '@/services/uiService';

export default async function Home() {
  const data = await getUiData()

  return (
    <main>
      <Hero data={data}/>
      <About />
      <Businesses />
      <WhyChoose />
      <Contact />
    </main>
  );
}
