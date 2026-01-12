"use client";

import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Search, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomerPriceList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All Equipment',
    'Construction',
    'Access',
    'Traffic Management',
    'Power & Lighting',
    'Material Handling'
  ];

  const equipment = [
    {
      id: 1,
      name: 'Excavator 20T',
      category: 'Construction',
      dailyRate: '$450',
      weeklyRate: '$2,800',
      monthlyRate: '$9,500',
      description: 'Heavy-duty excavator for large construction projects',
      image: '/images/related-excavator.jpg'
    },
    {
      id: 2,
      name: 'Mini Excavator 5T',
      category: 'Construction',
      dailyRate: '$320',
      weeklyRate: '$1,950',
      monthlyRate: '$6,800',
      description: 'Compact excavator for tight spaces',
      image: '/images/related-excavator.jpg'
    },
    {
      id: 3,
      name: 'Scissor Lift 19ft',
      category: 'Access',
      dailyRate: '$280',
      weeklyRate: '$1,680',
      monthlyRate: '$5,600',
      description: 'Electric scissor lift for indoor work',
      image: '/images/related-scissorlift.jpg'
    },
    {
      id: 4,
      name: 'Boom Lift 45ft',
      category: 'Access',
      dailyRate: '$520',
      weeklyRate: '$3,120',
      monthlyRate: '$10,400',
      description: 'Articulating boom lift for high-reach work',
      image: '/images/related-scissorlift.jpg'
    },
    {
      id: 5,
      name: 'VMS Board',
      category: 'Traffic Management',
      dailyRate: '$350',
      weeklyRate: '$2,100',
      monthlyRate: '$7,000',
      description: 'Variable message sign for traffic control',
      image: '/images/traffic-vms-boards.jpg'
    },
    {
      id: 6,
      name: 'Traffic Cones (Set of 50)',
      category: 'Traffic Management',
      dailyRate: '$45',
      weeklyRate: '$270',
      monthlyRate: '$900',
      description: 'High-visibility traffic cones',
      image: '/images/traffic-portabooms.jpg'
    },
    {
      id: 7,
      name: 'Generator 20KVA',
      category: 'Power & Lighting',
      dailyRate: '$180',
      weeklyRate: '$1,080',
      monthlyRate: '$3,600',
      description: 'Diesel generator for reliable power',
      image: '/images/related-generator.jpg'
    },
    {
      id: 8,
      name: 'Lighting Tower',
      category: 'Power & Lighting',
      dailyRate: '$220',
      weeklyRate: '$1,320',
      monthlyRate: '$4,400',
      description: 'Mobile lighting tower for night work',
      image: '/images/traffic-lighting-towers.jpg'
    },
    {
      id: 9,
      name: 'Forklift 3T',
      category: 'Material Handling',
      dailyRate: '$220',
      weeklyRate: '$1,320',
      monthlyRate: '$4,400',
      description: 'Versatile forklift for warehouse use',
      image: '/images/related-forklift.jpg'
    },
    {
      id: 10,
      name: 'Pallet Jack',
      category: 'Material Handling',
      dailyRate: '$45',
      weeklyRate: '$270',
      monthlyRate: '$900',
      description: 'Manual pallet jack for moving pallets',
      image: '/images/related-forklift.jpg'
    },
    {
      id: 11,
      name: 'Concrete Barriers',
      category: 'Traffic Management',
      dailyRate: '$35',
      weeklyRate: '$210',
      monthlyRate: '$700',
      description: 'Heavy-duty concrete barriers per unit',
      image: '/images/traffic-concrete-barriers.jpg'
    },
    {
      id: 12,
      name: 'Skid Steer Loader',
      category: 'Construction',
      dailyRate: '$380',
      weeklyRate: '$2,280',
      monthlyRate: '$7,600',
      description: 'Compact loader for versatile tasks',
      image: '/images/related-excavator.jpg'
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[1600px] mx-auto px-16 py-12">
        {/* Back Button */}
        <Link href="/dashboard/customer">
          <motion.button
            className="flex items-center gap-2 mb-8 text-gray-600 hover:text-black transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-black mb-2">Price List</h1>
          <p className="text-gray-600" style={{ fontSize: '20px' }}>
            Browse all equipment and rental rates
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
            >
              <option value="all">All Equipment</option>
              <option value="Construction">Construction</option>
              <option value="Access">Access</option>
              <option value="Traffic Management">Traffic Management</option>
              <option value="Power & Lighting">Power & Lighting</option>
              <option value="Material Handling">Material Handling</option>
            </select>
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all"
            >
              {/* Equipment Image */}
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Equipment Details */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-black mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>

                {/* Pricing */}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Estimated Daily Rate:</span>
                    <span className="text-black">{item.dailyRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Estimated Weekly Rate:</span>
                    <span className="text-black">{item.weeklyRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Estimated Monthly Rate:</span>
                    <span className="text-black">{item.monthlyRate}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href="/contact">
                  <button className="w-full mt-4 px-4 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Request Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEquipment.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-lg p-12 text-center"
          >
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No equipment found matching your search</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

