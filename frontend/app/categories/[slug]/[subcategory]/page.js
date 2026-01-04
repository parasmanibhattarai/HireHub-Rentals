"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { getSubcategoryBySlug, defaultRelatedProducts } from '@/data/categories';
import { notFound } from 'next/navigation';

export default function SubcategoryPage() {
  const params = useParams();
  const { slug, subcategory: subcategorySlug } = params;
  
  const subcategory = getSubcategoryBySlug(slug, subcategorySlug);
  
  if (!subcategory) {
    notFound();
  }

  const title = subcategory.name;
  const description = `Professional ${subcategory.name.toLowerCase()} equipment available for hire across Sydney. HireHub connects you with trusted suppliers for all your ${subcategory.categoryTitle.toLowerCase()} needs.`;

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-16 py-12">
        {/* Title and Description */}
        <motion.h1 
          className="text-4xl mb-3 cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">
            {title.split(' ')[0]}
          </span>
          <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">
            {title.split(' ').slice(1).join(' ') || 'Hire'}
          </span>
        </motion.h1>
        <motion.p 
          className="text-base text-gray-700 mb-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {description}
        </motion.p>

        {/* Three Sub Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Product Overview and Key Specs Stacked */}
          <div className="space-y-8">
            {/* Product Overview */}
            <motion.div
              className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-orange-400 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl cursor-pointer group">
                <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">
                  Product
                </span>
                <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">
                  overview
                </span>
              </h2>
              <p className="text-gray-800 text-sm mb-2">
                HireHub connects you with top suppliers across Sydney, offering a wide range of options:
                premium units, standard models, and budget-friendly alternatives for your project needs.
              </p>
              <p className="text-gray-800 text-sm">
                Because we broker it, you don&apos;t have to manage multiple vendors – you can compare options,
                negotiate pricing, and secure the best value for your requirements.
              </p>
            </motion.div>

            {/* Key Specs */}
            <motion.div
              className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            >
              <h2 className="mb-6 text-2xl cursor-pointer group">
                <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">
                  Key
                </span>
                <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">
                  Specs
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  className="text-center cursor-pointer p-4 rounded-xl bg-white border border-gray-200 shadow-sm group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                  }}
                >
                  <h3 className="mb-1 text-sm">
                    <span className="text-black group-hover:text-yellow-400 transition-colors duration-300">Standard </span>
                    <span className="text-yellow-400 group-hover:text-black transition-colors duration-300">options</span>
                  </h3>
                  <p className="text-gray-600 text-xs">Good for basic requirements and everyday use</p>
                </motion.div>

                <motion.div
                  className="text-center cursor-pointer p-4 rounded-xl bg-white border border-gray-200 shadow-sm group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                  }}
                >
                  <h3 className="mb-1 text-sm">
                    <span className="text-black group-hover:text-yellow-400 transition-colors duration-300">Premium </span>
                    <span className="text-yellow-400 group-hover:text-black transition-colors duration-300">options</span>
                  </h3>
                  <p className="text-gray-600 text-xs">Retail, events, sales, branding applications</p>
                </motion.div>

                <motion.div
                  className="text-center cursor-pointer p-4 rounded-xl bg-white border border-gray-200 shadow-sm group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                  }}
                >
                  <h3 className="mb-1 text-sm">
                    <span className="text-black group-hover:text-yellow-400 transition-colors duration-300">Control </span>
                    <span className="text-yellow-400 group-hover:text-black transition-colors duration-300">set</span>
                  </h3>
                  <p className="text-gray-600 text-xs">For roadworks, land closures, and traffic management</p>
                </motion.div>

                <motion.div
                  className="text-center cursor-pointer p-4 rounded-xl bg-white border border-gray-200 shadow-sm group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.35 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                  }}
                >
                  <h3 className="mb-1 text-sm">
                    <span className="text-black group-hover:text-yellow-400 transition-colors duration-300">Programmed </span>
                    <span className="text-yellow-400 group-hover:text-black transition-colors duration-300">for you</span>
                  </h3>
                  <p className="text-gray-600 text-xs">Validated and confirmed to pre-agreed schedule</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image Only */}
          <div>
            {/* Image Box */}
            <motion.div
              className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-xl hover:border-blue-400 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden h-[480px] relative">
                <Image
                  src={subcategory.image}
                  alt={`${title} equipment hire`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Contact Section - Full Width Below Both Columns */}
        <motion.div 
          className="bg-white px-16 py-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.25 }}
        >
          <h2 className="mb-3 text-2xl cursor-pointer group">
            <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">
              Quick
            </span>
            <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">
              Contact
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="quick-name" className="text-sm text-gray-700 mb-1 block">
                  Full Name
                </label>
                <input 
                  id="quick-name" 
                  placeholder="John Smith" 
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="quick-phone" className="text-sm text-gray-700 mb-1 block">
                  Phone Number
                </label>
                <input 
                  id="quick-phone" 
                  type="tel" 
                  placeholder="0400 000 000" 
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="quick-email" className="text-sm text-gray-700 mb-1 block">
                  Email Address
                </label>
                <input 
                  id="quick-email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full h-10 px-3 bg-white border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <div>
              <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium">
                Send Enquiry
              </button>
            </div>
          </div>
          
          {/* Quick Contact Options Below */}
          <div className="flex flex-wrap items-center justify-center gap-10 mt-4 pt-4 border-t border-gray-200">
            <motion.a 
              href="tel:1300000000"
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Call us</div>
                <div className="text-sm text-gray-900 group-hover:text-blue-600 transition-colors">1300 000 000</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="mailto:hello@hirehub.com.au"
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-orange-50 p-3 rounded-full group-hover:bg-orange-100 transition-colors">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Email us</div>
                <div className="text-sm text-gray-900 group-hover:text-orange-600 transition-colors">hello@hirehub.com.au</div>
              </div>
            </motion.a>
            
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-green-50 p-3 rounded-full group-hover:bg-green-100 transition-colors">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Message us</div>
                <div className="text-sm text-gray-900 group-hover:text-green-600 transition-colors">Send a message</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Get a Free Quote Button */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          <Link href="/contact">
            <motion.button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-3 rounded-full text-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.button>
          </Link>
        </motion.div>

        {/* Related Products Images */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="mb-4 text-2xl cursor-pointer group">
            <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">
              Other Products You
            </span>
            <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">
              May Like
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {defaultRelatedProducts.map((product, index) => (
              <Link key={index} href={product.link}>
                <motion.div 
                  className="rounded-lg overflow-hidden h-32 group cursor-pointer relative"
                  whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <p className="text-white p-3 text-sm w-full">{product.name}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

