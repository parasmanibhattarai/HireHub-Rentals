"use client";

import { motion } from 'motion/react';
import { User, Building2, ArrowRight, Check, Zap, Shield, TrendingUp, Users, Package } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-[1600px] mx-auto px-16 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-black mb-4">
            Welcome to HireHub
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Join Australia&apos;s leading equipment hire marketplace
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          {/* Left Section - Customer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-12 lg:p-16 relative group hover:bg-gray-50 transition-colors duration-300"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-full -ml-12 -mb-12 opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-black mb-1" style={{ fontSize: '32px' }}>
                      Customer
                    </h2>
                    <p className="text-gray-600 text-sm">Find Equipment</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs uppercase tracking-wider">
                  Popular
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Access Australia&apos;s largest network of equipment suppliers. Compare prices, check availability, and book equipment instantly.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-black rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-black mb-1">Instant Equipment Search</p>
                    <p className="text-gray-500 text-sm">Browse thousands of equipment listings from verified suppliers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-black rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-black mb-1">Compare &amp; Save</p>
                    <p className="text-gray-500 text-sm">Get multiple quotes and choose the best deal for your project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-black rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-black mb-1">24/7 Support</p>
                    <p className="text-gray-500 text-sm">Expert assistance whenever you need help with your bookings</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 p-6 bg-gray-100 rounded-xl">
                <div className="text-center">
                  <p className="text-black mb-1" style={{ fontSize: '28px' }}>500+</p>
                  <p className="text-gray-600 text-xs">Suppliers</p>
                </div>
                <div className="text-center border-l border-r border-gray-300">
                  <p className="text-black mb-1" style={{ fontSize: '28px' }}>10K+</p>
                  <p className="text-gray-600 text-xs">Equipment</p>
                </div>
                <div className="text-center">
                  <p className="text-black mb-1" style={{ fontSize: '28px' }}>50K+</p>
                  <p className="text-gray-600 text-xs">Bookings</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link href="/login/customer" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span style={{ fontSize: '16px' }}>Login to Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/login/customer" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-black transition-all flex items-center justify-center gap-2"
                  >
                    <span style={{ fontSize: '16px' }}>Create Free Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-2 text-gray-600 text-sm">
                <Shield className="w-4 h-4" />
                <span>Verified suppliers • Secure payments • Instant confirmation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Supplier */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-950 text-white p-12 lg:p-16 relative group hover:bg-gray-900 transition-colors duration-300"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mb-12 opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h2 className="text-white mb-1" style={{ fontSize: '32px' }}>
                      Supplier
                    </h2>
                    <p className="text-gray-400 text-sm">List Equipment</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs uppercase tracking-wider">
                  Business
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Expand your reach and grow your equipment hire business. Connect with thousands of customers actively looking for equipment.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-white rounded-full">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Maximize Your Revenue</p>
                    <p className="text-gray-400 text-sm">List your entire inventory and reach customers across Sydney</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-white rounded-full">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Automated Booking System</p>
                    <p className="text-gray-400 text-sm">Manage availability, pricing, and bookings from one dashboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-white rounded-full">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Business Analytics</p>
                    <p className="text-gray-400 text-sm">Track performance, revenue, and customer insights in real-time</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <p className="text-white" style={{ fontSize: '28px' }}>24%</p>
                  </div>
                  <p className="text-gray-400 text-xs">Avg Growth</p>
                </div>
                <div className="text-center border-l border-r border-white/10">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <p className="text-white" style={{ fontSize: '28px' }}>15K+</p>
                  </div>
                  <p className="text-gray-400 text-xs">Customers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Package className="w-4 h-4 text-purple-400" />
                    <p className="text-white" style={{ fontSize: '28px' }}>99%</p>
                  </div>
                  <p className="text-gray-400 text-xs">Utilization</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link href="/login/supplier" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span style={{ fontSize: '16px' }}>Login to Portal</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/login/supplier" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-transparent text-white px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white transition-all flex items-center justify-center gap-2"
                  >
                    <span style={{ fontSize: '16px' }}>Create Supplier Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-gray-400 text-sm">
                <Zap className="w-4 h-4" />
                <span>Commission-free trial • No setup fees • Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-gray-700" />
            </div>
            <p className="text-black mb-1">Verified &amp; Trusted</p>
            <p className="text-gray-600 text-sm">All suppliers are verified and insured</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-gray-700" />
            </div>
            <p className="text-black mb-1">Instant Booking</p>
            <p className="text-gray-600 text-sm">Book equipment in minutes, not hours</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-gray-700" />
            </div>
            <p className="text-black mb-1">Best Prices</p>
            <p className="text-gray-600 text-sm">Competitive rates from multiple suppliers</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
