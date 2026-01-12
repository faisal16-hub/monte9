import { Link } from 'react-router-dom';
import { Shield, Layers, Scale, Leaf, Droplet, Lightbulb, Bed, Bath, Maximize } from 'lucide-react';
import { motion } from 'motion/react';

export function HomePage() {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Delivering quality homes on time, every time.',
      gradient: 'linear-gradient(127.284deg, rgb(239, 230, 186) 0%, rgb(176, 140, 68) 186%)',
      iconBg: '#fff',
      iconColor: '#416D50',
      textColor: '#fff',
    },
    {
      icon: Layers,
      title: 'Transparency',
      description: 'Clear communication and honest practices throughout.',
      gradient: 'linear-gradient(127.284deg, rgb(65, 109, 80) 0%, rgb(176, 140, 68) 186%)',
      iconBg: '#B08C44',
      iconColor: '#fff',
      textColor: '#fff',
    },
    {
      icon: Scale,
      title: 'Fairness',
      description: 'Competitive pricing with no hidden costs.',
      gradient: '#fff',
      iconBg: '#416D50',
      iconColor: '#fff',
      textColor: '#416D50',
    },
  ];

  const ecoFeatures = [
    { icon: Leaf, title: 'Green Rooftops', description: 'Living roofs that reduce heat and improve air quality' },
    { icon: Lightbulb, title: 'Energy Efficiency', description: 'Solar panels and LED lighting throughout' },
    { icon: Droplet, title: 'Water Conservation', description: 'Rainwater harvesting and efficient plumbing systems' },
  ];

  const projects = [
    {
      id: 1,
      name: 'J83, bayet al watan, New cairo',
      price: '22k - 24.5k',
      units: 6,
      beds: 3,
      baths: 2,
      area: '176-230',
      image: 'https://www.dropbox.com/scl/fi/w3r6wo5qalsardwe7s8rl/WhatsApp-Image-2026-01-12-at-12.50.24-AM.jpeg?rlkey=01g3z8l0wnoyk7mcvsvno2wnr&st=dxohq7pq&raw=1',
      featured: true,
    },
    {
      id: 2,
      name: 'K108, bayet al watan, New cairo',
      price: '25k - 27.5k',
      units: 12,
      beds: 2,
      baths: 2,
      area: '146-231',
      image: 'https://www.dropbox.com/scl/fi/3gvyuzyai9zeg61wtkue6/Logo-Gold.png?rlkey=nsu2yinbsy62ee0md23gr9oby&st=yh7gqjgw&raw=1',
      isNew: true,
    },
    {
      id: 3,
      name: 'G85, bayet al watan, New cairo',
      price: '20k - 22k',
      units: 2,
      beds: 4,
      baths: 3,
      area: '177-242',
      image: 'https://www.dropbox.com/scl/fi/gwx0euxy3qbjpdo63g50w/WhatsApp-Image-2026-01-12-at-4.57.27-PM.jpeg?rlkey=yg573w36fr4ubv23slx8k546y&st=bf1v5uvi&raw=1',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1708085342347-6d0dd245f90e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NTYzNTQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Eco-friendly property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full"
          >
            <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]" style={{ lineHeight: '1.2' }}>
              We're here to help you find your dream home.
            </h1>
            <p className="text-white/90 mb-6 text-base sm:text-lg" style={{ lineHeight: '1.6' }}>
              Every home reflects our commitment to quality, craftsmanship and people-centered real estate solutions.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-[#416D50] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#365840] transition-colors text-base sm:text-[17px]"
            >
              Explore properties
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 lg:mb-10 text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: '#416D50' }}
          >
            Trust is our key to success
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-xl p-5 sm:p-6 text-center group hover:scale-105 transition-transform duration-300"
                style={{ background: feature.gradient }}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <feature.icon size={24} className="sm:w-7 sm:h-7" style={{ color: feature.iconColor }} />
                </div>
                <h5 className="mb-3" style={{ color: feature.textColor }}>
                  {feature.title}
                </h5>
                <p style={{ fontSize: '14px', color: feature.textColor, opacity: 0.9 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#416D50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">Monte is always green</h2>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }} className="max-w-3xl mx-auto px-4">
              At Monte Developments, we believe in building a future where green living circles
              hand-in-hand with modern comfort and aesthetic appeal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {ecoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#B08C44] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <feature.icon size={22} className="sm:w-6 sm:h-6" />
                </div>
                <h5 className="mb-2">{feature.title}</h5>
                <p style={{ fontSize: '14px', opacity: 0.9 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-all"
              >
                <div className="w-10 h-10 bg-[#B08C44] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-left">Sustainable building materials</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-all"
              >
                <div className="w-10 h-10 bg-[#B08C44] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-left">Green rooftops and landscaping</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-all"
              >
                <div className="w-10 h-10 bg-[#B08C44] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-left">Reduced energy and water usage</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-all"
              >
                <div className="w-10 h-10 bg-[#B08C44] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-left">We build for people and the planet</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#EFE6BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#416D50' }}>Our projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link to={`/project/${project.id}`} className="group block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      {project.isNew && (
                        <div className="absolute top-4 right-4 z-10 bg-[#416D50] text-white px-3 py-1 rounded-full text-xs sm:text-[13px]">
                          New
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h4 className="mb-3 text-lg sm:text-xl" style={{ color: '#416D50' }}>
                        {project.name}
                      </h4>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p style={{ fontSize: '12px', color: '#666' }}>Price/m²</p>
                          <p className="text-sm sm:text-base" style={{ color: '#B08C44' }}>{project.price} EGP</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '12px', color: '#666' }}>Units left</p>
                          <p className="text-sm sm:text-base" style={{ color: '#416D50' }}>{project.units}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t mb-4">
                        <div className="flex items-center gap-1">
                          <Bed size={16} className="sm:w-[18px] sm:h-[18px]" color="#666" />
                          <span style={{ fontSize: '13px', color: '#666' }}>{project.beds}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={16} className="sm:w-[18px] sm:h-[18px]" color="#666" />
                          <span style={{ fontSize: '13px', color: '#666' }}>{project.baths}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Maximize size={16} className="sm:w-[18px] sm:h-[18px]" color="#666" />
                          <span style={{ fontSize: '13px', color: '#666' }}>{project.area}m²</span>
                        </div>
                      </div>
                      <button className="w-full mt-auto bg-[#416D50] text-white py-2.5 rounded-lg hover:bg-[#365840] transition-colors text-sm sm:text-base">
                        See more details
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/projects"
              className="inline-block bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors text-sm sm:text-base"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4" style={{ color: '#416D50' }}>
              Have a question?
            </h2>
            <p className="mb-6 text-sm sm:text-[15px]" style={{ color: '#666' }}>
              Try to browse our FAQs page or contact us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-block bg-white border-2 border-[#416D50] text-[#416D50] px-6 py-3 rounded-lg hover:bg-[#416D50] hover:text-white transition-colors text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}