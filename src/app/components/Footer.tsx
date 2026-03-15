import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import templeLogo from '../../assets/logo/Logo_1.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#222222] to-[#3a3a3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Temple Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={templeLogo} 
                alt="Sri Ramalayam Temple Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                  Sri Ramalayam
                </div>
                <div className="text-sm text-gray-400">Yenugupalli</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A sacred spiritual center dedicated to Lord Rama and a place of devotion for generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                  About Temple
                </Link>
              </li>
              <li>
                <Link to="/deities" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                  Deities
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                  Events & Festivals
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FF7A00] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Sri Ramalayam Temple<br />
                  Yenugupalli Village<br />
                  Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#FF7A00] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 9XXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#FF7A00] flex-shrink-0" />
                <span className="text-gray-400 text-sm">ramalayamkyp@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Temple Timings & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Temple Timings</h3>
            <div className="text-gray-400 text-sm mb-6 space-y-2">
              <p>Morning: 6:00 AM - 12:00 PM</p>
              <p>Evening: 4:00 PM - 8:00 PM</p>
            </div>
            
            <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF7A00] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF7A00] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF7A00] rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sri Ramalayam Temple, Yenugupalli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
