import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
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
      name: formData.name || '',
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    console.log('Sending contact request:', payload);

    try {
      const response = await fetch('https://monte.runasp.net/api/Email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
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
        toast.error(
          'Cannot connect to server. Your message details have been logged - please call us at: 01062622625',
          { duration: 8000 }
        );
        
        console.log('=== CONTACT DATA (for manual submission) ===');
        console.log('Name:', formData.name || 'Not provided');
        console.log('Email:', formData.email);
        console.log('Phone:', formData.phone);
        console.log('Message:', formData.message);
        console.log('==========================================');
      } else {
        toast.error('Unable to send message. Please call us at: 01062622625');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#E9E4D8]">
      {/* Header */}
      <section className="py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1>
            Contact <span style={{ color: '#416D50' }}>US</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '12px' }}>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#416D50] rounded-xl p-8 text-white relative overflow-hidden"
            >
              {/* Decorative Circles */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#375737] opacity-50 rounded-full translate-x-1/4 translate-y-1/4" />
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-[#324132] opacity-25 rounded-full" />

              <div className="relative z-10">
                <h3 style={{ marginBottom: '8px' }}>Our Contact Information</h3>
                <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '32px' }}>
                  Don't hesitate to contact us anytime
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Phone size={20} />
                    <a href="tel:+201062622625" className="hover:opacity-80 transition-opacity" style={{ fontSize: '15px' }}>
                      01062622625
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={20} />
                    <a href="mailto:Info@monte.com" className="hover:opacity-80 transition-opacity" style={{ fontSize: '15px' }}>
                      Info@monte.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-1" />
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity underline"
                      style={{ fontSize: '15px' }}
                    >
                      HQ, Villa 10, Mavida, 5th Settlement, New cairo
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <a
                    href="https://www.facebook.com/share/17qKbtRrcc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#324132] rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/monte.development?igsh=MTFkYndqZGNxdXZs&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#324132] rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/monte-developments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#324132] rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
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
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors"
                    placeholder="Your name (Optional)"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-black'
                    }`}
                    placeholder="Email"
                    style={{ fontSize: '14px' }}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500" style={{ fontSize: '12px' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3 border-r border-gray-300">
                      <div className="flex items-center gap-1">
                        <div className="w-5 h-3 bg-red-600" />
                        <div className="w-5 h-3 bg-white border border-gray-300" />
                        <div className="w-5 h-3 bg-black" />
                      </div>
                      <span style={{ fontSize: '14px' }}>+20</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-32 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-black'
                      }`}
                      placeholder="Your number"
                      style={{ fontSize: '14px' }}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-red-500" style={{ fontSize: '12px' }}>
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-black'
                    }`}
                    placeholder="Question or problem"
                    style={{ fontSize: '14px' }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500" style={{ fontSize: '12px' }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#416D50] text-white py-3 rounded-xl hover:bg-[#365840] transition-colors"
                  style={{ fontSize: '18px' }}
                  disabled={isSubmitting}
                >
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