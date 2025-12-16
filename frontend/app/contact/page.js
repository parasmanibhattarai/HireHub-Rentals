"use client";

import { Phone, MapPin, Mail, User, Building2, FileText, MapPinned, Send, Zap, Globe, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactPage() {
  const [wantCallback, setWantCallback] = useState(false);
  const [wantEmail, setWantEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const states = [
    { value: "nsw", label: "NSW" },
    { value: "qld", label: "QLD" },
    { value: "vic", label: "VIC" },
    { value: "sa", label: "SA" },
    { value: "wa", label: "WA" },
    { value: "tas", label: "TAS" },
    { value: "nt", label: "NT" },
    { value: "act", label: "ACT" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Let's Connect Your Project
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Tell us what you need, and we'll match you with the perfect equipment supplier in Sydney
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Info Cards + Form */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number Card */}
              <motion.div
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-black font-semibold mb-1 text-lg">Phone number</h2>
                <p className="text-gray-600 text-sm">0434 173 270</p>
              </motion.div>

              {/* Service Area Card */}
              <motion.div
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-black font-semibold mb-1 text-lg">We Service - Australia Wide!</h2>
                <p className="text-gray-600 text-sm">NSW, QLD, VIC, SA, NT, WA, ACT</p>
              </motion.div>
            </div>

            {/* Form Section */}
            <motion.div
              className="bg-white p-8 md:p-12 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-yellow-400 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-black" />
                </div>
                <h2 className="text-black text-2xl md:text-3xl font-bold">Contact Us</h2>
              </div>

              <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
                Thank you for trusting HireHub Rentals. Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <User className="w-4 h-4" />
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      required
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <User className="w-4 h-4" />
                      Last Name <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Company and ABN */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <Building2 className="w-4 h-4" />
                      Company Name <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      placeholder="Your company name"
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="abn" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <FileText className="w-4 h-4" />
                      ABN <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="abn"
                      type="text"
                      placeholder="Australian Business Number"
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+61 XXX XXX XXX"
                      required
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div>
                  <label htmlFor="streetAddress" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                    <MapPinned className="w-4 h-4" />
                    Street Address <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    id="streetAddress"
                    type="text"
                    placeholder="123 Example Street"
                    className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                </div>

                {/* Suburb, Postal Code, State */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="suburb" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <MapPin className="w-4 h-4" />
                      Suburb <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="suburb"
                      type="text"
                      placeholder="Suburb"
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <Mail className="w-4 h-4" />
                      Postal Code <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="postalCode"
                      type="text"
                      placeholder="2000"
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
                      <MapPinned className="w-4 h-4" />
                      State <span className="text-gray-400">(optional)</span>
                    </label>
                    <select
                      id="state"
                      className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    >
                      <option value="">Select state</option>
                      {states.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Callback Preference */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-[#0A0A0A] mb-3">
                    How would you like us to contact you back?
                  </p>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={wantCallback}
                        onChange={(e) => setWantCallback(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 accent-yellow-400"
                      />
                      <Phone className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-[#0A0A0A]">Call me back</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={wantEmail}
                        onChange={(e) => setWantEmail(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 accent-yellow-400"
                      />
                      <Mail className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-[#0A0A0A]">Email me back</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-gray-800 transition-colors py-[14px] px-12 rounded-lg font-medium group inline-flex items-center gap-2"
                  >
                    Submit Application
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Column - Portrait Image */}
          <motion.div
            className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm h-[400px] lg:h-auto lg:min-h-[800px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/contact-hero.jpg"
              alt="Construction Equipment Hire"
              fill
              className="object-cover object-top"
            />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-8 md:p-12">
                <p className="text-white text-xl md:text-2xl font-semibold mb-2">
                  Equipment You Can Trust
                </p>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Access Sydney's largest network of quality equipment suppliers for all your project needs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What Is HireHub Portal Section - Full Width Breakout */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 md:px-16 py-[60px] mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl mb-6">
              <span className="text-white">What Is </span>
              <span className="text-yellow-400">HireHub Portal?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              HireHub Portal is your all-in-one digital platform for managing equipment hire. 
              Access 800+ products, track bookings in real-time, and streamline your entire hire workflow—all from one powerful dashboard.
            </p>
            <Link href="/portal">
              <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 rounded-full mt-6 transition-all duration-300 font-medium">
                Learn More
              </button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 mx-auto mb-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Instant Access</h3>
              <p className="text-gray-400 text-sm">
                Browse 800+ products with live availability and pricing
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 mx-auto mb-4">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Network Pricing</h3>
              <p className="text-gray-400 text-sm">
                Access broker rates that beat retail across Sydney
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-400 text-sm">
                Manage past, present, and future bookings seamlessly
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Efficiency Boost</h3>
              <p className="text-gray-400 text-sm">
                Save time with automated quotes and streamlined workflows
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
