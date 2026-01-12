"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Package, Calendar, MapPin, ArrowLeft, Camera, CheckCircle, Truck, Clock, Users, ChevronDown, X, Check, XCircle, ChevronUp, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SupplierActivity() {
  const [activeTab, setActiveTab] = useState('newJobs');
  const [selectedJob, setSelectedJob] = useState(101);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [declineJobId, setDeclineJobId] = useState(null);
  const [declineReason, setDeclineReason] = useState('');
  const [declineOtherText, setDeclineOtherText] = useState('');
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const jobRefs = useRef([]);
  const [showProofModal, setShowProofModal] = useState(false);
  const [selectedProofJobId, setSelectedProofJobId] = useState(null);
  const [filterType, setFilterType] = useState('date');

  // Job data state - now mutable
  const [jobs, setJobs] = useState({
    newJobs: [
      {
        id: 101,
        name: 'Excavator 30T',
        customer: 'Westfield Developments',
        customerPhone: '0412 345 678',
        customerEmail: 'projects@westfield.com.au',
        startDate: 'Sunday, Dec 8, 2024',
        endDate: 'Sunday, Dec 15, 2024',
        location: 'Parramatta, NSW',
        address: '123 Construction Avenue, Parramatta, NSW 2150',
        status: 'Pending',
        price: '$3,200',
        duration: '7 days',
        totalValue: '$22,400',
        specialRequirements: 'Operator required, Must have safety certification',
        deliveryInstructions: 'Site access from rear entrance only. Contact site manager on arrival.',
        image: '/images/related-excavator.jpg',
        hasProofImage: false
      },
      {
        id: 102,
        name: 'Generator 25KVA',
        customer: 'Sydney Events Co',
        customerPhone: '0423 456 789',
        customerEmail: 'hire@sydneyevents.com.au',
        startDate: 'Tuesday, Dec 10, 2024',
        endDate: 'Thursday, Dec 12, 2024',
        location: 'Olympic Park, NSW',
        address: '15 Olympic Boulevard, Olympic Park, NSW 2127',
        status: 'Pending',
        price: '$180',
        duration: '2 days',
        totalValue: '$360',
        specialRequirements: 'Silent operation required for outdoor event',
        deliveryInstructions: 'Deliver to loading dock at Gate 3. Setup assistance needed.',
        image: '/images/related-generator.jpg',
        hasProofImage: false
      },
      {
        id: 103,
        name: 'Boom Lift 60ft',
        customer: 'Northern Constructions',
        customerPhone: '0434 567 890',
        customerEmail: 'equipment@northerncon.com.au',
        startDate: 'Thursday, Dec 12, 2024',
        endDate: 'Friday, Dec 20, 2024',
        location: 'Chatswood, NSW',
        address: '234 Pacific Highway, Chatswood, NSW 2067',
        status: 'Pending',
        price: '$620',
        duration: '8 days',
        totalValue: '$4,960',
        specialRequirements: 'Indoor use, must fit through 3m wide doorway',
        deliveryInstructions: 'Site manager: John Smith. Delivery window 7am-9am only.',
        image: '/images/related-scissorlift.jpg',
        hasProofImage: false
      }
    ],
    booking: [
      {
        id: 4,
        name: 'Boom Lift 45ft',
        customer: 'Northern Constructions',
        startDate: 'Tuesday, Dec 10, 2024',
        endDate: 'Sunday, Dec 15, 2024',
        location: 'Chatswood, NSW',
        address: '234 Pacific Highway, Chatswood, NSW 2067',
        status: 'Confirmed',
        price: '$2,600',
        image: '/images/related-scissorlift.jpg',
        hasProofImage: false
      },
      {
        id: 5,
        name: 'Generator 20KVA',
        customer: 'Sydney Events Co',
        startDate: 'Wednesday, Dec 18, 2024',
        endDate: 'Sunday, Dec 22, 2024',
        location: 'Olympic Park, NSW',
        address: '15 Olympic Boulevard, Olympic Park, NSW 2127',
        status: 'On-route',
        price: '$720',
        image: '/images/related-generator.jpg',
        hasProofImage: false
      },
      {
        id: 10,
        name: 'Lighting Tower',
        customer: 'Sydney Events Co',
        startDate: 'Wednesday, Dec 18, 2024',
        endDate: 'Sunday, Dec 22, 2024',
        location: 'Olympic Park, NSW',
        address: '15 Olympic Boulevard, Olympic Park, NSW 2127',
        status: 'Confirmed',
        price: '$880',
        image: '/images/traffic-lighting-towers.jpg',
        hasProofImage: false
      }
    ],
    onHire: [
      {
        id: 1,
        name: 'Excavator 20T',
        customer: 'ABC Construction',
        startDate: 'Tuesday, Nov 26, 2024',
        endDate: 'Saturday, Nov 30, 2024',
        location: 'Parramatta, NSW',
        address: '45 Industrial Drive, Parramatta, NSW 2150',
        status: 'On-hire',
        price: '$2,400',
        image: '/images/related-excavator.jpg',
        hasProofImage: true
      },
      {
        id: 2,
        name: 'Scissor Lift 19ft',
        customer: 'Metro Projects Pty Ltd',
        startDate: 'Thursday, Nov 28, 2024',
        endDate: 'Monday, Dec 2, 2024',
        location: 'Sydney CBD',
        address: '128 Pitt Street, Sydney CBD, NSW 2000',
        status: 'Off-Hired',
        price: '$850',
        image: '/images/related-scissorlift.jpg',
        hasProofImage: true
      },
      {
        id: 3,
        name: 'VMS Board',
        customer: 'City Builders Group',
        startDate: 'Sunday, Dec 1, 2024',
        endDate: 'Thursday, Dec 5, 2024',
        location: 'North Sydney',
        address: '89 Miller Street, North Sydney, NSW 2060',
        status: 'Pickup scheduled',
        price: '$1,200',
        image: '/images/traffic-vms-boards.jpg',
        hasProofImage: true
      },
      {
        id: 9,
        name: 'Generator 15KVA',
        customer: 'ABC Construction',
        startDate: 'Friday, Nov 29, 2024',
        endDate: 'Tuesday, Dec 3, 2024',
        location: 'Parramatta, NSW',
        address: '45 Industrial Drive, Parramatta, NSW 2150',
        status: 'On-hire',
        price: '$600',
        image: '/images/related-generator.jpg',
        hasProofImage: true
      }
    ],
    completed: [
      {
        id: 6,
        name: 'Forklift 3T',
        customer: 'Warehouse Solutions',
        startDate: 'Sunday, Nov 10, 2024',
        endDate: 'Friday, Nov 15, 2024',
        location: 'Bankstown, NSW',
        address: '56 Chapel Road, Bankstown, NSW 2200',
        status: 'Closed',
        price: '$1,100',
        image: '/images/related-forklift.jpg',
        hasProofImage: true
      },
      {
        id: 7,
        name: 'Mini Excavator 5T',
        customer: 'Liverpool Contractors',
        startDate: 'Monday, Oct 28, 2024',
        endDate: 'Tuesday, Nov 5, 2024',
        location: 'Liverpool, NSW',
        address: '123 Hume Highway, Liverpool, NSW 2170',
        status: 'Closed',
        price: '$2,240',
        image: '/images/related-excavator.jpg',
        hasProofImage: true
      },
      {
        id: 8,
        name: 'Lighting Tower',
        customer: 'Event Masters',
        startDate: 'Tuesday, Oct 15, 2024',
        endDate: 'Sunday, Oct 20, 2024',
        location: 'Darling Harbour, NSW',
        address: '88 Harbourside Drive, Darling Harbour, NSW 2000',
        status: 'Closed',
        price: '$1,100',
        image: '/images/traffic-lighting-towers.jpg',
        hasProofImage: true
      },
      {
        id: 11,
        name: 'Scissor Lift 12ft',
        customer: 'Liverpool Contractors',
        startDate: 'Sunday, Oct 20, 2024',
        endDate: 'Monday, Oct 28, 2024',
        location: 'Liverpool, NSW',
        address: '123 Hume Highway, Liverpool, NSW 2170',
        status: 'Closed',
        price: '$800',
        image: '/images/related-scissorlift.jpg',
        hasProofImage: true
      }
    ]
  });

  const handleDeclineClick = (jobId) => {
    setDeclineJobId(jobId);
    setShowDeclineModal(true);
    setDeclineReason('');
    setDeclineOtherText('');
  };

  const handleDeclineSubmit = () => {
    if (!declineReason) {
      alert('Please select a reason for declining');
      return;
    }
    if (declineReason === 'other' && !declineOtherText.trim()) {
      alert('Please provide details for declining');
      return;
    }
    console.log('Declined job:', declineJobId, 'Reason:', declineReason, declineOtherText);
    setShowDeclineModal(false);
    setDeclineJobId(null);
    setDeclineReason('');
    setDeclineOtherText('');
  };

  const handleAccept = (jobId) => {
    setJobs(prevJobs => {
      const jobToMove = prevJobs.newJobs.find(job => job.id === jobId);
      if (!jobToMove) return prevJobs;
      const updatedJob = { ...jobToMove, status: 'Confirmed' };
      const updatedNewJobs = prevJobs.newJobs.filter(job => job.id !== jobId);
      const updatedBooking = [...prevJobs.booking, updatedJob];
      return { ...prevJobs, newJobs: updatedNewJobs, booking: updatedBooking };
    });
    setActiveTab('booking');
  };

  const handleEnRoute = (jobId) => {
    setJobs(prevJobs => {
      const updatedBooking = prevJobs.booking.map(job =>
        job.id === jobId ? { ...job, status: 'On-route' } : job
      );
      return { ...prevJobs, booking: updatedBooking };
    });
  };

  const handleUploadProof = (jobId) => {
    setJobs(prevJobs => {
      const jobToMove = prevJobs.booking.find(job => job.id === jobId);
      if (!jobToMove) return prevJobs;
      const updatedJob = { ...jobToMove, status: 'On-hire', hasProofImage: true };
      const updatedBooking = prevJobs.booking.filter(job => job.id !== jobId);
      const updatedOnHire = [...prevJobs.onHire, updatedJob];
      return { ...prevJobs, booking: updatedBooking, onHire: updatedOnHire };
    });
    setShowProofModal(false);
    setActiveTab('onHire');
  };

  const handleMarkCompleted = (jobId) => {
    setJobs(prevJobs => {
      const jobToMove = prevJobs.onHire.find(job => job.id === jobId);
      if (!jobToMove) return prevJobs;
      const updatedJob = { ...jobToMove, status: 'Closed', hasProofImage: true };
      const updatedOnHire = prevJobs.onHire.filter(job => job.id !== jobId);
      const updatedCompleted = [...prevJobs.completed, updatedJob];
      return { ...prevJobs, onHire: updatedOnHire, completed: updatedCompleted };
    });
    setActiveTab('completed');
  };

  const currentJobs = jobs[activeTab];
  
  const groupedByAddress = currentJobs.reduce((acc, job) => {
    const address = job.address;
    if (!acc[address]) acc[address] = [];
    acc[address].push(job);
    return acc;
  }, {});

  const groupedByDate = currentJobs.reduce((acc, job) => {
    const date = job.startDate;
    if (!acc[date]) acc[date] = [];
    acc[date].push(job);
    return acc;
  }, {});

  const groupedJobs = filterType === 'date' ? groupedByDate : groupedByAddress;
  const allGroups = Object.keys(groupedJobs);
  const [expandedGroups, setExpandedGroups] = useState(new Set(allGroups));

  useEffect(() => {
    const groups = Object.keys(filterType === 'date' ? groupedByDate : groupedByAddress);
    setExpandedGroups(new Set(groups));
  }, [activeTab, filterType]);

  const toggleGroup = (group) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(group)) {
      newExpanded.delete(group);
    } else {
      newExpanded.add(group);
    }
    setExpandedGroups(newExpanded);
  };

  const currentJob = currentJobs.find(job => job.id === selectedJob) || currentJobs[0];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-orange-100 text-orange-700';
      case 'Confirmed': return 'bg-yellow-100 text-yellow-700';
      case 'On-route': return 'bg-purple-100 text-purple-700';
      case 'On-hire': return 'bg-green-100 text-green-700';
      case 'Off-Hired': return 'bg-red-100 text-red-700';
      case 'Pickup scheduled': return 'bg-indigo-100 text-indigo-700';
      case 'Closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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
          className="mb-8"
        >
          <h1 className="text-black mb-2">Your Activity</h1>
          <p className="text-gray-600" style={{ fontSize: '20px' }}>
            Manage your equipment hire orders
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-4 mb-8 border-b border-gray-200"
        >
          {['newJobs', 'booking', 'onHire', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 transition-all ${
                activeTab === tab
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab === 'newJobs' ? 'New Jobs' : tab === 'onHire' ? 'Active' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* New Jobs Tab - Special Layout */}
        {activeTab === 'newJobs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Job List */}
            <div className="space-y-4">
              {jobs.newJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  onClick={() => setSelectedJob(job.id)}
                  className={`bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer ${
                    selectedJob === job.id ? 'border-yellow-400' : 'border-gray-200 hover:border-gray-400'
                  }`}
                  ref={el => jobRefs.current[index] = el}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-black text-lg">{job.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Suburb</p>
                        <p className="text-black">{job.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Total Price (Est.)</p>
                        <p className="text-black">{job.totalValue}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Start Date</p>
                        <p className="text-black">{job.startDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">End Date</p>
                        <p className="text-black">{job.endDate}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Job Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-8 sticky top-24 h-fit"
            >
              {(() => {
                const currentNewJob = jobs.newJobs.find(job => job.id === selectedJob) || jobs.newJobs[0];
                if (!currentNewJob) return <p>No jobs available</p>;
                return (
                  <>
                    <h2 className="text-black mb-6 text-2xl">Job Details</h2>
                    <div className="mb-6">
                      <div className="h-64 bg-gray-100 rounded-lg overflow-hidden relative">
                        <Image src={currentNewJob.image} alt={currentNewJob.name} fill className="object-cover" />
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-black text-xl mb-1">{currentNewJob.name}</h3>
                        <p className="text-gray-600">{currentNewJob.customer}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Customer Contact</p>
                            <p className="text-black">{currentNewJob.customerPhone}</p>
                            <p className="text-black text-sm">{currentNewJob.customerEmail}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Hire Period</p>
                            <p className="text-black">{currentNewJob.startDate} - {currentNewJob.endDate}</p>
                            <p className="text-gray-600 text-sm">{currentNewJob.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Delivery Location</p>
                            <p className="text-black">{currentNewJob.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Package className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Total Value (Est.)</p>
                            <p className="text-black text-2xl">{currentNewJob.totalValue}</p>
                            <p className="text-gray-600 text-sm">{currentNewJob.price} per day (Est.)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {currentNewJob.specialRequirements && (
                      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-xs text-yellow-700 mb-1">Special Requirements</p>
                        <p className="text-black text-sm">{currentNewJob.specialRequirements}</p>
                      </div>
                    )}
                    {currentNewJob.deliveryInstructions && (
                      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-xs text-blue-700 mb-1">Delivery Instructions</p>
                        <p className="text-black text-sm">{currentNewJob.deliveryInstructions}</p>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleAccept(currentNewJob.id)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <Check className="w-5 h-5" />
                        Accept
                      </button>
                      <button 
                        onClick={() => handleDeclineClick(currentNewJob.id)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <XCircle className="w-5 h-5" />
                        Decline
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}

        {/* Other Tabs - Original Layout */}
        {activeTab !== 'newJobs' && (
          <>
            {/* Filter Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-gray-600">Filter by:</span>
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setFilterType('date')}
                  className={`px-6 py-2 rounded-lg transition-all ${
                    filterType === 'date' ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Date
                </button>
                <button
                  onClick={() => setFilterType('address')}
                  className={`px-6 py-2 rounded-lg transition-all ${
                    filterType === 'address' ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Address
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-8">
                {Object.entries(groupedJobs).map(([group, groupJobs], groupIndex) => (
                  <motion.div
                    key={group}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + groupIndex * 0.1 }}
                  >
                    <button
                      className="flex items-center gap-3 mb-4 w-full hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer"
                      onClick={() => toggleGroup(group)}
                    >
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        {filterType === 'date' ? (
                          <Calendar className="w-5 h-5 text-yellow-700" />
                        ) : (
                          <Building2 className="w-5 h-5 text-yellow-700" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <h2 className="text-black text-xl">{group}</h2>
                        <p className="text-gray-600 text-sm">
                          {groupJobs.length} {groupJobs.length === 1 ? 'item' : 'items'}
                          {filterType === 'date' ? ' on this date' : ' at this location'}
                        </p>
                      </div>
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <ChevronDown
                          className="w-6 h-6 text-black transition-transform"
                          style={{ transform: expandedGroups.has(group) ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </div>
                    </button>

                    <div
                      className="space-y-4"
                      style={{
                        maxHeight: expandedGroups.has(group) ? 'none' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out'
                      }}
                    >
                      {groupJobs.map((job, jobIndex) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + groupIndex * 0.1 + jobIndex * 0.05 }}
                          onClick={() => setSelectedJob(job.id)}
                          className={`bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer ${
                            selectedJob === job.id ? 'border-yellow-400' : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-start gap-6">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                              <Image src={job.image} alt={job.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="text-black mb-1 text-lg">{job.name}</h3>
                                  <p className="text-gray-600 text-sm mb-2">{job.customer}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(job.status)}`}>
                                  {job.status}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{job.startDate}</span>
                                </div>
                              </div>
                              <p className="text-black mt-2">{job.price}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Job Overview Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-gray-200 rounded-xl p-8 sticky top-24 h-fit"
              >
                {currentJob && (
                  <>
                    <h2 className="text-black mb-6 text-2xl">Job Overview</h2>
                    <div className="mb-6">
                      <div className="h-64 bg-gray-100 rounded-lg overflow-hidden relative">
                        <Image src={currentJob.image} alt={currentJob.name} fill className="object-cover" />
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-black text-xl mb-1">{currentJob.name}</h3>
                        <p className="text-gray-600">{currentJob.customer}</p>
                      </div>

                      {activeTab === 'booking' && (
                        <div className="flex gap-3 mb-4">
                          <button 
                            onClick={() => handleEnRoute(currentJob.id)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                          >
                            <Truck className="w-5 h-5" />
                            En-route
                          </button>
                          <button 
                            onClick={() => {
                              setSelectedProofJobId(currentJob.id);
                              setShowProofModal(true);
                            }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5" />
                            Delivered
                          </button>
                        </div>
                      )}

                      {activeTab === 'onHire' && (
                        <div className="flex gap-3 mb-4">
                          <button 
                            onClick={() => handleMarkCompleted(currentJob.id)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5" />
                            Mark as Completed
                          </button>
                        </div>
                      )}

                      <div className="flex items-center justify-between py-3 border-y border-gray-200">
                        <span className="text-gray-600">Status</span>
                        <span className={`px-4 py-2 rounded-full text-sm ${getStatusColor(currentJob.status)}`}>
                          {currentJob.status}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Customer</p>
                            <p className="text-black">{currentJob.customer}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Duration</p>
                            <p className="text-black">{currentJob.startDate} - {currentJob.endDate}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Location</p>
                            <p className="text-black">{currentJob.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Package className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Total Value (Est.)</p>
                            <p className="text-black text-xl">{currentJob.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {activeTab !== 'booking' && (
                      <div className="border-t border-gray-200 pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-black">Proof of Delivery</h3>
                          {currentJob.hasProofImage && (
                            <span className="flex items-center gap-1 text-green-600 text-sm">
                              <CheckCircle className="w-4 h-4" />
                              Uploaded
                            </span>
                          )}
                        </div>
                        
                        {currentJob.hasProofImage ? (
                          <div className="space-y-3">
                            <div className="h-48 bg-gray-100 rounded-lg overflow-hidden relative">
                              <Image src={currentJob.image} alt="Proof of delivery" fill className="object-cover" />
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:border-black transition-colors">
                              <Camera className="w-5 h-5" />
                              Replace Image
                            </button>
                          </div>
                        ) : (
                          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                            <Camera className="w-5 h-5" />
                            Upload Proof Image
                          </button>
                        )}
                      </div>
                    )}

                    {activeTab !== 'booking' && (
                      <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                        <button className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:border-black transition-colors">
                          Contact Customer
                        </button>
                        <button className="flex-1 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                          Update Status
                        </button>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Decline Modal */}
      <AnimatePresence>
        {showDeclineModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowDeclineModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl z-50 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-black text-2xl">Decline Job</h2>
                <button onClick={() => setShowDeclineModal(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 mb-4">Please select a reason for declining this job:</p>
                <div className="space-y-3">
                  {['noStock', 'noTransport', 'priceTooLow', 'other'].map((reason) => (
                    <label key={reason} className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="declineReason"
                        value={reason}
                        checked={declineReason === reason}
                        onChange={(e) => setDeclineReason(e.target.value)}
                        className="w-5 h-5 mt-1"
                      />
                      <div className="flex-1">
                        <span className="text-black block">
                          {reason === 'noStock' && 'No Stock Available'}
                          {reason === 'noTransport' && 'No Transport Available'}
                          {reason === 'priceTooLow' && 'Price Too Low'}
                          {reason === 'other' && 'Other'}
                        </span>
                        {reason === 'other' && declineReason === 'other' && (
                          <textarea
                            value={declineOtherText}
                            onChange={(e) => setDeclineOtherText(e.target.value)}
                            placeholder="Please provide details..."
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
                            rows={3}
                          />
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowDeclineModal(false)} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:border-black transition-colors">
                  Cancel
                </button>
                <button onClick={handleDeclineSubmit} className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Submit
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Proof of Delivery Modal */}
      <AnimatePresence>
        {showProofModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowProofModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl z-50 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-black text-2xl">Proof of Delivery</h2>
                <button onClick={() => setShowProofModal(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 mb-4">Please upload a photo as proof of delivery:</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-1">Click to upload photo</p>
                  <p className="text-gray-400 text-sm">or drag and drop</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowProofModal(false)} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:border-black transition-colors">
                  Cancel
                </button>
                <button onClick={() => handleUploadProof(selectedProofJobId)} className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  Upload
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

