import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Learn',
      links: [
        { name: 'Data Structures', href: '/tutorials' },
        { name: 'Algorithms', href: '/tutorials' },
        { name: 'Programming Languages', href: '/tutorials' },
        { name: 'System Design', href: '/tutorials' },
        { name: 'Interview Prep', href: '/tutorials' }
      ]
    },
    {
      title: 'Practice',
      links: [
        { name: 'Coding Problems', href: '/practice' },
        { name: 'Contests', href: '/practice' },
        { name: 'Company Problems', href: '/practice' },
        { name: 'DSA Sheets', href: '/practice' },
        { name: 'Mock Interviews', href: '/practice' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Forums', href: '/forums' },
        { name: 'Discord', href: '#' },
        { name: 'Events', href: '/events' },
        { name: 'Workshops', href: '/workshops' },
        { name: 'Campus Program', href: '/campus' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'text-blue-600 hover:text-blue-700' },
    { icon: Twitter, href: '#', color: 'text-blue-400 hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'text-pink-600 hover:text-pink-700' },
    { icon: Linkedin, href: '#', color: 'text-blue-700 hover:text-blue-800' },
    { icon: Youtube, href: '#', color: 'text-red-600 hover:text-red-700' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <Code size={24} />
              </div>
              <span className="text-xl font-bold text-green-400">GeeksforGeeks</span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering millions of developers worldwide with comprehensive programming tutorials, 
              practice problems, and interview preparation resources.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91-9999999999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@geeksforgeeks.org</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest programming tutorials, coding challenges, and tech news delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us on:</span>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`${social.color} transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-6">
                <Link to="/privacy" className="hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-green-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
              <div className="text-center md:text-right">
                © 2024 GeeksforGeeks. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
            GeeksforGeeks is a leading platform that provides computer science resources and coding challenges for programmers and technology enthusiasts, 
            along with interview and exam preparations for upcoming aspirants. With millions of users worldwide, we continue to be the go-to resource for 
            learning and practicing programming concepts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;