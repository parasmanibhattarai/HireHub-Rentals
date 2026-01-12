"use client";

import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Building2, Mail, Phone, MapPin, CreditCard, Bell, Shield, Save, Camera, Globe, FileText } from 'lucide-react';
import Link from 'next/link';

export default function SupplierProfile() {
  const [activeSection, setActiveSection] = useState('business');

  const [profileData, setProfileData] = useState({
    businessName: 'Sydney Equipment Hire Pty Ltd',
    abn: '12 345 678 901',
    email: 'info@sydneyequipment.com.au',
    phone: '+61 2 9876 5432',
    address: '456 Industrial Drive',
    suburb: 'Silverwater',
    state: 'NSW',
    postcode: '2128',
    website: 'www.sydneyequipment.com.au',
    description: 'Leading equipment hire provider in Sydney with over 20 years of experience',
    contactPerson: 'Michael Johnson',
    contactEmail: 'michael@sydneyequipment.com.au',
    contactPhone: '+61 400 987 654'
  });

  const sections = [
    { id: 'business', name: 'Business Information', icon: Building2 },
    { id: 'contact', name: 'Contact Details', icon: Phone },
    { id: 'billing', name: 'Billing & Payment', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield }
  ];

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
          <h1 className="text-black mb-2">Business Profile</h1>
          <p className="text-gray-600" style={{ fontSize: '20px' }}>
            Manage your business information and settings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              {/* Business Logo */}
              <div className="text-center mb-6 pb-6 border-b border-gray-200">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-gray-500" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors">
                    <Camera className="w-4 h-4 text-black" />
                  </button>
                </div>
                <h3 className="text-black mb-1">{profileData.businessName}</h3>
                <p className="text-gray-600 text-sm">ABN: {profileData.abn}</p>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeSection === section.id
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{section.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              {/* Business Information */}
              {activeSection === 'business' && (
                <div>
                  <h2 className="text-black mb-6 text-2xl">Business Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">Business Name</label>
                      <input
                        type="text"
                        value={profileData.businessName}
                        onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">ABN</label>
                      <input
                        type="text"
                        value={profileData.abn}
                        onChange={(e) => setProfileData({...profileData, abn: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">Business Description</label>
                      <textarea
                        rows={4}
                        value={profileData.description}
                        onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">Website</label>
                      <input
                        type="text"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">Street Address</label>
                      <input
                        type="text"
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Suburb</label>
                        <input
                          type="text"
                          value={profileData.suburb}
                          onChange={(e) => setProfileData({...profileData, suburb: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">State</label>
                        <select
                          value={profileData.state}
                          onChange={(e) => setProfileData({...profileData, state: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        >
                          <option value="NSW">NSW</option>
                          <option value="VIC">VIC</option>
                          <option value="QLD">QLD</option>
                          <option value="SA">SA</option>
                          <option value="WA">WA</option>
                          <option value="TAS">TAS</option>
                          <option value="NT">NT</option>
                          <option value="ACT">ACT</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Postcode</label>
                        <input
                          type="text"
                          value={profileData.postcode}
                          onChange={(e) => setProfileData({...profileData, postcode: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}

              {/* Contact Details */}
              {activeSection === 'contact' && (
                <div>
                  <h2 className="text-black mb-6 text-2xl">Contact Details</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-black mb-4">Primary Contact</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Contact Person Name</label>
                          <input
                            type="text"
                            value={profileData.contactPerson}
                            onChange={(e) => setProfileData({...profileData, contactPerson: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Contact Email</label>
                          <input
                            type="email"
                            value={profileData.contactEmail}
                            onChange={(e) => setProfileData({...profileData, contactEmail: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Contact Phone</label>
                          <input
                            type="tel"
                            value={profileData.contactPhone}
                            onChange={(e) => setProfileData({...profileData, contactPhone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-black mb-4">Business Contact</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Business Email</label>
                          <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Business Phone</label>
                          <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}

              {/* Billing & Payment */}
              {activeSection === 'billing' && (
                <div>
                  <h2 className="text-black mb-6 text-2xl">Billing & Payment</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-black mb-4">Bank Account Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Account Name</label>
                          <input
                            type="text"
                            placeholder="Business account name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 mb-2 text-sm">BSB</label>
                            <input
                              type="text"
                              placeholder="000-000"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2 text-sm">Account Number</label>
                            <input
                              type="text"
                              placeholder="00000000"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-black mb-4">Tax Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="text-black mb-1">GST Registered</p>
                            <p className="text-gray-600 text-sm">Enable GST on invoices</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}

              {/* Notifications */}
              {activeSection === 'notifications' && (
                <div>
                  <h2 className="text-black mb-6 text-2xl">Notification Preferences</h2>
                  <div className="space-y-4">
                    {[
                      { id: 'new-bookings', label: 'New Booking Requests', description: 'Get notified when customers request to hire your equipment' },
                      { id: 'quote-requests', label: 'Quote Requests', description: 'Receive alerts for new quote requests' },
                      { id: 'booking-updates', label: 'Booking Updates', description: 'Get notified about changes to existing bookings' },
                      { id: 'payment-received', label: 'Payment Received', description: 'Notifications when payments are processed' },
                      { id: 'reviews', label: 'Customer Reviews', description: 'Get alerts when customers leave reviews' },
                      { id: 'low-stock', label: 'Low Stock Alerts', description: 'Notifications when equipment availability is low' },
                      { id: 'marketing', label: 'Marketing Updates', description: 'Receive platform updates and promotional opportunities' }
                    ].map((notification) => (
                      <div key={notification.id} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="text-black mb-1">{notification.label}</p>
                          <p className="text-gray-600 text-sm">{notification.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                    <Save className="w-4 h-4" />
                    Save Preferences
                  </button>
                </div>
              )}

              {/* Security */}
              {activeSection === 'security' && (
                <div>
                  <h2 className="text-black mb-6 text-2xl">Security Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-black mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Current Password</label>
                          <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">New Password</label>
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">Confirm New Password</label>
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                      </div>
                      <button className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                        Update Password
                      </button>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-black mb-4">Two-Factor Authentication</h3>
                      <p className="text-gray-600 text-sm mb-4">Add an extra layer of security to your business account</p>
                      <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                        Enable 2FA
                      </button>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-black mb-4">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                          <div>
                            <p className="text-black">Chrome on Windows</p>
                            <p className="text-gray-600 text-sm">Sydney, Australia • Active now</p>
                          </div>
                          <span className="text-green-600 text-sm">Current</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

