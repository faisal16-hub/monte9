import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
      titleKey: 'whoAreWe.strengths.engineeringLegacy',
      descKey: 'whoAreWe.strengths.engineeringLegacyDesc'
    },
    {
      icon: Award,
      titleKey: 'whoAreWe.strengths.constructionQuality',
      descKey: 'whoAreWe.strengths.constructionQualityDesc'
    },
    {
      icon: Compass,
      titleKey: 'whoAreWe.strengths.smartPlanning',
      descKey: 'whoAreWe.strengths.smartPlanningDesc'
    },
    {
      icon: Leaf,
      titleKey: 'whoAreWe.strengths.sustainability',
      descKey: 'whoAreWe.strengths.sustainabilityDesc'
    }
  ];

  const sustainabilityCards = [
    {
      icon: Leaf,
      titleKey: 'whoAreWe.sustainabilityCommitment.ecoFriendly',
      descKey: 'whoAreWe.sustainabilityCommitment.ecoFriendlyDesc'
    },
    {
      icon: Trees,
      titleKey: 'whoAreWe.sustainabilityCommitment.greenSpaces',
      descKey: 'whoAreWe.sustainabilityCommitment.greenSpacesDesc'
    },
    {
      icon: Wind,
      titleKey: 'whoAreWe.sustainabilityCommitment.sustainablePlanning',
      descKey: 'whoAreWe.sustainabilityCommitment.sustainablePlanningDesc'
    }
  ];

  const whyChooseKeys = [
    'whoAreWe.whyChoose.reason1',
    'whoAreWe.whyChoose.reason2',
    'whoAreWe.whyChoose.reason3',
    'whoAreWe.whyChoose.reason4',
    'whoAreWe.whyChoose.reason5'
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
      <section className="relative min-h-[400px] sm:min-h-[500px] overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]" style={{ color: '#416D50', lineHeight: '1.2' }}>
                {t('whoAreWe.hero.title')}
              </h1>
              <p className="mb-6 sm:mb-8 text-base sm:text-lg" style={{ lineHeight: '1.8', color: '#333' }}>
                {t('whoAreWe.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center bg-[#416D50] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#365840] transition-colors text-base sm:text-[17px]"
                >
                  {t('whoAreWe.hero.exploreProjects')}
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white border-2 border-[#416D50] text-[#416D50] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#416D50] hover:text-white transition-colors text-base sm:text-[17px]"
                >
                  {t('whoAreWe.hero.bookVisit')}
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
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
      <section className="py-8 sm:py-12 bg-[#EFE6BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="mb-4" style={{ color: '#416D50' }}>
              {t('whoAreWe.overview.title')}
            </h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-[15px]" style={{ lineHeight: '1.8', color: '#333' }}>
              {t('whoAreWe.overview.subtitle')}
            </p>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
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
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" color="#416D50" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" color="#416D50" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
            style={{ color: '#416D50' }}
          >
            {t('whoAreWe.strengths.title')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#EFE6BA] rounded-xl p-5 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#B08C44] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <strength.icon size={24} className="sm:w-7 sm:h-7" color="#fff" />
                </div>
                <h4 className="mb-3 text-lg sm:text-xl" style={{ color: '#416D50' }}>
                  {t(strength.titleKey)}
                </h4>
                <p className="text-sm" style={{ lineHeight: '1.6', color: '#666' }}>
                  {t(strength.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments & Design Philosophy */}
      <section className="py-8 sm:py-12 bg-[#EFE6BA] bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1"
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
              className="order-1 lg:order-2"
            >
              <h2 className="mb-4" style={{ color: '#416D50' }}>
                {t('whoAreWe.apartments.title')}
              </h2>
              <p className="mb-6 text-sm sm:text-[15px]" style={{ lineHeight: '1.8', color: '#333' }}>
                {t('whoAreWe.apartments.subtitle')}
              </p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#416D50] text-white px-4 py-2 rounded-full text-xs sm:text-sm">
                  {t('whoAreWe.apartments.multipleSizes')}
                </span>
                <span className="bg-[#B08C44] text-white px-4 py-2 rounded-full text-xs sm:text-sm">
                  {t('whoAreWe.apartments.modernLayouts')}
                </span>
                <span className="bg-[#416D50] text-white px-4 py-2 rounded-full text-xs sm:text-sm">
                  {t('whoAreWe.apartments.functionalSpaces')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy & Comfort Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4" style={{ color: '#416D50' }}>
                {t('whoAreWe.privacy.title')}
              </h2>
              <p className="mb-6 text-sm sm:text-[15px]" style={{ lineHeight: '1.8', color: '#333' }}>
                {t('whoAreWe.privacy.subtitle')}
              </p>
              
              {/* Checklist */}
              <div className="space-y-3">
                {['independentEntrances', 'smartSpacing', 'noiseSeparation'].map((itemKey, index) => (
                  <motion.div
                    key={itemKey}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="sm:w-5 sm:h-5 flex-shrink-0" color="#416D50" />
                    <span className="text-sm sm:text-[15px]" style={{ color: '#333' }}>{t(`whoAreWe.privacy.${itemKey}`)}</span>
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
              className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
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
      <section className="relative py-16 sm:py-20 overflow-hidden">
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
              {t('whoAreWe.greenLiving.title')}
            </h2>
            <p className="text-white/90 text-sm sm:text-[15px]" style={{ lineHeight: '1.8' }}>
              {t('whoAreWe.greenLiving.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sustainabilityCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#EFE6BA] rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#416D50] rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <card.icon size={20} className="sm:w-6 sm:h-6" color="#fff" />
                </div>
                <h4 className="mb-3 text-lg sm:text-xl" style={{ color: '#416D50' }}>
                  {t(card.titleKey)}
                </h4>
                <p className="text-sm" style={{ lineHeight: '1.6', color: '#666' }}>
                  {t(card.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Monte */}
      <section className="py-8 sm:py-12 bg-[#416D50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 text-[#EFE6BA]"
          >
            {t('whoAreWe.whyChoose.title')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseKeys.map((reasonKey, index) => (
              <motion.div
                key={reasonKey}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="sm:w-5 sm:h-5 flex-shrink-0 mt-1" color="#B08C44" />
                <span className="text-sm sm:text-[15px]" style={{ lineHeight: '1.6' }}>{t(reasonKey)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 sm:mb-6" style={{ color: '#416D50' }}>
              {t('whoAreWe.closing.title')}
            </h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-[15px]" style={{ lineHeight: '1.8', color: '#333' }}>
              {t('whoAreWe.closing.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors text-sm sm:text-base"
              >
                {t('whoAreWe.closing.viewProjects')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white border-2 border-[#416D50] text-[#416D50] px-6 py-3 rounded-lg hover:bg-[#416D50] hover:text-white transition-colors text-sm sm:text-base"
              >
                {t('whoAreWe.closing.contactUs')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}