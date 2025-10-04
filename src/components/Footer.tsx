import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from '../assets/cospace_logo.png'

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="Cospace Coworks Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">
                Cospace Coworks
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium coworking spaces designed for productivity, collaboration,
              and growth. Join our community of professionals and entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cospace_coworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Single Seat</li>
              <li className="text-muted-foreground text-sm">Double Seat</li>
              <li className="text-muted-foreground text-sm">Triple Seat</li>
              <li className="text-muted-foreground text-sm">Quadruple Seat</li>
              <li className="text-muted-foreground text-sm">Virtual Office</li>
              <li className="text-muted-foreground text-sm">Conference Room</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Cospace Coworks,
                  <br />
                  PTK SQUARE, Panikkarpadi,
                  <br />
                  Edarikode, Kottakkal,
                  <br />
                  Kerala 676501
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  info@cospacecoworks.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={16} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  24/7 Access
                  <br />
                  Support: 9 AM - 6 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Cospace Coworks. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;