"use client";

import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Search, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SupplierProducts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Excavator 20T',
      category: 'Construction',
      dailyRate: '$450',
      weeklyRate: '$2,800',
      monthlyRate: '$9,500',
      stock: 3,
      available: 1,
      onHire: 2,
      status: 'active',
      image: '/images/related-excavator.jpg'
    },
    {
      id: 2,
      name: 'Mini Excavator 5T',
      category: 'Construction',
      dailyRate: '$320',
      weeklyRate: '$1,950',
      monthlyRate: '$6,800',
      stock: 5,
      available: 3,
      onHire: 2,
      status: 'active',
      image: '/images/related-excavator.jpg'
    },
    {
      id: 3,
      name: 'Scissor Lift 19ft',
      category: 'Access',
      dailyRate: '$280',
      weeklyRate: '$1,680',
      monthlyRate: '$5,600',
      stock: 4,
      available: 2,
      onHire: 2,
      status: 'active',
      image: '/images/related-scissorlift.jpg'
    },
    {
      id: 4,
      name: 'Boom Lift 45ft',
      category: 'Access',
      dailyRate: '$520',
      weeklyRate: '$3,120',
      monthlyRate: '$10,400',
      stock: 2,
      available: 1,
      onHire: 1,
      status: 'active',
      image: '/images/related-scissorlift.jpg'
    },
    {
      id: 5,
      name: 'VMS Board',
      category: 'Traffic Management',
      dailyRate: '$350',
      weeklyRate: '$2,100',
      monthlyRate: '$7,000',
      stock: 6,
      available: 3,
      onHire: 3,
      status: 'active',
      image: '/images/traffic-vms-boards.jpg'
    },
    {
      id: 6,
      name: 'Generator 20KVA',
      category: 'Power & Lighting',
      dailyRate: '$180',
      weeklyRate: '$1,080',
      monthlyRate: '$3,600',
      stock: 8,
      available: 5,
      onHire: 3,
      status: 'active',
      image: '/images/related-generator.jpg'
    },
    {
      id: 7,
      name: 'Lighting Tower',
      category: 'Power & Lighting',
      dailyRate: '$220',
      weeklyRate: '$1,320',
      monthlyRate: '$4,400',
      stock: 4,
      available: 2,
      onHire: 2,
      status: 'active',
      image: '/images/traffic-lighting-towers.jpg'
    },
    {
      id: 8,
      name: 'Forklift 3T',
      category: 'Material Handling',
      dailyRate: '$220',
      weeklyRate: '$1,320',
      monthlyRate: '$4,400',
      stock: 3,
      available: 3,
      onHire: 0,
      status: 'inactive',
      image: '/images/related-forklift.jpg'
    }
  ];

  const filteredProducts = products.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[1600px] mx-auto px-16 py-12">
        {/* Back Button */}
        <Link href="/dashboard/supplier">
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
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-black mb-2">Your Products</h1>
            <p className="text-gray-600" style={{ fontSize: '20px' }}>
              Manage your equipment inventory
            </p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add New Product
          </button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <p className="text-gray-600 mb-2">Total Products</p>
            <p className="text-black text-3xl">{products.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <p className="text-gray-600 mb-2">Total Stock</p>
            <p className="text-black text-3xl">{products.reduce((sum, p) => sum + p.stock, 0)}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <p className="text-gray-600 mb-2">Available</p>
            <p className="text-green-600 text-3xl">{products.reduce((sum, p) => sum + p.available, 0)}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <p className="text-gray-600 mb-2">On Hire</p>
            <p className="text-orange-600 text-3xl">{products.reduce((sum, p) => sum + p.onHire, 0)}</p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white border border-gray-200 rounded-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
            >
              <option value="all">All Categories</option>
              <option value="Construction">Construction</option>
              <option value="Access">Access</option>
              <option value="Traffic Management">Traffic Management</option>
              <option value="Power & Lighting">Power & Lighting</option>
              <option value="Material Handling">Material Handling</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    product.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {product.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-black mb-2">{product.name}</h3>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Stock</p>
                    <p className="text-black">{product.stock}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Available</p>
                    <p className="text-green-600">{product.available}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">On Hire</p>
                    <p className="text-orange-600">{product.onHire}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Daily:</span>
                    <span className="text-black">{product.dailyRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Weekly:</span>
                    <span className="text-black">{product.weeklyRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Monthly:</span>
                    <span className="text-black">{product.monthlyRate}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-black transition-colors">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:border-black transition-colors">
                    {product.status === 'active' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:border-red-600 hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Product Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-black text-2xl mb-6">Add New Product</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Product Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Excavator 20T"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Category</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors">
                      <option>Construction</option>
                      <option>Access</option>
                      <option>Traffic Management</option>
                      <option>Power & Lighting</option>
                      <option>Material Handling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Stock Quantity</label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Daily Rate</label>
                    <input
                      type="text"
                      placeholder="$0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Weekly Rate</label>
                    <input
                      type="text"
                      placeholder="$0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Monthly Rate</label>
                    <input
                      type="text"
                      placeholder="$0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Product description..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Product Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-black transition-colors cursor-pointer">
                    <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Click to upload image</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:border-black transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                  Add Product
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

