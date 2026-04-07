'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'Home', href: '#home' },
    { name: 'Why our network', href: '#' },
    { name: 'Charging solutions', href: '#' },
    { name: 'Technology', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ],
  mission: [
    { name: 'Our Mission', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Press releases', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Youtube', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white rounded-t-3xl mx-4 sm:mx-6 lg:mx-8 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Newsletter */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Offerings From Bright<br />News & Social
            </motion.h3>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative max-w-md"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-700 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                whileHover={{ x: 4 }}
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
              </motion.button>
            </motion.form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8">
            {/* Company */}
            <div>
              {footerLinks.company.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-gray-400 hover:text-white text-sm py-1.5 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mission */}
            <div>
              {footerLinks.mission.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-gray-400 hover:text-white text-sm py-1.5 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div>
              {footerLinks.social.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-gray-400 hover:text-white text-sm py-1.5 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Large Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-32 md:h-48 overflow-hidden"
        >
          <motion.h2
            className="text-[80px] md:text-[150px] lg:text-[200px] font-bold text-gray-900 leading-none tracking-tighter select-none"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            }}
          >
            DENTALO
          </motion.h2>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DENTALO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
