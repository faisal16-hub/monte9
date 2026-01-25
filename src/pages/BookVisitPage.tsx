import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Video, Phone, Mail, CheckCircle, Building2, Users, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function BookVisitPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    meetingType: 'office-visit',
    date: '',
    time: '',
    projectInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name) {
      toast.error('Name is required');
      return;
    }

    if (!formData.phone) {
      toast.error('Phone number is required');
      return;
    }

    if (!formData.date) {
      toast.error('Please select a date');
      return;
    }

    if (!formData.time) {
      toast.error('Please select a time');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      sendTo: 'monterealestate.eg@gmail.com',
      name: formData.name,
      email: formData.email || '',
      phone: formData.phone,
      meetingType: formData.meetingType,
      date: formData.date,
      time: formData.time,
      projectName: formData.projectInterest || 'General Inquiry',
      message: formData.message || '',
    };

    console.log('Sending booking request:', payload);

    try {
      const response = await fetch('https://monte.runasp.net/api/Email/meeting-book', {
        method: 'POST',
        mode: 'cors',
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
        toast.success('Meeting request sent! We\'ll contact you soon.');
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          meetingType: 'office-visit',
          date: '',
          time: '',
          projectInterest: '',
          message: '',
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData);
        toast.error(errorData.message || `Server error: ${response.status}. Please try again.`);
      }
    } catch (error) {
      console.error('Error booking meeting:', error);

      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        toast.error(
          'Cannot connect to server. Your request details have been logged - please contact us at: +201040503547',
          { duration: 8000 }
        );

        console.log('=== BOOKING DATA (for manual submission) ===');
        console.log('Name:', formData.name);
        console.log('Email:', formData.email || 'Not provided');
        console.log('Phone:', formData.phone);
        console.log('Meeting Type:', formData.meetingType);
        console.log('Date:', formData.date);
        console.log('Time:', formData.time);
        console.log('Project Interest:', formData.projectInterest || 'Not specified');
        console.log('Message:', formData.message || 'None');
        console.log('==========================================');
      } else {
        toast.error('Unable to send request. Please call us at: +201040503547');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const projects = ['J83', 'Other Projects', 'General Inquiry'];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-[#E9E4D8] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={48} className="text-green-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#416D50', fontSize: '32px', marginBottom: '16px' }}
          >
            Booking Confirmed!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ color: '#666', fontSize: '18px', marginBottom: '32px' }}
          >
            Thank you for booking with Monte Developments. We'll send you a confirmation shortly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-[#416D50] text-white rounded-lg hover:bg-[#365840] transition-colors"
            >
              Book Another Visit
            </button>
            <a
              href="/"
              className="px-6 py-3 border-2 border-[#416D50] text-[#416D50] rounded-lg hover:bg-[#416D50] hover:text-white transition-colors"
            >
              Go to Homepage
            </a>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#E9E4D8]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#416D50] to-[#2d4d38] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
              Book Your Visit
            </h1>
            <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
              Schedule a meeting with our team to explore your dream property
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 size={32} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Office Visit</h3>
              <p style={{ fontSize: '14px', opacity: 0.9 }}>
                Visit our office and meet with our expert team in person
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video size={32} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Online Meeting</h3>
              <p style={{ fontSize: '14px', opacity: 0.9 }}>
                Connect with us virtually from the comfort of your home
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Expert Guidance</h3>
              <p style={{ fontSize: '14px', opacity: 0.9 }}>
                Get personalized advice from our experienced consultants
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Meeting Type Selection */}
            <div className="grid grid-cols-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, meetingType: 'office-visit' })}
                className={`py-6 px-4 text-center transition-all ${
                  formData.meetingType === 'office-visit'
                    ? 'bg-[#416D50] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <MapPin size={24} className="mx-auto mb-2" />
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Office Visit</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, meetingType: 'online-meeting' })}
                className={`py-6 px-4 text-center transition-all ${
                  formData.meetingType === 'online-meeting'
                    ? 'bg-[#416D50] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Video size={24} className="mx-auto mb-2" />
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Online Meeting</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 123 456 7890"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-all"
                    />
                  </div>
                </div>

                {/* Project Interest */}
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>
                    Project Interest
                  </label>
                  <select
                    value={formData.projectInterest}
                    onChange={(e) => setFormData({ ...formData, projectInterest: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-all bg-white"
                  >
                    <option value="">Select a project</option>
                    {projects.map((project) => (
                      <option key={project} value={project}>
                        {project}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-all"
                      style={{ colorScheme: 'light' }}
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-all bg-white appearance-none"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>
                  Additional Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#416D50] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 bg-[#416D50] text-white py-4 rounded-lg hover:bg-[#365840] transition-colors text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 size={24} className="animate-spin" />}
                {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p style={{ color: '#666', fontSize: '16px', marginBottom: '12px' }}>
              Need immediate assistance?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:01040503547"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <Phone size={20} className="text-[#416D50]" />
                <span style={{ color: '#416D50', fontWeight: '600' }}>+20 104 050 3547</span>
              </a>
              <a
                href="https://wa.me/message/35HKMU6ZHDRGC1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="white"/>
                </svg>
                <span style={{ fontWeight: '600' }}>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}