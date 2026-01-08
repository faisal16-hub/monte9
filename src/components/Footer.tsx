import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import imgLogoCream from "figma:asset/62efe959e3cdb193a79d8af37fc305465661d80f.png";

export function Footer() {
  return (
    <footer className="bg-[#416D50] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img src={imgLogoCream} alt="Monte Developments" className="h-14 w-auto mb-4" />
            <p style={{ fontSize: '16px', lineHeight: '1.6' }} className="text-white/80">
              Building eco-friendly homes for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors" style={{ fontSize: '16px' }}>
                Home
              </Link>
              <Link to="/projects" className="block text-white/80 hover:text-white transition-colors" style={{ fontSize: '16px' }}>
                Projects
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors" style={{ fontSize: '16px' }}>
                About Us
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors" style={{ fontSize: '16px' }}>
                Contact
              </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="mb-4">Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span style={{ fontSize: '16px' }} className="text-white/80">
                  HQ, Villa 10, Mavida, 5th Settlement, New Cairo
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+201062622625" style={{ fontSize: '16px' }} className="text-white/80 hover:text-white transition-colors">
                  01062622625
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@monte.com" style={{ fontSize: '16px' }} className="text-white/80 hover:text-white transition-colors">
                  info@monte.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="mb-4">Follow Us</h5>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/17qKbtRrcc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/monte.development?igsh=MTFkYndqZGNxdXZs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/monte-developments/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B08C44] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p style={{ fontSize: '13px' }} className="text-white/60">
            © 2025 Monte Developments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}