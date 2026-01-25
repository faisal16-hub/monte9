import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
   const API_URL = "https://monte.runasp.net/api";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please fill in all required fields correctly.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      sendTo: 'montedevelopments@gmail.com',
      userName: formData.name || '',
      userEmail: formData.email,
      phone: formData.phone,
       question: formData.message,
    };

    console.log('Sending contact request:', payload);

    try {
         const response = await fetch(`${API_URL}/Email/contact`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const responseData = await response.json().catch(() => null);
        console.log('Response data:', responseData);
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData);
        toast.error(errorData.message || `Server error: ${response.status}. Please try again.`);
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
       toast.error('Network error. Please check your connection or contact us directly at: 01062622625');

      } else {
        toast.error('Unable to send message. Please call us at: 01062622625');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#E9E4D8]">
      {/* Header */}
      <section className="py-6 sm:py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl">
            Contact <span style={{ color: '#416D50' }}>US</span>
          </h1>
          <p className="text-sm sm:text-[14px] mt-3" style={{ color: '#666' }}>
            Get in touch with us for your real estate needs
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#416D50] rounded-xl p-6 sm:p-8 text-white relative overflow-hidden"
            >
              {/* Decorative Circles */}
              <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#375737] opacity-50 rounded-full translate-x-1/4 translate-y-1/4" />
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 bg-[#324132] opacity-25 rounded-full" />

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl mb-2">Our Contact Information</h3>
                <p className="text-sm sm:text-[14px] opacity-90 mb-6 sm:mb-8">
                  Don't hesitate to contact us anytime
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <a href="tel:+201062622625" className="hover:opacity-80 transition-opacity text-sm sm:text-[15px]">
                      01062622625
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <a href="mailto:Info@monte.com" className="hover:opacity-80 transition-opacity text-sm sm:text-[15px]">
                      Info@monte.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/fYRsjJqb9r2Bavan6?g_st=ipc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity underline text-sm sm:text-[15px]"
                    >
                      50, North Teseen Street, 1, Tagammoa 5 - El Banafseg Buildings
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 sm:mt-8">
                  <a
                    href="https://www.facebook.com/share/17qKbtRrcc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#324132] rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/monte.development?igsh=MTFkYndqZGNxdXZs&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#324132] rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/monte-developments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#324132] rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors text-sm sm:text-base ${
                      errors.name ? 'border-red-500' : 'border-black'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-xs sm:text-[12px]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors text-sm sm:text-base"
                    placeholder="Email (Optional)"
                  />
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-2 sm:pr-3 border-r border-gray-300">
                      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="w-5 h-3 sm:w-6 sm:h-4" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                        <path fill="#141414" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
                        <path fill="#EEE" d="M0 13h36v10H0z"></path>
                        <path fill="#CE1225" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path>
                        <path fill="#BF9300" d="M14.75 21.562s.016.25.234.375c0 0-.062.188.172.297c.234.109 1.078.281 2.547.281s2.297-.156 2.516-.266c.219-.109.234-.359.234-.359s.234-.125.219-.281c-.016-.156-.328-.328-.328-.328s-.078-.203-.297-.281c-.219-.078-.922.344-2.266.281c-1.344-.062-2.109-.266-2.359-.25c-.25.016-.359.266-.359.266s-.282.125-.313.265z"></path>
                        <path fill="#EEE" d="M14.922 21.547c-.013.093.188.297.188.297s0 .234.203.297s1.031.219 2.375.203c1.344-.016 2.297-.094 2.406-.188c.109-.094.203-.297.203-.297s.219-.156.203-.281s-.328-.203-.328-.203s-.088-.188-.192-.266s-.776.312-2.214.312c-1.407 0-2.219-.344-2.359-.328c-.141.016-.234.281-.234.281s-.235.064-.251.173z"></path>
                        <path fill="#BF9300" d="M20.859 15.484s-.031-.734-.703-.641c-.672.094-.719.422-1.438.5l-.148.014a3.192 3.192 0 0 1-.196-1.014c0-.469.141-.672-.344-.906c-.484-.234-.578-.016-.578-.016s-.375-.188-.547-.047c-.172.141-.078.5 0 .391c.078-.109.391.203.391.203c.106.519-.195 1.081-.401 1.394c-.071-.007-.128-.01-.208-.019c-.719-.078-.766-.406-1.438-.5c-.672-.094-.703.641-.703.641l-.266 5.672l.547-.422l.003-.067l1.138-1.011l.19-.19l-.471 1.377s-.719-.047-.516.531c0 0 .109-.328.297-.266s.734.203.734.203l.188.297l.234-.219l.734-.031s.234.062.219.266a.446.446 0 0 0 .037-.283l.221-.015a.445.445 0 0 0 .034.299c-.016-.203.219-.266.219-.266l.734.031l.235.219l.188-.297s.546-.141.733-.203s.297.266.297.266c.203-.578-.516-.531-.516-.531l-.449-1.313l.126.126l1.138 1.011l.003.067l.547.422l-.265-5.673zm-3.107 3.438c-1.127-.696-1.22-2.453-1.22-2.453s.697-.036 1.203-.391c.456.405 1.234.359 1.234.359s-.053 1.764-1.217 2.485zm2.576-3.656l-.953.906l-.16.064c-.164.006-.962.008-1.465-.439c-.625.438-1.484.469-1.484.469l-.133-.053l-1.055-.947l-.277.114c.012-.113.074-.367.418-.317c.564.081.797.391 1.391.453l.168.017l-.059.076c.092 0 .228-.027.328-.049l.113.011l-.051.178c.08-.024.196-.093.291-.154l.26.025l.059.082l.198-.099l.133-.013c.115.067.279.127.279.127l.031-.156c.141.094.375.094.375.094c-.027-.022-.054-.078-.082-.126l.144-.015c.594-.062.826-.372 1.391-.453c.344-.049.406.204.418.317l-.278-.112z"></path>
                        <path fill="#EEE" d="M17.375 18.891l-.563 2.14l-.937-.187l.969-2.75zm.699 0l.562 2.14l.938-.187l-.969-2.75z"></path>
                        <path fill="#BF9300" d="M16.766 16.641s.078.906.484 1.609v-1.812s-.266.156-.484.203zm1.953.031s-.078.906-.484 1.609v-1.812c-.001 0 .265.156.484.203z"></path>
                        <path fill="#EEE" d="M16.953 13.578s.109-.109.422.109c.203.142.383.25.383.25s.128-.135.316-.104c.188.031.083.292.114.838c.031.547.25.781.25.781l-.266-.156l.016.172l-.297-.141l-.141.203l-.141-.219l-.228.139l-.069-.186l-.266.141s.391-.484.422-1.016c.009-.159-.031-.516-.031-.516s-.249-.311-.484-.295z"></path>
                        <path fill="#BF9300" d="M15.547 21.656c-.179.107-.109.172 0 .219s.765.126 2.094.156c1.359.031 2.203-.125 2.312-.188c.109-.062.125-.172-.062-.203c-.188-.031-1.125.125-2.266.125c-1.406.001-2-.156-2.078-.109z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm">+2</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-20 sm:pl-24 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors text-sm sm:text-base text-left ${
                        errors.phone ? 'border-red-500' : 'border-black'
                      }`}
                      placeholder="Your number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-xs sm:text-[12px]">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors resize-none text-sm sm:text-base ${
                      errors.message ? 'border-red-500' : 'border-black'
                    }`}
                    placeholder="Question or problem"
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-xs sm:text-[12px]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#416D50] text-white py-3 rounded-xl hover:bg-[#365840] transition-colors text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Loader2 className="animate-spin" size={20} />}
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}