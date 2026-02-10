import { getAllBusiness } from "@/services/businessService";
// import SectionHeader from "../SectionHeader";
import SectionHeader from "../components/SectionHeader";
import BusinessCard from "./BusinessCard";
import { Business } from "@/types";


export default async function Businesses() {
 
  const businesses:Business[] = await getAllBusiness();
  // console.log(businesses);
  if(!businesses) return <div>Loading...</div>
  return (
    <section id="businesses" className="py-24 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-8">
        <SectionHeader
          badge="OUR PORTFOLIO"
          title="Our"
          highlightedText="Businesses"
          description="Eight industries, one commitment to excellence"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((biz:Business, idx) => (
            <BusinessCard key={idx} biz={biz} />
          ))}
        </div>
      </div>
    </section>
  );
}

