"use client";

import { motion } from 'motion/react';
import { Building2, Mail, Lock, ArrowLeft, User, Phone } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SupplierLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bypass authentication and go directly to dashboard
    router.push('/dashboard/supplier');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/login" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to account selection
        </Link>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg"
        >
          {/* Icon & Title */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="bg-black w-14 h-14 rounded-full flex items-center justify-center mb-3">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-black mb-1" style={{ fontSize: '28px' }}>
              Supplier {isLogin ? 'Login' : 'Sign Up'}
            </h1>
            <p className="text-gray-600 text-sm">
              {isLogin ? 'Welcome back! Enter your details to continue' : 'Join our network of equipment suppliers'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 px-4 py-2.5 rounded-lg transition-all text-sm ${
                isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 px-4 py-2.5 rounded-lg transition-all text-sm ${
                !isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-1.5">
                  <label htmlFor="business-name" className="text-gray-700 text-sm block">Business Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="business-name"
                      type="text"
                      placeholder="Your Company Pty Ltd"
                      className="w-full pl-9 h-11 border border-gray-300 rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-gray-700 text-sm block">Contact Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-9 h-11 border border-gray-300 rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-gray-700 text-sm block">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="0412 345 678"
                      className="w-full pl-9 h-11 border border-gray-300 rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-gray-700 text-sm block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-9 h-11 border border-gray-300 rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-gray-700 text-sm block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-9 h-11 border border-gray-300 rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-1.5">
                <label htmlFor="confirm-password" className="text-gray-700 text-sm block">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-9 h-11 border border-gray-300 rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300 w-4 h-4" />
                  Remember me
                </label>
                <a href="#" className="text-black hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            {!isLogin && (
              <div className="space-y-2.5 pt-1">
                <label className="flex items-start gap-2 cursor-pointer text-gray-600 text-xs">
                  <input type="checkbox" className="rounded border-gray-300 w-4 h-4 mt-0.5" required />
                  <span>I agree to the Terms of Service and Privacy Policy</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer text-gray-600 text-xs">
                  <input type="checkbox" className="rounded border-gray-300 w-4 h-4 mt-0.5" />
                  <span>Send me updates about new features and opportunities</span>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 transition-colors h-11 mt-6 rounded-lg font-medium"
            >
              {isLogin ? 'Login to Account' : 'Create Free Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 text-sm">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-gray-700 text-sm">GitHub</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
