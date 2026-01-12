import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import imgLogoCream from "figma:asset/62efe959e3cdb193a79d8af37fc305465661d80f.png";

export function Footer() {
  return (
    <footer className="bg-[#416D50] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 text-center sm:text-left">
            <img src={imgLogoCream} alt="Monte Developments" className="h-12 sm:h-14 w-auto mb-4 mx-auto sm:mx-0" />
            <p style={{ fontSize: '14px', lineHeight: '1.6' }} className="text-white/80 sm:text-base">
              Building eco-friendly homes for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                Home
              </Link>
              <Link to="/projects" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                Projects
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                About Us
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                Contact
              </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h5 className="mb-4">Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/fYRsjJqb9r2Bavan6?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  50, North Teseen Street, 1, Tagammoa 5 - El Banafseg Buildings
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+201062622625" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  01062622625
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@monte.com" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  info@monte.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h5 className="mb-4">Follow Us</h5>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/share/17qKbtRrcc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/monte.development?igsh=MTFkYndqZGNxdXZs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/monte-developments/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-[13px] text-white/60">
            © 2025 Monte Developments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}