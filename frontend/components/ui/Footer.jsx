"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-[60px] pb-[40px]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-[100px]">
        {/* Top Section with Logo and CTA */}
        <div className="mb-12 pb-12 border-b border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1">
              <div className="mb-4">
                <span className="text-3xl font-bold">
                  <span className="text-white">HIRE</span>
                  <span className="text-[#F5A623]">HUB</span>
                </span>
                <span className="text-white text-sm ml-1">.RENTALS</span>
              </div>
              <p className="text-[#999999] text-[15px] leading-relaxed max-w-[500px]">
                Your trusted equipment hire broker in Sydney. Connecting you with the best hire companies across Australia.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="#contact">
                <button className="bg-white text-black hover:bg-gray-100 transition-colors py-[14px] px-8 rounded-lg text-[15px] font-semibold">
                  Get started today
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="mb-6 uppercase text-xs font-semibold tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>How it works</span>
                </a>
              </li>
              <li>
                <Link 
                  href="/categories" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <a 
                  href="#welcome-portal" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>HireHub Portal</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 uppercase text-xs font-semibold tracking-wider text-white">
              Popular Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/categories/traffic-light" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Traffic & light</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/categories/construction-hire" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Construction hire</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/categories/access-hire" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Access hire</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/categories/events-hire" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Events hire</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 uppercase text-xs font-semibold tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Partner with us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Terms & conditions</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#999999] text-sm hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  <span>Privacy policy</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 uppercase text-xs font-semibold tracking-wider text-white">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3 text-[#999999] hover:text-white transition-colors cursor-pointer group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                <div>
                  <div className="text-xs text-[#666666] mb-1">Call us</div>
                  <span className="text-sm group-hover:text-white">1300 HIRE HUB</span>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 text-[#999999] hover:text-white transition-colors cursor-pointer group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                <div>
                  <div className="text-xs text-[#666666] mb-1">Email us</div>
                  <span className="text-sm group-hover:text-white">info@hirehub.com.au</span>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3 text-[#999999] hover:text-white transition-colors cursor-pointer group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                <div>
                  <div className="text-xs text-[#666666] mb-1">Location</div>
                  <span className="text-sm group-hover:text-white">Sydney, NSW</span>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#666666] text-[13px]">
              &copy; {new Date().getFullYear()} HireHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-[13px]">
              <a href="#" className="text-[#666666] hover:text-white transition-colors">Privacy policy</a>
              <span className="text-[#333333]">|</span>
              <a href="#" className="text-[#666666] hover:text-white transition-colors">Terms of service</a>
              <span className="text-[#333333]">|</span>
              <a href="#" className="text-[#666666] hover:text-white transition-colors">Cookie policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

