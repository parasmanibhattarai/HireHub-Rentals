"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useParams } from 'next/navigation';
import { getCategoryBySlug } from '@/data/categories';
import { notFound } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-16">
          <motion.h1 
            className="mb-6 text-7xl cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-black inline-block mr-3 group-hover:text-yellow-400 transition-colors duration-300">
              Trending
            </span>
            <span className="text-yellow-400 inline-block group-hover:text-black transition-colors duration-300">
              {category.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {category.description}
          </motion.p>

          {/* Subcategories Grid */}
          {category.subcategories.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.subcategories.map((subcategory, index) => (
                <motion.div
                  key={subcategory.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                >
                  <Link
                    href={subcategory.link}
                    className="group cursor-pointer block"
                  >
                    <motion.div 
                      className="relative overflow-hidden rounded-lg shadow-md h-48 mb-3"
                      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={subcategory.image}
                        alt={subcategory.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </motion.div>
                    <motion.h3 
                      className="text-center group-hover:text-yellow-500 transition-colors font-medium"
                    >
                      {subcategory.name}
                    </motion.h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-gray-500 text-lg mb-4">No subcategories available yet.</p>
              <Link 
                href="/equipments"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                Browse All Categories
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
