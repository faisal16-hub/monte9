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
              <a
                href="https://wa.me/message/35HKMU6ZHDRGC1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                  <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="currentColor"/>
                </svg>
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