"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Package, Calendar, MapPin, ArrowLeft, RefreshCw, ChevronDown, FileText, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomerJobs() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const jobs = {
    active: [
      {
        id: 1,
        name: 'Excavator 20T',
        supplier: 'Sydney Equipment Co.',
        startDate: 'Nov 26, 2024',
        endDate: 'Nov 30, 2024',
        location: 'Parramatta, NSW',
        address: '45 Industrial Drive, Parramatta, NSW 2150',
        status: 'Active',
        price: '$450/day',
        isPaid: true,
        image: '/images/related-excavator.jpg'
      },
      {
        id: 2,
        name: 'Scissor Lift 19ft',
        supplier: 'Access Hire Sydney',
        startDate: 'Nov 28, 2024',
        endDate: 'Dec 2, 2024',
        location: 'Sydney CBD',
        address: '128 Pitt Street, Sydney CBD, NSW 2000',
        status: 'Active',
        price: '$280/day',
        isPaid: false,
        image: '/images/related-scissorlift.jpg'
      },
      {
        id: 8,
        name: 'Generator 15KVA',
        supplier: 'Power Equipment Co.',
        startDate: 'Nov 29, 2024',
        endDate: 'Dec 3, 2024',
        location: 'Parramatta, NSW',
        address: '45 Industrial Drive, Parramatta, NSW 2150',
        status: 'Active',
        price: '$150/day',
        isPaid: true,
        image: '/images/related-generator.jpg'
      }
    ],
    future: [
      {
        id: 3,
        name: 'VMS Board',
        supplier: 'Traffic Solutions',
        startDate: 'Dec 5, 2024',
        endDate: 'Dec 10, 2024',
        location: 'North Sydney',
        address: '89 Miller Street, North Sydney, NSW 2060',
        status: 'Confirmed',
        price: '$350/day',
        isPaid: false,
        image: '/images/traffic-vms-boards.jpg'
      },
      {
        id: 4,
        name: 'Boom Lift 45ft',
        supplier: 'Heights Equipment',
        startDate: 'Dec 12, 2024',
        endDate: 'Dec 15, 2024',
        location: 'Chatswood, NSW',
        address: '234 Pacific Highway, Chatswood, NSW 2067',
        status: 'Confirmed',
        price: '$520/day',
        isPaid: true,
        image: '/images/related-scissorlift.jpg'
      },
      {
        id: 9,
        name: 'Lighting Tower',
        supplier: 'Traffic Solutions',
        startDate: 'Dec 5, 2024',
        endDate: 'Dec 10, 2024',
        location: 'North Sydney',
        address: '89 Miller Street, North Sydney, NSW 2060',
        status: 'Confirmed',
        price: '$220/day',
        isPaid: false,
        image: '/images/traffic-lighting-towers.jpg'
      }
    ],
    completed: [
      {
        id: 5,
        name: 'Forklift 3T',
        supplier: 'Sydney Forklifts',
        startDate: 'Nov 10, 2024',
        endDate: 'Nov 15, 2024',
        location: 'Bankstown, NSW',
        address: '56 Chapel Road, Bankstown, NSW 2200',
        status: 'Completed',
        price: '$220/day',
        isPaid: true,
        image: '/images/related-forklift.jpg'
      },
      {
        id: 6,
        name: 'Generator 20KVA',
        supplier: 'Power Equipment Co.',
        startDate: 'Oct 28, 2024',
        endDate: 'Nov 5, 2024',
        location: 'Penrith, NSW',
        address: '77 Mulgoa Road, Penrith, NSW 2750',
        status: 'Completed',
        price: '$180/day',
        isPaid: true,
        image: '/images/related-generator.jpg'
      },
      {
        id: 7,
        name: 'Mini Excavator 5T',
        supplier: 'Sydney Equipment Co.',
        startDate: 'Oct 15, 2024',
        endDate: 'Oct 22, 2024',
        location: 'Liverpool, NSW',
        address: '123 Hume Highway, Liverpool, NSW 2170',
        status: 'Completed',
        price: '$320/day',
        isPaid: true,
        image: '/images/related-excavator.jpg'
      },
      {
        id: 10,
        name: 'Scissor Lift 12ft',
        supplier: 'Access Hire Sydney',
        startDate: 'Oct 10, 2024',
        endDate: 'Oct 18, 2024',
        location: 'Liverpool, NSW',
        address: '123 Hume Highway, Liverpool, NSW 2170',
        status: 'Completed',
        price: '$200/day',
        isPaid: true,
        image: '/images/related-scissorlift.jpg'
      }
    ],
    upcoming: [
      {
        id: 3,
        name: 'VMS Board',
        supplier: 'Traffic Solutions',
        startDate: 'Dec 5, 2024',
        endDate: 'Dec 10, 2024',
        location: 'North Sydney',
        address: '89 Miller Street, North Sydney, NSW 2060',
        status: 'Confirmed',
        price: '$350/day',
        isPaid: false,
        image: '/images/traffic-vms-boards.jpg'
      },
      {
        id: 4,
        name: 'Boom Lift 45ft',
        supplier: 'Heights Equipment',
        startDate: 'Dec 12, 2024',
        endDate: 'Dec 15, 2024',
        location: 'Chatswood, NSW',
        address: '234 Pacific Highway, Chatswood, NSW 2067',
        status: 'Confirmed',
        price: '$520/day',
        isPaid: true,
        image: '/images/related-scissorlift.jpg'
      },
      {
        id: 9,
        name: 'Lighting Tower',
        supplier: 'Traffic Solutions',
        startDate: 'Dec 5, 2024',
        endDate: 'Dec 10, 2024',
        location: 'North Sydney',
        address: '89 Miller Street, North Sydney, NSW 2060',
        status: 'Confirmed',
        price: '$220/day',
        isPaid: false,
        image: '/images/traffic-lighting-towers.jpg'
      }
    ]
  };

  const currentJobs = jobs[activeTab];

  // Group jobs by address
  const groupedByAddress = currentJobs.reduce((acc, job) => {
    const address = job.address;
    if (!acc[address]) {
      acc[address] = [];
    }
    acc[address].push(job);
    return acc;
  }, {});

  // Initialize all addresses as expanded by default
  const allAddresses = Object.keys(groupedByAddress);
  const [expandedAddresses, setExpandedAddresses] = useState(new Set(allAddresses));

  // Update expanded addresses when tab changes
  useEffect(() => {
    const newAddresses = Object.keys(jobs[activeTab].reduce((acc, job) => {
      if (!acc[job.address]) acc[job.address] = [];
      acc[job.address].push(job);
      return acc;
    }, {}));
    setExpandedAddresses(new Set(newAddresses));
  }, [activeTab]);

  const toggleAddress = (address) => {
    const newExpanded = new Set(expandedAddresses);
    if (newExpanded.has(address)) {
      newExpanded.delete(address);
    } else {
      newExpanded.add(address);
    }
    setExpandedAddresses(newExpanded);
  };

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
          <h1 className="text-black mb-2">Your Jobs</h1>
          <p className="text-gray-600" style={{ fontSize: '20px' }}>
            Manage your equipment hire bookings
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-4 mb-8 border-b border-gray-200"
        >
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 transition-all ${
              activeTab === 'upcoming'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`px-6 py-3 transition-all ${
              activeTab === 'active'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 transition-all ${
              activeTab === 'completed'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Completed
          </button>
        </motion.div>

        {/* Jobs Grouped by Address */}
        <div className="space-y-8">
          {Object.entries(groupedByAddress).map(([address, addressJobs], addressIndex) => (
            <motion.div
              key={address}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + addressIndex * 0.1 }}
            >
              {/* Address Header */}
              <button
                className="flex items-center gap-3 mb-4 w-full hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer"
                onClick={() => toggleAddress(address)}
              >
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-yellow-700" />
                </div>
                <div className="flex-1 text-left">
                  <h2 className="text-black text-xl">{address}</h2>
                  <p className="text-gray-600 text-sm">{addressJobs.length} {addressJobs.length === 1 ? 'item' : 'items'} at this location</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg">
                  <ChevronDown
                    className="w-6 h-6 text-black transition-transform"
                    style={{
                      transform: expandedAddresses.has(address) ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </div>
              </button>

              {/* Jobs at this address */}
              <div
                className="space-y-4 ml-0"
                style={{
                  maxHeight: expandedAddresses.has(address) ? 'none' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out'
                }}
              >
                {addressJobs.map((job, jobIndex) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + addressIndex * 0.1 + jobIndex * 0.05 }}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-6">
                      {/* Equipment Image */}
                      <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={job.image}
                          alt={job.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Job Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-black mb-1 text-xl">{job.name}</h3>
                            <p className="text-gray-600 mb-2">{job.supplier}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{job.startDate} - {job.endDate}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-3 py-1 rounded-lg text-sm mb-2 ${
                              job.status === 'Active'
                                ? 'bg-yellow-400 text-black'
                                : job.status === 'Confirmed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-200 text-gray-700'
                            }`}>
                              {job.status}
                            </span>
                            <p className="text-gray-900 mt-2 mb-2">{job.price}</p>
                            {/* PDF Invoice Icon */}
                            <button className="flex items-center justify-end gap-1 text-gray-600 hover:text-black transition-colors">
                              <FileText className="w-4 h-4" />
                              <span className="text-xs">Invoice</span>
                            </button>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {/* Primary Action Button - Changes based on tab */}
                          {activeTab === 'active' && (
                            <button className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                              <RefreshCw className="w-4 h-4" />
                              Off-Hire
                            </button>
                          )}
                          {activeTab === 'upcoming' && (
                            <button className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                              <RefreshCw className="w-4 h-4" />
                              Rehire
                            </button>
                          )}
                          {activeTab === 'completed' && (
                            <button className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                              <RefreshCw className="w-4 h-4" />
                              Rehire
                            </button>
                          )}
                          
                          {/* Pay Now Button */}
                          {job.isPaid ? (
                            <button 
                              disabled
                              className="flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed"
                            >
                              <DollarSign className="w-4 h-4" />
                              Paid
                            </button>
                          ) : (
                            <button className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                              <DollarSign className="w-4 h-4" />
                              Pay Now
                            </button>
                          )}

                          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:border-black transition-colors">
                            View Details
                          </button>
                          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:border-black transition-colors">
                            Contact Supplier
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {currentJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-lg p-12 text-center"
          >
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No {activeTab} jobs found</p>
            <Link href="/categories">
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Browse Equipment
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

