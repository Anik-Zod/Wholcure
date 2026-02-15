import Hero from './components/Hero';
import About from './components/About';
// import Businesses from './components/businesses/Businesses';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Businesses from './businesses/Businesses';
import { getUiData } from '@/services/uiService';
import MeetMyTeem from './components/MeetMyTeem';


export default async function Home() {
  const data = await getUiData()
  return (
    <main>
      {/* <GSAP/> */}
      <Hero data={data} />
      <About data={data} />
       <Businesses/>
      <WhyChoose data={data} />
      {/* <MeetMyTeem/> */}
      <Contact />
    </main>
  );
}
