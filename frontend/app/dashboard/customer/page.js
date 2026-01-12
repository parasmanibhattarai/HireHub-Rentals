"use client";

import { motion } from 'motion/react';
import { User, Package, Clock, Heart, Settings, LogOut, MapPin, Calendar, FileText, Bell, Search, TrendingUp, Briefcase, DollarSign, Activity, CheckCircle, XCircle, AlertCircle, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CustomerDashboard() {
  // Placeholder customer name - in real app this would come from auth
  const customerName = "John Smith";

  // Recent activity data
  const recentActivities = [
    {
      id: 1,
      type: 'booking',
      action: 'Booked Excavator 20T',
      details: 'Sydney Equipment Co. • Nov 26 - Nov 30',
      time: '2 hours ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'quote',
      action: 'Quote request sent',
      details: 'Boom Lift 45ft • 3 suppliers',
      time: '5 hours ago',
      status: 'pending',
      icon: Clock
    },
    {
      id: 3,
      type: 'booking',
      action: 'Confirmed Scissor Lift 19ft',
      details: 'Access Hire Sydney • Nov 28 - Dec 2',
      time: '1 day ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      id: 4,
      type: 'quote',
      action: 'Received quote response',
      details: 'Generator 20KVA • 5 suppliers responded',
      time: '2 days ago',
      status: 'info',
      icon: AlertCircle
    },
    {
      id: 5,
      type: 'profile',
      action: 'Updated profile information',
      details: 'Business details updated',
      time: '3 days ago',
      status: 'success',
      icon: User
    },
    {
      id: 6,
      type: 'booking',
      action: 'Booked VMS Board',
      details: 'Traffic Solutions • Dec 1 - Dec 5',
      time: '4 days ago',
      status: 'success',
      icon: CheckCircle
    }
  ];

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
                Hello, {customerName}
              </h1>
              <p className="text-gray-600" style={{ fontSize: '18px' }}>
                What would you like to do today?
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 border border-gray-300 rounded-lg hover:border-black transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  3
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
            {/* 1. Your Jobs */}
            <Link href="/dashboard/customer/jobs">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-2xl transition-all cursor-pointer group h-full"
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-yellow-100 rounded-xl group-hover:bg-yellow-400 transition-colors">
                      <Briefcase className="w-7 h-7 text-yellow-600 group-hover:text-black transition-colors" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black mb-2 text-2xl">Your Jobs</h3>
                    <p className="text-gray-600 text-sm mb-3">View and manage all your past, present and future equipment hires</p>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">3</p>
                      <p className="text-xs text-gray-500">Active</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">2</p>
                      <p className="text-xs text-gray-500">Upcoming</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">12</p>
                      <p className="text-xs text-gray-500">Completed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 2. Price List */}
            <Link href="/dashboard/customer/price-list">
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
                      <DollarSign className="w-7 h-7 text-green-600 group-hover:text-black transition-colors" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black mb-2 text-2xl">Price List</h3>
                    <p className="text-gray-600 text-sm mb-3">Browse our complete catalogue of equipment with transparent pricing</p>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">120+</p>
                      <p className="text-xs text-gray-500">Items</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">6</p>
                      <p className="text-xs text-gray-500">Categories</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-black mb-1">24/7</p>
                      <p className="text-xs text-gray-500">Availability</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 3. Profile */}
            <Link href="/dashboard/customer/profile">
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
                      <User className="w-7 h-7 text-blue-600 group-hover:text-black transition-colors" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black mb-2 text-2xl">Profile</h3>
                    <p className="text-gray-600 text-sm mb-3">Manage your account settings, payment methods and preferences</p>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-xs text-gray-500">Profile Complete</p>
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

        {/* Recent Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border border-gray-200 rounded-xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-orange-100 rounded-xl">
                <Activity className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-black text-2xl">Recent Activity</h2>
                <p className="text-gray-600 text-sm">Your latest actions and updates</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black border border-gray-200 rounded-lg hover:border-black transition-colors">
              <span className="text-sm">View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="group p-4 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors ${
                      activity.status === 'success' ? 'bg-green-100 group-hover:bg-green-200' :
                      activity.status === 'pending' ? 'bg-yellow-100 group-hover:bg-yellow-200' :
                      activity.status === 'info' ? 'bg-blue-100 group-hover:bg-blue-200' :
                      'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        activity.status === 'success' ? 'text-green-600' :
                        activity.status === 'pending' ? 'text-yellow-600' :
                        activity.status === 'info' ? 'text-blue-600' :
                        'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-black mb-1">{activity.action}</p>
                      <p className="text-gray-600 text-sm">{activity.details}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm text-gray-500 whitespace-nowrap">{activity.time}</span>
                      {activity.status === 'success' && (
                        <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs rounded-full">Completed</span>
                      )}
                      {activity.status === 'pending' && (
                        <span className="px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Pending</span>
                      )}
                      {activity.status === 'info' && (
                        <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">New</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

