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
      name: 'Ras Rami Al-Arabia, New Cairo',
      price: '12k - 15k',
      units: 28,
      beds: 3,
      baths: 2,
      area: 180,
      image: 'https://images.unsplash.com/photo-1651093791352-2ae1c9e5e428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTU5ODYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Palm Hills, New Cairo',
      price: '10k - 13k',
      units: 34,
      beds: 2,
      baths: 2,
      area: 150,
      image: 'https://images.unsplash.com/photo-1619647787040-5583f41eb9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU2MzU0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Green Valley, 5th Settlement',
      price: '15k - 18k',
      units: 22,
      beds: 4,
      baths: 3,
      area: 220,
      image: 'https://images.unsplash.com/photo-1630404991412-9504d094e8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzY1NjM1NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1708085342347-6d0dd245f90e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NTYzNTQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Eco-friendly property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-white mb-4" style={{ fontSize: '56px', lineHeight: '1.2' }}>
              We're here to help you find your dream home.
            </h1>
            <p className="text-white/90 mb-6" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Every home reflects our commitment to quality, craftsmanship and people-centered real estate solutions.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-[#416D50] text-white px-8 py-4 rounded-lg hover:bg-[#365840] transition-colors"
              style={{ fontSize: '17px' }}
            >
              Explore properties
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
            style={{ color: '#416D50' }}
          >
            Trust is our key to success
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300"
                style={{ background: feature.gradient }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <feature.icon size={28} style={{ color: feature.iconColor }} />
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
      <section className="py-12 bg-[#416D50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-white mb-4">Monte is always green</h2>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }} className="max-w-3xl mx-auto">
              At Monte Developments, we believe in building a future where green living circles
              hand-in-hand with modern comfort and aesthetic appeal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {ecoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-14 h-14 bg-[#B08C44] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <feature.icon size={24} />
                </div>
                <h5 className="mb-2">{feature.title}</h5>
                <p style={{ fontSize: '14px', opacity: 0.9 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <ul className="space-y-1" style={{ fontSize: '15px' }}>
              <li>✓ Sustainable building materials</li>
              <li>✓ Green rooftops and landscaping</li>
              <li>✓ Reduced energy and water usage</li>
              <li>✓ We build for people and the planet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-[#EFE6BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 style={{ color: '#416D50' }}>Our projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h4 className="mb-3" style={{ color: '#416D50' }}>
                        {project.name}
                      </h4>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p style={{ fontSize: '12px', color: '#666' }}>Price/m²</p>
                          <p style={{ fontSize: '16px', color: '#B08C44' }}>{project.price} EGP</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '12px', color: '#666' }}>Units left</p>
                          <p style={{ fontSize: '16px', color: '#416D50' }}>{project.units}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t mb-4">
                        <div className="flex items-center gap-1">
                          <Bed size={18} color="#666" />
                          <span style={{ fontSize: '14px', color: '#666' }}>{project.beds}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={18} color="#666" />
                          <span style={{ fontSize: '14px', color: '#666' }}>{project.baths}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Maximize size={18} color="#666" />
                          <span style={{ fontSize: '14px', color: '#666' }}>{project.area}m²</span>
                        </div>
                      </div>
                      <button className="w-full mt-auto bg-[#416D50] text-white py-2.5 rounded-lg hover:bg-[#365840] transition-colors">
                        See more details
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-block bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4" style={{ color: '#416D50' }}>
              Have a question?
            </h2>
            <p className="mb-6" style={{ fontSize: '15px', color: '#666' }}>
              Try to browse our FAQs page or contact us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-block bg-white border-2 border-[#416D50] text-[#416D50] px-6 py-3 rounded-lg hover:bg-[#416D50] hover:text-white transition-colors"
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