import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#E9E4D8] flex items-center justify-center">
      <Helmet>
        <title>404 - Page Not Found | Monte Developments</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Monte Developments homepage to explore our eco-friendly real estate projects." />
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[120px] sm:text-[180px] leading-none mb-4"
            style={{ color: '#416D50', fontFamily: 'Refina, serif' }}
          >
            404
          </motion.h1>

          {/* Title */}
          <h2 className="mb-4 text-2xl sm:text-3xl" style={{ color: '#416D50' }}>
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-base sm:text-lg max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. Don't worry, we'll help you find your way back.
          </p>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-[#416D50]/10 rounded-full flex items-center justify-center">
              <Search size={80} className="text-[#416D50] opacity-30" />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#416D50] text-white px-6 py-3 rounded-lg hover:bg-[#365840] transition-colors"
            >
              <Home size={20} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#416D50] text-[#416D50] px-6 py-3 rounded-lg hover:bg-[#416D50] hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-[#B08C44] text-white px-6 py-3 rounded-lg hover:bg-[#8a6d35] transition-colors"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-300"
          >
            <p className="text-sm text-gray-600 mb-4">Or explore these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-[#416D50] hover:text-[#B08C44] transition-colors text-sm">
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/contact" className="text-[#416D50] hover:text-[#B08C44] transition-colors text-sm">
                Contact
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/book-visit" className="text-[#416D50] hover:text-[#B08C44] transition-colors text-sm">
                Book a Visit
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
