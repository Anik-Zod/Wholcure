import SectionHeader from './SectionHeader';

export default function Businesses() {
  const businesses = [
    {
      icon: 'fa-building',
      title: 'WholCure Real Estate',
      desc: 'Premium property development, strategic buying and selling solutions, and comprehensive real estate investment services for residential and commercial projects.',
      features: ['Property Development', 'Investment Solutions', 'Asset Management']
    },
    {
      icon: 'fa-hard-hat',
      title: 'WholCure Constructions',
      desc: 'World-class construction services for residential, commercial, and infrastructure projects, delivering quality, safety, and timely completion.',
      features: ['Residential Projects', 'Commercial Buildings', 'Infrastructure']
    },
    {
      icon: 'fa-laptop-code',
      title: 'WholCure Technology',
      desc: 'Cutting-edge software development, innovative web solutions, AI-powered tools, and comprehensive IT services for digital transformation.',
      features: ['Software Development', 'AI Solutions', 'IT Services']
    },
    {
      icon: 'fa-bullhorn',
      title: 'WholCure Marketing',
      desc: 'Strategic digital marketing, powerful branding, creative media solutions, and growth strategies that amplify your business presence.',
      features: ['Digital Marketing', 'Brand Strategy', 'Growth Consulting']
    },
    {
      icon: 'fa-solar-panel',
      title: 'WholCure Solar Electronics',
      desc: 'Advanced solar energy systems, renewable energy solutions, and sustainable power alternatives for residential and commercial applications.',
      features: ['Solar Systems', 'Renewable Energy', 'Green Solutions']
    },
    {
      icon: 'fa-microchip',
      title: 'WholCure Electronics',
      desc: 'Innovative electronic products, advanced systems, and cutting-edge technological innovations for various industrial and consumer applications.',
      features: ['Electronic Products', 'System Design', 'Innovation R&D']
    },
    {
      icon: 'fa-box',
      title: 'WholCure Packaging',
      desc: 'Comprehensive industrial and commercial packaging solutions, custom designs, and sustainable packaging innovations for diverse products.',
      features: ['Industrial Packaging', 'Custom Solutions', 'Eco-Friendly Options']
    },
    {
      icon: 'fa-gavel',
      title: 'WholCure Legal Services',
      desc: 'Professional corporate legal services, business compliance, regulatory advisory, and comprehensive legal solutions for modern enterprises.',
      features: ['Corporate Law', 'Compliance', 'Legal Advisory']
    }
  ];

  return (
    <section id="businesses" className="py-24 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-8">
        <SectionHeader
          badge="OUR PORTFOLIO"
          title="Our"
          highlightedText="Businesses"
          description="Eight industries, one commitment to excellence"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((biz, idx) => (
            <div
              key={idx}
              data-tilt
              className="
    business-card group p-10 cursor-pointer bg-white rounded-2xl 
    shadow-custom-md relative

    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    transform-gpu transform-style-3d

    hover:-translate-y-3 
    hover:scale-[1.03]
    hover:rotateX-[6deg]
    hover:rotateY-[6deg]
    hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]
  "
            >

              <div className="w-[70px] h-[70px] flex items-center justify-center bg-gradient-primary rounded-xl text-white text-3xl mb-6 transition-transform duration-600 group-hover:rotate-y-180 group-hover:scale-110">
                <i className={`fas ${biz.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">{biz.title}</h3>
              <p className="mb-6 leading-relaxed text-text-secondary">{biz.desc}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {biz.features.map((feat, i) => (
                  <span key={i} className="text-sm px-4 py-2 bg-bg-gray rounded-full text-text-secondary flex items-center gap-2">
                    <i className="fas fa-check text-secondary"></i> {feat}
                  </span>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold transition-all duration-300 group-hover:gap-4 group-hover:text-primary-dark">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
