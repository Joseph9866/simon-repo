import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Dribbble, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">JANE DOE</h3>
            <p className="text-orange-100 mb-4 max-w-md">
              Creating impactful visual experiences through thoughtful design and creative problem-solving.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-800 rounded-lg hover:bg-orange-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-800 rounded-lg hover:bg-orange-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-800 rounded-lg hover:bg-orange-700 transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble size={20} />
              </a>
              <a
                href="mailto:hello@janedoe.com"
                className="p-2 bg-orange-800 rounded-lg hover:bg-orange-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-orange-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-orange-100 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-orange-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-orange-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-orange-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-orange-100 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-orange-100 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-800 pt-8 text-center text-orange-100 text-sm">
          <p>&copy; {currentYear} Jane Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
