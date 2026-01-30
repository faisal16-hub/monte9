import { motion } from 'motion/react';
import { Building, Store, Factory, Award, DollarSign, Clock, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import imgPexelsPixabay from "figma:asset/5ff2627aca2b0c8db4d877dddb6c678a859e4951.png";
import imgPexelsAlesia from "figma:asset/729ae5a9765f83a4a71f35162dc01abdf1ae816a.png";
import imgPexelsTobias from "figma:asset/57cb61af175a28a10ffa3b6954b7ec6b9f88895e.png";
import imgPexelsTyler from "figma:asset/8908630345fbe3028c39ea531928600cd60808f9.png";
import imgUnsplash from "figma:asset/7362f7fcfb7937f98f3bd71904725e0edaa1d452.png";

export function AboutPage() {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Building,
      titleKey: 'aboutPage.services.residential',
      labelKey: 'aboutPage.services.residentialLabel',
      descKey: 'aboutPage.services.residentialDesc',
      image: imgPexelsPixabay,
    },
    {
      icon: Store,
      titleKey: 'aboutPage.services.commercial',
      labelKey: 'aboutPage.services.commercialLabel',
      descKey: 'aboutPage.services.commercialDesc',
      image: imgPexelsAlesia,
    },
    {
      icon: Factory,
      titleKey: 'aboutPage.services.industrial',
      labelKey: 'aboutPage.services.industrialLabel',
      descKey: 'aboutPage.services.industrialDesc',
      image: imgPexelsTobias,
    },
  ];

  const differentiators = [
    {
      icon: Award,
      titleKey: 'aboutPage.different.experienced',
      descKey: 'aboutPage.different.experiencedDesc',
    },
    {
      icon: DollarSign,
      titleKey: 'aboutPage.different.competitivePrice',
      descKey: 'aboutPage.different.competitivePriceDesc',
    },
    {
      icon: Clock,
      titleKey: 'aboutPage.different.onTime',
      descKey: 'aboutPage.different.onTimeDesc',
    },
    {
      icon: Leaf,
      titleKey: 'aboutPage.different.bestMaterials',
      descKey: 'aboutPage.different.bestMaterialsDesc',
    },
  ];

  const testimonials = [
    {
      nameKey: 'aboutPage.testimonials.mohamed',
      roleKey: 'aboutPage.testimonials.mohamedRole',
      textKey: 'aboutPage.testimonials.mohamedText',
      image: 'https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjU2MzU0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      nameKey: 'aboutPage.testimonials.ahmed',
      roleKey: 'aboutPage.testimonials.ahmedRole',
      textKey: 'aboutPage.testimonials.ahmedText',
      image: 'https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjU2MzU0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      nameKey: 'aboutPage.testimonials.sara',
      roleKey: 'aboutPage.testimonials.saraRole',
      textKey: 'aboutPage.testimonials.saraText',
      image: 'https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjU2MzU0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      nameKey: 'aboutPage.testimonials.faisal',
      roleKey: 'aboutPage.testimonials.faisalRole',
      textKey: 'aboutPage.testimonials.faisalText',
      image: 'https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjU2MzU0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const team = [
    { name: 'Eng Ahmed eshra', role: 'CEO & Co-Founder' },
    { name: 'Ar Ibrahim Hossam', role: 'CO & Chairmen' },
    { name: 'Faisal abdurahman', role: 'COO & Developer' },
    { name: 'Faisal abdurahman', role: 'COO & Developer' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#E9E4D8]">
      {/* Services Section */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6" style={{ color: '#416D50' }}>{t('aboutPage.services.title')}</h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">{t('aboutPage.services.titleSub')}</h2>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-full sm:max-w-[800px]" style={{ color: '#666', lineHeight: '1.6' }}>
              {t('aboutPage.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs sm:text-[11px] mb-2" style={{ color: '#B08C44', letterSpacing: '1px' }}>
                      {t(service.labelKey)}
                    </p>
                    <h4 className="text-lg sm:text-xl mb-3" style={{ color: '#416D50' }}>{t(service.titleKey)}</h4>
                    <p className="text-xs sm:text-[13px]" style={{ color: '#666', lineHeight: '1.6' }}>
                      {t(service.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4" style={{ color: '#416D50' }}>{t('aboutPage.different.title')}</h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-5 sm:mb-6">{t('aboutPage.different.titleSub')}</h2>
            <p className="text-sm sm:text-base max-w-full sm:max-w-[800px] mx-auto px-4" style={{ color: '#666' }}>
              {t('aboutPage.different.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#416D50] rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <item.icon size={28} className="sm:w-8 sm:h-8" color="#fff" />
                </div>
                <h5 className="text-base sm:text-lg mb-2 sm:mb-3" style={{ color: '#416D50' }}>{t(item.titleKey)}</h5>
                <p className="text-xs sm:text-[13px]" style={{ color: '#666', lineHeight: '1.6' }}>
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 sm:py-16 lg:py-20 bg-[#E9E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 h-1 w-12 bg-[#416D50]" />
              <h2 className="text-2xl sm:text-3xl mb-2" style={{ color: '#416D50' }}>{t('aboutPage.story.title')}</h2>
              <h2 className="text-2xl sm:text-3xl mb-5 sm:mb-6">{t('aboutPage.story.subtitle')}</h2>
              <p className="text-sm sm:text-base" style={{ color: '#666', lineHeight: '1.8' }}>
                {t('aboutPage.story.content')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={imgPexelsTyler}
                alt="Monte building"
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Sales Team */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src={imgUnsplash}
                alt="Building"
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="bg-[#416D50] text-white rounded-xl p-6 sm:p-10 lg:p-12 relative">
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full" />
                
                <div className="relative z-10">
                  <h3 className="text-white mb-4 text-xl sm:text-2xl">{t('aboutPage.salesTeam.title')}</h3>
                  <p className="text-sm sm:text-base mb-6 opacity-90">
                    {t('aboutPage.salesTeam.subtitle')}
                  </p>
                  
                  <div className="bg-white text-black rounded-xl p-5 sm:p-6 mb-6">
                    <h4 className="text-lg sm:text-xl mb-2" style={{ color: '#416D50' }}>{t('aboutPage.salesTeam.leader')}</h4>
                    <p className="text-sm sm:text-base" style={{ color: '#666' }}>{t('aboutPage.salesTeam.leaderRole')}</p>
                  </div>

                  <button className="bg-[#B08C44] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#9a7838] transition-colors text-sm sm:text-base">
                    {t('aboutPage.salesTeam.bookMeeting')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 lg:py-20 bg-[#E9E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl mb-2" style={{ color: '#416D50' }}>{t('aboutPage.testimonials.title')}</h2>
            <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">{t('aboutPage.testimonials.titleSub')}</h2>
            <p className="text-sm sm:text-base" style={{ color: '#666' }}>
              {t('aboutPage.testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-5 sm:p-6 ${
                    index === currentTestimonial ? 'ring-2 ring-[#416D50]' : ''
                  }`}
                >
                  <div className="mb-4">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#B08C44] text-sm sm:text-base">★</span>
                      ))}
                    </div>
                    <p className="text-xs sm:text-[13px]" style={{ color: '#666', lineHeight: '1.6' }}>
                      {t(testimonial.textKey)}
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <h5 className="text-sm sm:text-base mb-1" style={{ color: '#416D50' }}>
                      {t(testimonial.nameKey)}
                    </h5>
                    <p className="text-xs sm:text-[13px]" style={{ color: '#999' }}>{t(testimonial.roleKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#416D50] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#416D50] hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">
                  <div className="w-full aspect-square bg-gray-200 rounded-xl mb-4" />
                  <h5 className="text-sm sm:text-base mb-1" style={{ color: '#416D50' }}>
                    {member.name}
                  </h5>
                  <p className="text-xs sm:text-[13px]" style={{ color: '#666' }}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}