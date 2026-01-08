import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Shield, 
  Award, 
  Compass, 
  Leaf, 
  Building2, 
  Home,
  Trees,
  Droplet,
  Wind,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function WhoAreWePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Neighborhood view'
    },
    {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Building exterior'
    },
    {
      url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Green spaces'
    }
  ];

  const coreStrengths = [
    {
      icon: Building2,
      title: 'Engineering Legacy',
      description: '40+ years of engineering experience built on precision and trust.'
    },
    {
      icon: Award,
      title: 'Construction Quality',
      description: 'High-quality building materials that ensure long-term value growth.'
    },
    {
      icon: Compass,
      title: 'Smart Planning',
      description: 'Thoughtful layouts that maximize comfort and efficiency.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-friendly materials and green planning standards.'
    }
  ];

  const sustainabilityCards = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Materials',
      description: 'We use sustainable building materials that reduce environmental impact and enhance living quality.'
    },
    {
      icon: Trees,
      title: 'Green Open Spaces',
      description: 'Expansive gardens and parks integrated into every project for healthier living.'
    },
    {
      icon: Wind,
      title: 'Sustainable Planning',
      description: 'Energy-efficient designs and smart resource management for a better tomorrow.'
    }
  ];

  const whyChoose = [
    '40+ years of engineering experience',
    'Prime projects in Beit El Watan – Fifth Settlement',
    'Various apartment sizes and designs',
    'High construction and quality standards',
    'Safe real estate investment in New Cairo'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6" style={{ color: '#416D50', fontSize: '56px', lineHeight: '1.2' }}>
                Who Are We?
              </h1>
              <p className="mb-8" style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
                Monte Real Estate Development is a leading real estate developer in New Cairo, with over 40 years of engineering experience in delivering high-quality residential projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center bg-[#416D50] text-white px-8 py-4 rounded-lg hover:bg-[#365840] transition-colors"
                  style={{ fontSize: '17px' }}
                >
                  Explore Our Projects
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white border-2 border-[#416D50] text-[#416D50] px-8 py-4 rounded-lg hover:bg-[#416D50] hover:text-white transition-colors"
                  style={{ fontSize: '17px' }}
                >
                  Book a Visit
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Monte Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#416D50] opacity-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 bg-[#EFE6BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="mb-4" style={{ color: '#416D50' }}>
              Distinctive Apartments in Beit El Watan – Fifth Settlement
            </h2>
            <p className="max-w-3xl mx-auto" style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
              We offer distinctive apartments in Beit El Watan – Fifth Settlement, one of the most promising real estate investment areas in New Cairo.
            </p>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ImageWithFallback
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft size={24} color="#416D50" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight size={24} color="#416D50" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
            style={{ color: '#416D50' }}
          >
            Engineering Excellence with International Standards
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#EFE6BA] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#B08C44] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <strength.icon size={28} color="#fff" />
                </div>
                <h4 className="mb-3" style={{ color: '#416D50' }}>
                  {strength.title}
                </h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments & Design Philosophy */}
      <section className="py-12 bg-[#EFE6BA] bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Modern apartment design"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4" style={{ color: '#416D50' }}>
                Apartments with Various Sizes and Modern Designs
              </h2>
              <p className="mb-6" style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
                We offer apartments of various sizes to suit all needs, designed with modern architecture that combines luxury with functionality.
              </p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#416D50] text-white px-4 py-2 rounded-full text-sm">
                  Multiple Sizes
                </span>
                <span className="bg-[#B08C44] text-white px-4 py-2 rounded-full text-sm">
                  Modern Layouts
                </span>
                <span className="bg-[#416D50] text-white px-4 py-2 rounded-full text-sm">
                  Functional Spaces
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy & Comfort Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4" style={{ color: '#416D50' }}>
                Complete Privacy and Comfort
              </h2>
              <p className="mb-6" style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
                Smart planning ensures complete independence for each residential unit, offering tranquility and comfort inside your home.
              </p>
              
              {/* Checklist */}
              <div className="space-y-3">
                {['Independent entrances', 'Smart spacing', 'Noise separation'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} color="#416D50" />
                    <span style={{ fontSize: '15px', color: '#333' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Floor plan and interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Green Living Experience */}
      <section className="relative py-20 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Green living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-white mb-4">
              Green Views & Sophisticated Living
            </h2>
            <p className="text-white/90" style={{ fontSize: '15px', lineHeight: '1.8' }}>
              Expansive green views and open spaces give every unit a sense of peace, luxury, and well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#EFE6BA] rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#416D50] rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <card.icon size={24} color="#fff" />
                </div>
                <h4 className="mb-3" style={{ color: '#416D50' }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Monte */}
      <section className="py-12 bg-[#416D50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 text-[#EFE6BA]"
          >
            Why Choose Monte for Real Estate Development?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={20} color="#B08C44" className="flex-shrink-0 mt-1" />
                <span style={{ fontSize: '15px', lineHeight: '1.6' }}>{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6" style={{ color: '#416D50' }}>
              We combine the precision of a consultant, the creativity of a developer, and the needs of the customer.
            </h3>
            <p className="mb-8" style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
              Delivering comprehensive residential projects in strategic locations that guarantee a bright future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors"
              >
                View Our Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white border-2 border-[#416D50] text-[#416D50] px-6 py-3 rounded-lg hover:bg-[#416D50] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
