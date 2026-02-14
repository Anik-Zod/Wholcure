import { Ui } from "@/types";
import SectionHeader from "./SectionHeader";
import { Membar } from "./Membar";

export default function WhyChoose({ data }: { data: Ui }) {
  const reasons = [
    {
      num: "01",
      icon: "fa-industry",
      title: "Multi-Industry Expertise",
      desc: `With operations across ${data.industries} diverse sectors, we bring comprehensive knowledge and cross-industry insights to deliver innovative solutions tailored to your needs.`,
    },
    {
      num: "02",
      icon: "fa-users-cog",
      title: "Professional Team",
      desc: "Our team comprises industry veterans, certified professionals, and innovative thinkers dedicated to excellence and continuous improvement in everything we do.",
    },
    {
      num: "03",
      icon: "fa-rocket",
      title: "Innovation-Driven Approach",
      desc: "We embrace cutting-edge technologies, modern methodologies, and creative thinking to deliver solutions that give you a competitive advantage in the market.",
    },
    {
      num: "04",
      icon: "fa-award",
      title: "Quality & Reliability",
      desc: "Our unwavering commitment to quality standards, rigorous testing, and reliable delivery ensures that every project meets the highest benchmarks of excellence.",
    },
    {
      num: "05",
      icon: "fa-expand-arrows-alt",
      title: "Scalability",
      desc: "Whether you're a startup or an enterprise, our solutions are designed to grow with your business, adapting to changing needs and expanding capabilities.",
    },
    {
      num: "06",
      icon: "fa-handshake",
      title: "Trust & Partnership",
      desc: "We build lasting relationships based on transparency, integrity, and mutual success, treating every client as a valued long-term partner in growth.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-24 bg-bg-light relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          badge="OUR STRENGTHS"
          title="Why Choose"
          highlightedText="WholCure"
          description="Excellence across every industry, commitment in every project"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="card-3d p-10 rounded-2xl shadow-custom-md relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-3d group"
            >
              <div className="absolute top-4 right-6 text-6xl font-black text-primary opacity-10 leading-none">
                {reason.num}
              </div>
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-gradient-primary rounded-2xl text-white text-3xl mb-6 shadow-custom-sm">
                <i className={`fas ${reason.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
      </div>
    </section>
  );
}
