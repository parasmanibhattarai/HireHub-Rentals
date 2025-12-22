"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Receipt, 
  MousePointerClick, 
  ClipboardList, 
  Calendar, 
  Phone, 
  Mail, 
  Package, 
  ShieldCheck, 
  Users, 
  Award, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState('present');
  const [currentSection, setCurrentSection] = useState(0);

  // Section refs
  const heroRef = useRef(null);
  const catalogueRef = useRef(null);
  const bookingRef = useRef(null);
  const timelineRef = useRef(null);
  const aiRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const brokerRef = useRef(null);

  const sectionRefs = [heroRef, catalogueRef, bookingRef, timelineRef, aiRef, featuresRef, howItWorksRef, brokerRef];

  // Track current section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigate to section
  const scrollToSection = (index) => {
    if (sectionRefs[index]?.current) {
      sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollUp = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  const handleScrollDown = () => {
    if (currentSection < sectionRefs.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  // Auto-cycle through tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        if (current === 'past') return 'present';
        if (current === 'present') return 'future';
        return 'past';
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Section Navigation Arrows */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <motion.button
          onClick={handleScrollUp}
          className={`bg-black/80 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 ${
            currentSection === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
          }`}
          disabled={currentSection === 0}
          whileHover={{ scale: currentSection === 0 ? 1 : 1.1 }}
          whileTap={{ scale: currentSection === 0 ? 1 : 0.9 }}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          onClick={handleScrollDown}
          className={`bg-black/80 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 ${
            currentSection === sectionRefs.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
          }`}
          disabled={currentSection === sectionRefs.length - 1}
          whileHover={{ scale: currentSection === sectionRefs.length - 1 ? 1 : 1.1 }}
          whileTap={{ scale: currentSection === sectionRefs.length - 1 ? 1 : 0.9 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Hero Banner Section - Full Width */}
      <section ref={heroRef} className="bg-black py-32 px-12 overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <motion.h1 
            className="mb-6 tracking-wide"
            style={{ 
              fontSize: '6.5rem', 
              fontWeight: '900',
              background: 'linear-gradient(135deg, #FACC15 0%, #FFF 50%, #FACC15 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(250, 204, 21, 0.5)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            HIREHUB PORTAL
          </motion.h1>
          
          <motion.p 
            className="text-gray-200 mb-3 tracking-wide"
            style={{ fontWeight: '300', letterSpacing: '0.05em', fontSize: '1.25rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Future of Equipment Hire &amp; Management
          </motion.p>
          
          <motion.p 
            className="text-yellow-400 mb-8 tracking-wider"
            style={{ fontWeight: '500', fontSize: '0.95rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Streamline your workflow • Save time • Maximize efficiency
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button 
                className="px-9 py-5 rounded-xl border-0 relative overflow-hidden group font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FACC15 0%, #FCD34D 100%)',
                  boxShadow: '0 10px 40px rgba(250, 204, 21, 0.4), 0 0 60px rgba(250, 204, 21, 0.2)',
                  fontSize: '0.95rem',
                  color: '#000',
                  letterSpacing: '0.02em'
                }}
                whileHover={{ scale: 1.08, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Start Free Trial
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FCD34D 0%, #FACC15 100%)',
                  }}
                />
              </motion.button>
            </Link>
            
            <motion.button 
              className="px-9 py-5 rounded-xl relative overflow-hidden group border-2 font-bold"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: '#FACC15',
                color: '#fff',
                boxShadow: '0 10px 40px rgba(250, 204, 21, 0.2)',
                fontSize: '0.95rem',
                letterSpacing: '0.02em'
              }}
              whileHover={{ scale: 1.08, y: -3 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                ▶️ Watch Demo
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'rgba(250, 204, 21, 0.1)',
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Instant Catalogue Section */}
      <section ref={catalogueRef} className="bg-white py-12 px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-yellow-500 tracking-widest text-sm mb-3">INSTANT CATALOGUE</p>
            <h2 className="text-5xl mb-4 tracking-tight">
              Quick &amp; easy access to <span className="text-yellow-500">800+ products</span>
            </h2>
            <p className="text-gray-600 text-lg">Browse live availability with likelihood and lead times from trusted suppliers.</p>
          </motion.div>

          {/* Main Content Area with Feature Boxes and Phone */}
          <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* Left Side - 4 Feature Boxes in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Blazing Search */}
              <motion.div
                className="text-center cursor-pointer p-16 rounded-xl bg-white border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.3 },
                  y: { duration: 0.6, delay: 0.3 },
                  scale: { duration: 2, repeat: Infinity, repeatDelay: 1 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                }}
              >
                <h3 className="text-yellow-500 mb-4 text-2xl">Blazing Search</h3>
                <p className="text-gray-600 text-base">Type 2-3 words, find the exact gear instantly.</p>
              </motion.div>

              {/* Live Windows */}
              <motion.div
                className="text-center cursor-pointer p-16 rounded-xl bg-white border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.4 },
                  y: { duration: 0.6, delay: 0.4 },
                  scale: { duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                }}
              >
                <h3 className="text-yellow-500 mb-4 text-2xl">Live Windows</h3>
                <p className="text-gray-600 text-base">Shows availability likelihood and lead time.</p>
              </motion.div>

              {/* Broker Rates */}
              <motion.div
                className="text-center cursor-pointer p-16 rounded-xl bg-white border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.5 },
                  y: { duration: 0.6, delay: 0.5 },
                  scale: { duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                }}
              >
                <h3 className="text-yellow-500 mb-4 text-2xl">Broker Rates</h3>
                <p className="text-gray-600 text-base">Network pricing that usually beats retail.</p>
              </motion.div>

              {/* Spec Sheets */}
              <motion.div
                className="text-center cursor-pointer p-16 rounded-xl bg-white border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.6 },
                  y: { duration: 0.6, delay: 0.6 },
                  scale: { duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.5 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                }}
              >
                <h3 className="text-yellow-500 mb-4 text-2xl">Spec Sheets</h3>
                <p className="text-gray-600 text-base">Download PDFs &amp; view product details instantly.</p>
              </motion.div>
            </div>

            {/* Right Side - Smartphone Mockup */}
            <motion.div
              className="relative z-10 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl w-80 h-[640px] cursor-pointer">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black w-40 h-7 rounded-b-3xl z-20"></div>
                
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
                  {/* App Header */}
                  <div className="bg-black text-white px-6 py-4 text-center">
                    <h3 className="tracking-wide">HireHub Rentals</h3>
                  </div>
                  
                  {/* Product List Container - No Scroll */}
                  <div className="h-[calc(100%-140px)] overflow-hidden relative">
                    {/* Auto-scrolling Products */}
                    <motion.div
                      animate={{ 
                        y: [0, -50 + '%']
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* VMS Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          VMS
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">VMS Board</h4>
                          <p className="text-xs text-gray-500 mb-1">Marketing &amp; Traffic</p>
                          <p className="text-xs text-green-600">Likely available — 1-2 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Light Tower Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Light
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Light Tower – LED</h4>
                          <p className="text-xs text-gray-500 mb-1">Single works</p>
                          <p className="text-xs text-green-600">High availability — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Mini Excavator Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Excavator
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Mini Excavator 1.7T</h4>
                          <p className="text-xs text-gray-500 mb-1">Tight access</p>
                          <p className="text-xs text-yellow-600">Moderate — 2-3 days</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Traffic Lights Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Traffic
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Traffic Lights (Portable)</h4>
                          <p className="text-xs text-gray-500 mb-1">TC set-ups</p>
                          <p className="text-xs text-green-600">Likely available — 1-2 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Scissor Lift Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Scissor
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Scissor Lift 19ft</h4>
                          <p className="text-xs text-gray-500 mb-1">Indoor/Outdoor</p>
                          <p className="text-xs text-green-600">High availability — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Generator Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Gen
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Generator 20kVA</h4>
                          <p className="text-xs text-gray-500 mb-1">Power Solutions</p>
                          <p className="text-xs text-green-600">Available — 1 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Compactor Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Compact
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Plate Compactor</h4>
                          <p className="text-xs text-gray-500 mb-1">Ground works</p>
                          <p className="text-xs text-green-600">Likely available — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Boom Lift Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Boom
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Boom Lift 45ft</h4>
                          <p className="text-xs text-gray-500 mb-1">Height access</p>
                          <p className="text-xs text-yellow-600">Moderate — 2-3 days</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Dumper Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Dumper
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Site Dumper 1T</h4>
                          <p className="text-xs text-gray-500 mb-1">Material handling</p>
                          <p className="text-xs text-green-600">High availability — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Forklift Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Fork
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Forklift 2.5T</h4>
                          <p className="text-xs text-gray-500 mb-1">Warehouse ops</p>
                          <p className="text-xs text-green-600">Available — 1-2 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Duplicate Set - VMS Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          VMS
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">VMS Board</h4>
                          <p className="text-xs text-gray-500 mb-1">Marketing &amp; Traffic</p>
                          <p className="text-xs text-green-600">Likely available — 1-2 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Light Tower Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Light
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Light Tower – LED</h4>
                          <p className="text-xs text-gray-500 mb-1">Single works</p>
                          <p className="text-xs text-green-600">High availability — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Mini Excavator Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Excavator
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Mini Excavator 1.7T</h4>
                          <p className="text-xs text-gray-500 mb-1">Tight access</p>
                          <p className="text-xs text-yellow-600">Moderate — 2-3 days</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Traffic Lights Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Traffic
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Traffic Lights (Portable)</h4>
                          <p className="text-xs text-gray-500 mb-1">TC set-ups</p>
                          <p className="text-xs text-green-600">Likely available — 1-2 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Scissor Lift Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Scissor
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Scissor Lift 19ft</h4>
                          <p className="text-xs text-gray-500 mb-1">Indoor/Outdoor</p>
                          <p className="text-xs text-green-600">High availability — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Generator Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Gen
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Generator 20kVA</h4>
                          <p className="text-xs text-gray-500 mb-1">Power Solutions</p>
                          <p className="text-xs text-green-600">Available — 1 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Compactor Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Compact
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Plate Compactor</h4>
                          <p className="text-xs text-gray-500 mb-1">Ground works</p>
                          <p className="text-xs text-green-600">Likely available — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Boom Lift Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Boom
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Boom Lift 45ft</h4>
                          <p className="text-xs text-gray-500 mb-1">Height access</p>
                          <p className="text-xs text-yellow-600">Moderate — 2-3 days</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Dumper Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Dumper
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Site Dumper 1T</h4>
                          <p className="text-xs text-gray-500 mb-1">Material handling</p>
                          <p className="text-xs text-green-600">High availability — same day</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>

                      {/* Forklift Product */}
                      <div className="border-b border-gray-200 p-4 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
                          Fork
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">Forklift 2.5T</h4>
                          <p className="text-xs text-gray-500 mb-1">Warehouse ops</p>
                          <p className="text-xs text-green-600">Available — 1-2 day lead</p>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-1 rounded text-xs hover:bg-yellow-500">
                          Quote
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 px-6 flex justify-around items-center text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span>Products</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span>Bookings</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span>AI</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span>Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Management Section */}
      <section ref={bookingRef} className="bg-gray-50 py-20 px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-yellow-500 tracking-widest text-sm mb-3">BOOKING MANAGEMENT</p>
            <h2 className="text-5xl mb-4 tracking-tight">
              Track your hires in <span className="text-yellow-500">real-time</span>
            </h2>
            <p className="text-gray-600 text-lg">Manage past, present, and future equipment bookings all in one place.</p>
          </motion.div>

          {/* Smartphone with Tab Switching */}
          <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            {/* Left Side - Explanation Text */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl mb-4">All your bookings in <span className="text-yellow-500">one dashboard</span></h3>
                <p className="text-gray-600 leading-relaxed">
                  The HireHub Portal gives you complete visibility over your equipment hire lifecycle. 
                  Track everything from past performance to future planning, all in real-time.
                </p>
              </motion.div>

              {/* Past Hires */}
              <motion.div
                className="border-l-4 border-gray-300 pl-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-yellow-500 mb-2">Past Hires</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Review completed jobs with full hire history, rates paid, and supplier performance. 
                  Perfect for cost analysis and rebooking equipment you&apos;ve used before.
                </p>
              </motion.div>

              {/* Present Hires */}
              <motion.div
                className="border-l-4 border-yellow-400 pl-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="text-yellow-500 mb-2">Present Hires</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monitor all currently active equipment on-hire. Manage off-hire times, 
                  track costs in real-time, and extend bookings with one tap.
                </p>
              </motion.div>

              {/* Future Hires */}
              <motion.div
                className="border-l-4 border-blue-300 pl-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-yellow-500 mb-2">Future Hires</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plan ahead with upcoming bookings clearly scheduled. Modify dates, 
                  change quantities, or cancel reservations before they start.
                </p>
              </motion.div>
            </div>

            {/* Right Side - Smartphone */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl w-80 h-[640px] cursor-pointer">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black w-40 h-7 rounded-b-3xl z-20"></div>
                
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] w-full h-full overflow-hidden">
                  {/* App Header */}
                  <div className="bg-black text-white px-6 py-4 text-center">
                    <h3 className="tracking-wide">HireHub Rentals</h3>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 bg-white">
                    <div 
                      className={`flex-1 py-3 text-center text-sm cursor-pointer transition-colors ${
                        activeTab === 'past' 
                          ? 'text-yellow-500 border-b-2 border-yellow-500' 
                          : 'text-gray-400'
                      }`}
                    >
                      Past
                    </div>
                    <div 
                      className={`flex-1 py-3 text-center text-sm cursor-pointer transition-colors ${
                        activeTab === 'present' 
                          ? 'text-yellow-500 border-b-2 border-yellow-500' 
                          : 'text-gray-400'
                      }`}
                    >
                      Present
                    </div>
                    <div 
                      className={`flex-1 py-3 text-center text-sm cursor-pointer transition-colors ${
                        activeTab === 'future' 
                          ? 'text-yellow-500 border-b-2 border-yellow-500' 
                          : 'text-gray-400'
                      }`}
                    >
                      Future
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="h-[calc(100%-180px)] overflow-hidden relative">
                    <motion.div
                      key={activeTab}
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '-100%' }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {/* Past Hires */}
                      {activeTab === 'past' && (
                        <div className="p-4 space-y-4">
                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">Scissor Lift 19ft</h4>
                                <p className="text-xs text-gray-500 mb-1">Completed • Zenith Hire</p>
                                <p className="text-xs text-gray-500">Rate: $180/wk</p>
                                <p className="text-xs text-gray-500">Start: 10 Jun 2024</p>
                                <p className="text-xs text-gray-500">Finish: 17 Jun 2024</p>
                              </div>
                            </div>
                            <button className="mt-2 bg-gray-200 text-gray-700 px-4 py-1 rounded text-xs w-full">
                              View Details
                            </button>
                          </div>

                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">Generator 20kVA</h4>
                                <p className="text-xs text-gray-500 mb-1">Completed • Power Solutions</p>
                                <p className="text-xs text-gray-500">Rate: $150/wk</p>
                                <p className="text-xs text-gray-500">Start: 5 May 2024</p>
                                <p className="text-xs text-gray-500">Finish: 12 May 2024</p>
                              </div>
                            </div>
                            <button className="mt-2 bg-gray-200 text-gray-700 px-4 py-1 rounded text-xs w-full">
                              View Details
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Present/Current Hires */}
                      {activeTab === 'present' && (
                        <div className="p-4 space-y-4">
                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">Tower – LED</h4>
                                <p className="text-xs text-gray-500 mb-1">Concert • Allcott Hire</p>
                                <p className="text-xs text-gray-500">Rate: $210/wk</p>
                                <p className="text-xs text-gray-500">Start: 20 Jul 2024</p>
                                <p className="text-xs text-gray-500">Finish: — (On Hire)</p>
                              </div>
                            </div>
                            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded text-xs w-full">
                              Off Hire
                            </button>
                          </div>

                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">Portable Traffi...</h4>
                                <p className="text-xs text-gray-500 mb-1">Penrith • SEM Hire</p>
                                <p className="text-xs text-gray-500">Rate: $390/wk</p>
                                <p className="text-xs text-gray-500">Start: 22 Jul 2024</p>
                                <p className="text-xs text-gray-500">Finish: — (On Hire)</p>
                              </div>
                            </div>
                            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded text-xs w-full">
                              Off Hire
                            </button>
                          </div>

                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">Mini Dumper ...</h4>
                                <p className="text-xs text-gray-500 mb-1">Silverwater • Hire Ex...</p>
                                <p className="text-xs text-gray-500">Rate: $275/wk</p>
                                <p className="text-xs text-gray-500">Start: 25 Jul 2024</p>
                                <p className="text-xs text-gray-500">Finish: — (On Hire)</p>
                              </div>
                            </div>
                            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded text-xs w-full">
                              Off Hire
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Future Hires */}
                      {activeTab === 'future' && (
                        <div className="p-4 space-y-4">
                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">Excavator 5T</h4>
                                <p className="text-xs text-gray-500 mb-1">Upcoming • Metro Hire</p>
                                <p className="text-xs text-gray-500">Rate: $450/wk</p>
                                <p className="text-xs text-gray-500">Start: 15 Aug 2024</p>
                                <p className="text-xs text-gray-500">Finish: 22 Aug 2024</p>
                              </div>
                            </div>
                            <button className="mt-2 bg-yellow-400 text-black px-4 py-1 rounded text-xs w-full">
                              Modify Booking
                            </button>
                          </div>

                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">Boom Lift 45ft</h4>
                                <p className="text-xs text-gray-500 mb-1">Upcoming • Sky Access</p>
                                <p className="text-xs text-gray-500">Rate: $320/wk</p>
                                <p className="text-xs text-gray-500">Start: 20 Aug 2024</p>
                                <p className="text-xs text-gray-500">Finish: 27 Aug 2024</p>
                              </div>
                            </div>
                            <button className="mt-2 bg-yellow-400 text-black px-4 py-1 rounded text-xs w-full">
                              Modify Booking
                            </button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 px-6 flex justify-around items-center text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span>Products</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span>Bookings</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span>AI</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <span>Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Timeline Section */}
      <section ref={timelineRef} className="bg-white py-20 px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-5xl mb-6 tracking-tight">
                  See all your details in <span className="text-yellow-500">one place</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every job, every invoice, every detail — organized and accessible. 
                  The HireHub Portal brings together all your hire information into a single, 
                  powerful dashboard that keeps your projects moving forward.
                </p>
              </motion.div>

              {/* Feature 1 - Job Cards with Full Details */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <ClipboardList className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2">Complete Job Cards</h3>
                  <p className="text-gray-600 text-sm">
                    Each hire displays supplier name, location, dates, rates, and total cost. 
                    Everything you need to know at a glance without clicking through multiple screens.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 - Invoice Tracking */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Receipt className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-2">Invoice Tracking &amp; Payment</h3>
                  <p className="text-gray-600 text-sm">
                    See invoice numbers and payment status instantly. Pay outstanding invoices 
                    with one tap, or download past invoices for your records.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 - Location & Timeline */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-2">Location &amp; Timeline Info</h3>
                  <p className="text-gray-600 text-sm">
                    Track where equipment is deployed and view exact hire periods. 
                    Plan future jobs knowing exactly when gear becomes available again.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 - Quick Actions */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <MousePointerClick className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="mb-2">One-Tap Actions</h3>
                  <p className="text-gray-600 text-sm">
                    Re-hire equipment from past jobs, mark current hires off-hire, modify future bookings, 
                    or view detailed job information — all with a single tap.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Tablet Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Tablet Frame */}
              <div className="relative bg-black rounded-3xl p-4 shadow-2xl cursor-pointer">
                {/* Screen */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-white border-b border-gray-200 p-6">
                    <h3 className="text-xl mb-1">Your Jobs</h3>
                    <p className="text-gray-500 text-sm">Manage all equipment hires</p>
                  </div>

                  {/* Scrollable Jobs Container */}
                  <div className="h-[480px] overflow-hidden relative bg-gray-50">
                    <motion.div
                      className="p-6 space-y-4"
                      animate={{ 
                        y: [0, -400, 0]
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Past Job Card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <div className="mb-3">
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                            Past Job
                          </span>
                        </div>
                        <h4 className="mb-2">Excavator CAT 320</h4>
                        <p className="text-sm text-gray-600 mb-3">BuildCo Construction</p>
                        
                        <div className="space-y-1 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📍</span>
                            <span>Sydney, NSW</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📅</span>
                            <span>Mar 10 - Mar 24, 2024</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Rate: $450/day</span>
                            <span className="text-lg">$6,300</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            Invoice: INV-2024-0324
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                            ↻ Re-Hire
                          </button>
                          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
                            View Invoice
                          </button>
                        </div>
                      </div>

                      {/* Current Job Card */}
                      <div className="bg-white rounded-xl border border-blue-300 p-5 shadow-sm">
                        <div className="mb-3">
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                            Current Job
                          </span>
                        </div>
                        <h4 className="mb-2">Concrete Pump</h4>
                        <p className="text-sm text-gray-600 mb-3">Infrastructure Ltd</p>
                        
                        <div className="space-y-1 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📍</span>
                            <span>Melbourne, VIC</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📅</span>
                            <span>Nov 1 - Nov 20, 2024</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Rate: $280/day</span>
                            <span className="text-lg">$5,600</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            Invoice: INV-2024-1120
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600">
                            Off-Hire
                          </button>
                          <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600">
                            💳 Pay Now
                          </button>
                        </div>
                      </div>

                      {/* Future Job Card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <div className="mb-3">
                          <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                            Future Job
                          </span>
                        </div>
                        <h4 className="mb-2">Boom Lift 65ft</h4>
                        <p className="text-sm text-gray-600 mb-3">Elite Access Hire</p>
                        
                        <div className="space-y-1 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📍</span>
                            <span>Brisbane, QLD</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📅</span>
                            <span>Dec 5 - Dec 12, 2024</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Rate: $380/day</span>
                            <span className="text-lg">$2,660</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            Booking confirmed
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                            Modify
                          </button>
                          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
                            View Details
                          </button>
                        </div>
                      </div>

                      {/* Duplicate card for seamless loop */}
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <div className="mb-3">
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                            Past Job
                          </span>
                        </div>
                        <h4 className="mb-2">Excavator CAT 320</h4>
                        <p className="text-sm text-gray-600 mb-3">BuildCo Construction</p>
                        
                        <div className="space-y-1 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📍</span>
                            <span>Sydney, NSW</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">📅</span>
                            <span>Mar 10 - Mar 24, 2024</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Rate: $450/day</span>
                            <span className="text-lg">$6,300</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            Invoice: INV-2024-0324
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                            ↻ Re-Hire
                          </button>
                          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
                            View Invoice
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Product Assistance Section - Full Width */}
      <section ref={aiRef} className="bg-black py-20 px-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-yellow-500 tracking-widest text-sm mb-3">ULTRA-QUICK AI</p>
            <h2 className="text-white text-5xl mb-4 tracking-tight">
              Industry-Trained Product Assistance
            </h2>
            <p className="text-gray-400 text-lg">
              Our bots suggest the right equipment for your job — trained on real broker know-how.
              <br />
              Test how smart they are. 🤖
            </p>
          </motion.div>

          {/* Main Content Area */}
          <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            {/* Left Side - Chat Interface Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                {/* Chat Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-white">Chat preview</h3>
                </div>

                {/* User Message */}
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 text-sm">
                    Site: narrow driveway, need excavation for 15m trench.
                  </p>
                </div>

                {/* AI Response */}
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Recommend 1.7t mini excavator + 300mm bucket; consider 800kg dumper for carting. Delivery window 7–9am.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full text-left">
                    Book it.
                  </button>
                  
                  <motion.button 
                    className="bg-yellow-400 text-black px-6 py-3 rounded-lg w-full hover:bg-yellow-500 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Try the AI
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Feature Points */}
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-yellow-500 text-xl flex-shrink-0">✦</div>
                <div>
                  <h3 className="text-white mb-2">
                    <span className="">Context aware</span> — reads your site notes and suggests matching specs &amp; attachments.
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-yellow-500 text-xl flex-shrink-0">✦</div>
                <div>
                  <h3 className="text-white mb-2">
                    <span className="">Knows hire reality</span> — stock trends, delivery windows, and common gotchas.
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-yellow-500 text-xl flex-shrink-0">✦</div>
                <div>
                  <h3 className="text-white mb-2">
                    <span className="">Keeps it human</span> — brokers review &amp; confirm before anything locks in.
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section ref={featuresRef} className="bg-white py-20 px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl mb-4 tracking-tight">
              Powerful Features for <span className="text-yellow-500">Equipment Hire</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Everything you need to streamline equipment management, reduce costs, and keep operations running smoothly.
            </p>
          </motion.div>

          {/* Features Grid - 3x2 */}
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 - 800+ Equipment Products */}
            <motion.div
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-blue-500 rounded-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">800+ Equipment Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access a comprehensive catalogue of over 800 equipment products with instant pricing and detailed specifications.
              </p>
            </motion.div>

            {/* Feature 2 - 1 Click Re-Hire & Off Hire */}
            <motion.div
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-green-500 rounded-lg">
                <MousePointerClick className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">1 Click Re-Hire &amp; Off Hire</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Extend or return equipment instantly with a single click. Simplify your rental management and save time.
              </p>
            </motion.div>

            {/* Feature 3 - Prevent Overruns */}
            <motion.div
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-purple-500 rounded-lg">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Prevent Overruns</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monitor all on-hire gear in real-time and prevent equipment from staying on site longer than needed.
              </p>
            </motion.div>

            {/* Feature 4 - Invoice Management */}
            <motion.div
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-orange-500 rounded-lg">
                <Receipt className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Invoice Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                View and manage all invoices for past, current, and future hires with complete pricing visibility.
              </p>
            </motion.div>

            {/* Feature 5 - Client and Job Tracking */}
            <motion.div
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-pink-500 rounded-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Client and Job Tracking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keep track of all job clients with detailed records of equipment hired, locations, and project timelines.
              </p>
            </motion.div>

            {/* Feature 6 - Broker-Managed platform */}
            <motion.div
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-cyan-500 rounded-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Broker-Managed platform</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Benefit from a platform run by hire brokers designed to save you time and money on every hire.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="bg-gray-50 py-20 px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl mb-4 tracking-tight cursor-pointer group inline-block"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">How</span>
              <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">It Works</span>
            </motion.h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Four simple steps to manage all your equipment hires efficiently and save money.
            </p>
          </motion.div>

          {/* Steps Grid - 1x4 */}
          <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Step 1 - Browse Equipment Catalogue */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-blue-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <h3 className="text-2xl text-white">01</h3>
              </div>
              <h4 className="mb-3">Browse Equipment Catalogue</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Search through 800+ equipment products with instant access to pricing, specs, and availability.
              </p>
            </motion.div>

            {/* Step 2 - Book & Track Jobs */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-yellow-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                <h3 className="text-2xl text-white">02</h3>
              </div>
              <h4 className="mb-3">Book &amp; Track Jobs</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create hires and track all past, current, and future jobs with complete visibility of clients and pricing.
              </p>
            </motion.div>

            {/* Step 3 - 1-Click Re-Hire & Off-Hire */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-orange-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6 shadow-lg">
                <h3 className="text-2xl text-white">03</h3>
              </div>
              <h4 className="mb-3">1-Click Re-Hire &amp; Off-Hire</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manage equipment efficiently with instant re-hire and off-hire actions to streamline operations.
              </p>
            </motion.div>

            {/* Step 4 - Control & Save Money */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-purple-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                <h3 className="text-2xl text-white">04</h3>
              </div>
              <h4 className="mb-3">Control &amp; Save Money</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monitor all on-hire gear, prevent overruns, and benefit from broker-managed rates to reduce costs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Broker Run Platform Section */}
      <section ref={brokerRef} className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-12">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-yellow-500 uppercase tracking-wider mb-4 text-sm">
              BROKER RUN PLATFORM
            </p>
            <h2 className="text-5xl mb-6 tracking-tight">
              Run by real <span className="text-yellow-500">equipment hire brokers</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Call or email any time. We chase suppliers, coordinate delivery, and make sure nothing stays on-hire longer than it needs to.
            </p>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            {/* Contact Buttons */}
            <motion.div
              className="flex gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Phone className="w-5 h-5 text-pink-500" />
                <span className="text-lg">Talk to a broker</span>
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Mail className="w-5 h-5 text-purple-500" />
                <span className="text-lg">Email us</span>
              </button>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <button className="bg-yellow-400 text-black px-12 py-5 rounded-lg hover:bg-yellow-500 transition-colors text-lg">
                  Create free account
                </button>
              </Link>
              <p className="text-gray-500 mt-3">No credit card needed</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
