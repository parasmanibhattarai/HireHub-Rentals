"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function EquipmentsPage() {
  const categories = [
    {
      id: 1,
      name: "Trending Retail Hire",
      image: "/images/category-retail.jpg",
      link: "/categories/retail-hire"
    },
    {
      id: 2,
      name: "Trending General Hire",
      image: "/images/category-general.jpg",
      link: "/categories/general-hire"
    },
    {
      id: 3,
      name: "Trending Traffic Hire",
      image: "/images/category-traffic.jpg",
      link: "/categories/traffic-light"
    },
    {
      id: 4,
      name: "Trending Construction Hire",
      image: "/images/category-construction.jpg",
      link: "/categories/construction-hire"
    },
    {
      id: 5,
      name: "Trending Access Hire",
      image: "/images/category-access.jpg",
      link: "/categories/access-hire"
    },
    {
      id: 6,
      name: "Trending Events Hire",
      image: "/images/category-events.jpg",
      link: "/categories/events-hire"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Hero Section */}
      <section className="bg-white pt-12 pb-8">
        <div className="max-w-[1440px] mx-auto px-16">
          <motion.h1 
            className="mb-4 text-6xl cursor-pointer group"
          >
            <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">
              Browse All
            </span>
            <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">
              Equipments
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            Find the perfect equipment for your project. Browse our extensive range of hire equipment across Sydney.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="flex-1 pb-8">
        <div className="max-w-[1440px] mx-auto px-16 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="h-64"
              >
                <Link
                  href={category.link}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-full block"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-200"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 + 0.1 }}
                  >
                    <h2 className="text-white text-2xl">{category.name}</h2>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

