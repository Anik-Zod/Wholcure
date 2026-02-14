import { Ui } from "@/types";
import SectionHeader from "./SectionHeader";

export default function About({ data }: { data: Ui }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-light">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="WHO WE ARE"
          title="About"
          highlightedText="WholCure"
          description="Leading the way in multi-industry excellence and innovation"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 ">
          {/* About Card 1 */}
          <div className=" bg-white rounded-2xl p-8 shadow-custom-md transition-all duration-300 relative transform-style-3d hover:-translate-y-2 hover:shadow-custom-3d text-center group">
            <div className="w-[80px] h-[80px] mx-auto mb-6 flex items-center justify-center bg-gradient-primary rounded-2xl text-white text-3xl shadow-custom-md">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-text-secondary">
              To be a globally recognized industrial group that transforms
              industries through innovation, quality, and sustainable growth,
              creating value for stakeholders and communities worldwide.
            </p>
          </div>

          {/* About Card 2 */}
          <div className="card-3d bg-white rounded-2xl p-8 shadow-custom-md transition-all duration-300 relative transform-style-3d hover:-translate-y-2 hover:shadow-custom-3d text-center group">
            <div className="w-[80px] h-[80px] mx-auto mb-6 flex items-center justify-center bg-gradient-primary rounded-2xl text-white text-3xl shadow-custom-md">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-text-secondary">
              Deliver exceptional products and services across diverse
              industries, foster innovation, empower our teams, and build
              long-lasting partnerships based on trust, integrity, and
              excellence.
            </p>
          </div>

          {/* About Card 3 */}
          <div className="card-3d bg-white rounded-2xl p-8 shadow-custom-md transition-all duration-300 relative transform-style-3d hover:-translate-y-2 hover:shadow-custom-3d text-center group">
            <div className="w-[80px] h-[80px] mx-auto mb-6 flex items-center justify-center bg-gradient-primary rounded-2xl text-white text-3xl shadow-custom-md">
              <i className="fas fa-gem"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-text-secondary">
              Excellence in execution, integrity in action, innovation in
              thinking, collaboration in working, and sustainability in growth.
              These values guide everything we do.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white py-12 px-6 md:px-12 rounded-3xl shadow-custom-md">
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Driving Industrial Growth & Innovation
            </h3>
            <p className="text-text-secondary mb-4">
              WholCure is more than just a business conglomerate – we are a
              catalyst for industrial transformation. Operating across {data.industries} {" "}
              dynamic sectors, we bring together expertise, innovation, and
              dedication to deliver solutions that matter.
            </p>
            <p className="text-text-secondary mb-4">
              Our commitment to quality, trust, and long-term partnerships has
              positioned us as a reliable partner for businesses seeking growth,
              innovation, and excellence. From real estate development to
              cutting-edge technology solutions, from renewable energy to
              professional legal services, WholCure is your partner in success.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                `Multi-industry expertise spanning ${data.industries} sectors`,
                "Commitment to quality and excellence",
                "Innovation-driven solutions",
                "Long-term strategic partnerships",
                "Sustainable and responsible growth",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-base text-text-primary"
                >
                  <i className="fas fa-check-circle text-secondary text-xl"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
