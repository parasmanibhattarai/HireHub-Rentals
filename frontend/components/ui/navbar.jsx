'use client';

import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/equipments', label: 'Equipments' },
    { href: '/portal', label: 'HireHub Portal' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-[100px] py-6">
        <Link href="/" className="flex items-center">
       <Image src="/images/hirehubLogo.png" alt="Logo" width={100} height={100} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-gray-500 hover:text-black transition-colors"
            >
              {link.label}
          </Link>
          ))}
          <Link href="/login">
            <button 
              className="bg-white text-black hover:bg-gray-50 transition-colors border border-gray-300 px-6 py-2.5 rounded-lg font-medium"
            >
              Login
            </button>
          </Link>
          <motion.button 
            className="text-gray-500 hover:text-black transition-colors"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5" />
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button 
            className="text-gray-500 hover:text-black transition-colors"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5" />
          </motion.button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className="block py-3 text-gray-700 hover:text-black transition-colors border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button 
                    className="w-full bg-black text-white hover:bg-gray-800 transition-colors px-6 py-3 rounded-lg font-medium"
                  >
                    Login
                  </button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Search Bar Dropdown */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/50 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSearchOpen(false)}
            />
            
            {/* Search Box */}
            <motion.div 
              className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-3xl z-[70] px-4 md:px-8"
              initial={{ y: -100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -100, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="bg-white shadow-2xl p-4 md:p-6 rounded-lg">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <Search className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-base md:text-xl outline-none placeholder:text-gray-400"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-gray-400 hover:text-gray-600 text-sm px-2 md:px-4 py-2"
                  >
                    ESC
                  </button>
                </div>
                
                {/* Search Suggestions */}
                {searchQuery && (
                  <motion.div 
                    className="border-t border-gray-200 pt-4 space-y-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-gray-500 mb-3">Popular searches</p>
                    <Link 
                      href="/categories" 
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg"
                      onClick={() => setSearchOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">Traffic Management Equipment</span>
                      </div>
                    </Link>
                    <Link 
                      href="/categories" 
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg"
                      onClick={() => setSearchOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">Construction Hire</span>
                      </div>
                    </Link>
                    <Link 
                      href="/portal" 
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg"
                      onClick={() => setSearchOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">HireHub Portal</span>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
