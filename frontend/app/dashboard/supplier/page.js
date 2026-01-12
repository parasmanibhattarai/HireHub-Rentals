"use client";

import { motion } from 'motion/react';
import { Building2, Package, DollarSign, Users, TrendingUp, Settings, LogOut, Bell, Calendar, MapPin, FileText, AlertCircle, CheckCircle, Eye, ChevronRight, Activity, Truck, Clock, MessageSquare, Star, Download, Upload } from 'lucide-react';
import Link from 'next/link';

export default function SupplierDashboard() {
  // Placeholder company name - in real app this would come from auth
  const companyName = "Sydney Equipment Hire Pty Ltd";

  // Recent activities data - sorted by most recent
  const recentActivities = [
    {
      id: 1,
      type: 'New Booking',
      customer: 'ABC Construction',
      equipment: 'Excavator 20T',
      timestamp: '2 hours ago',
      date: new Date('2024-12-16T14:00:00'),
      icon: Calendar,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      action: 'booked',
      details: 'Pickup: Tomorrow, 9:00 AM'
    },
    {
      id: 2,
      type: 'Payment Received',
      customer: 'Metro Projects Pty Ltd',
      equipment: 'Scissor Lift 19ft',
      timestamp: '4 hours ago',
      date: new Date('2024-12-16T12:00:00'),
      icon: DollarSign,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      action: 'paid',
      details: '$850.00 received'
    },
    {
      id: 3,
      type: 'New Message',
      customer: 'City Builders Group',
      equipment: 'VMS Board',
      timestamp: '6 hours ago',
      date: new Date('2024-12-16T10:00:00'),
      icon: MessageSquare,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100',
      action: 'sent a message',
      details: 'Question about availability'
    },
    {
      id: 4,
      type: 'Equipment Returned',
      customer: 'BuildPro Industries',
      equipment: 'Concrete Mixer 400L',
      timestamp: '8 hours ago',
      date: new Date('2024-12-16T08:00:00'),
      icon: Download,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-100',
      action: 'returned',
      details: 'In good condition'
    },
    {
      id: 5,
      type: 'Quote Request',
      customer: 'Urban Developments',
      equipment: 'Boom Lift 40ft',
      timestamp: '1 day ago',
      date: new Date('2024-12-15T15:00:00'),
      icon: FileText,
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      action: 'requested quote',
      details: '3 day hire period'
    },
    {
      id: 6,
      type: 'Review Submitted',
      customer: 'Coastal Constructions',
      equipment: 'Compactor Plate',
      timestamp: '1 day ago',
      date: new Date('2024-12-15T11:00:00'),
      icon: Star,
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-100',
      action: 'left a 5-star review',
      details: '"Excellent service!"'
    },
    {
      id: 7,
      type: 'Equipment Picked Up',
      customer: 'Northern Infrastructure',
      equipment: 'Generator 15kVA',
      timestamp: '2 days ago',
      date: new Date('2024-12-14T13:00:00'),
      icon: Upload,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-100',
      action: 'picked up',
      details: 'North Sydney location'
    },
    {
      id: 8,
      type: 'New Booking',
      customer: 'Premier Developments',
      equipment: 'Forklift 2.5T',
      timestamp: '2 days ago',
      date: new Date('2024-12-14T09:00:00'),
      icon: Calendar,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      action: 'booked',
      details: 'Weekly hire starting Monday'
    }
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[1600px] mx-auto px-16 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-black mb-2">
                Welcome, {companyName}
              </h1>
              <p className="text-gray-600" style={{ fontSize: '18px' }}>
                What would you like to do today?
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 border border-gray-300 rounded-lg hover:border-black transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </button>
              <Link href="/login">
                <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg hover:border-black transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Three Main Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Your Activity */}
            <Link href="/dashboard/supplier/activity">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-2xl transition-all cursor-pointer group h-full"
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-400 transition-colors">
                      <Activity className="w-7 h-7 text-purple-600 group-hover:text-black transition-colors" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black mb-2 text-2xl">Your Activity</h3>
                    <p className="text-gray-600 text-sm mb-3">View and manage all your past, present and future hires</p>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">5</p>
                      <p className="text-xs text-gray-500">Past</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">18</p>
                      <p className="text-xs text-gray-500">Present</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">7</p>
                      <p className="text-xs text-gray-500">Future</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 2. Your Products */}
            <Link href="/dashboard/supplier/products">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-2xl transition-all cursor-pointer group h-full"
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-400 transition-colors">
                      <Package className="w-7 h-7 text-green-600 group-hover:text-black transition-colors" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black mb-2 text-2xl">Your Products</h3>
                    <p className="text-gray-600 text-sm mb-3">Manage your inventory and add new equipment to your catalogue</p>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">45</p>
                      <p className="text-xs text-gray-500">Total</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">27</p>
                      <p className="text-xs text-gray-500">Available</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">18</p>
                      <p className="text-xs text-gray-500">On Hire</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 3. Profile */}
            <Link href="/dashboard/supplier/profile">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-2xl transition-all cursor-pointer group h-full"
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-400 transition-colors">
                      <Building2 className="w-7 h-7 text-blue-600 group-hover:text-black transition-colors" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black mb-2 text-2xl">Profile</h3>
                    <p className="text-gray-600 text-sm mb-3">Manage your business profile, settings and payment information</p>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-xs text-gray-500">Active</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-xs text-gray-500">Verified</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Recent Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border border-gray-200 rounded-xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-100 rounded-xl">
                <Activity className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-black text-2xl">Recent Activities</h2>
                <p className="text-gray-600 text-sm">Latest updates and actions from your customers</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {recentActivities.slice(0, 6).map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="group p-5 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 ${activity.bgColor} rounded-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 ${activity.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <h3 className="text-black mb-1">
                            <span className="font-medium">{activity.customer}</span>
                            <span className="text-gray-600 mx-1.5">·</span>
                            <span className="text-gray-700">{activity.action}</span>
                          </h3>
                          <p className="text-sm text-gray-600 mb-1.5">{activity.equipment}</p>
                          <p className="text-xs text-gray-500">{activity.details}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span className={`px-2.5 py-1 rounded-full text-xs whitespace-nowrap ${
                            activity.type === 'New Booking' 
                              ? 'bg-green-100 text-green-700' 
                              : activity.type === 'Payment Received'
                              ? 'bg-blue-100 text-blue-700'
                              : activity.type === 'New Message'
                              ? 'bg-purple-100 text-purple-700'
                              : activity.type === 'Equipment Returned'
                              ? 'bg-orange-100 text-orange-700'
                              : activity.type === 'Quote Request'
                              ? 'bg-yellow-100 text-yellow-700'
                              : activity.type === 'Review Submitted'
                              ? 'bg-pink-100 text-pink-700'
                              : 'bg-teal-100 text-teal-700'
                          }`}>
                            {activity.type}
                          </span>
                          <span className="text-xs text-gray-500">{activity.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Activities Button */}
          <div className="mt-6 text-center">
            <Link href="/dashboard/supplier/activity">
              <button className="px-6 py-2.5 border border-gray-300 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all text-sm inline-flex items-center gap-2">
                View All Activities
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

