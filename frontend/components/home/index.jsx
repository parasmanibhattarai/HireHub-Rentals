"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, User, Mail, Phone, Building2, Package, MessageSquare, Send } from "lucide-react";
import { ScrollNavigator } from "@/components/ui/ScrollNavigator";

const steps = [
  {
    number: 1,
    title: "You tell us what you need",
    description: "Share your equipment requirements, project timeline, and location. We'll understand your specific needs and help you find the perfect solution.",
    image: "/images/section2-1.jpeg",
    imageHeight: "h-[300px] lg:h-[580px]",
  },
  {
    number: 2,
    title: "We source & manage the hire",
    description: "We compare multiple suppliers to secure competitive rates, handle all negotiations and paperwork on your behalf.",
    image: "/images/section2-2.jpeg",
    imageHeight: "h-[200px] lg:h-[200px]",
  },
  {
    number: 3,
    title: "Delivered fast",
    description: "Sit back while we coordinate delivery and setup. Your equipment arrives on time, ready to use.",
    image: "/images/section2-3.jpeg",
    imageHeight: "h-[200px] lg:h-[200px]",
  },
];

function StepCard({ number, title, description, image, imageHeight }) {
  return (
    <div>
      <span className="w-9 h-9 border-2 border-black rounded-full flex items-center justify-center text-sm font-medium">
        {number}
      </span>
      <p className="uppercase text-lg md:text-2xl font-semibold mt-4">{title}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
      <Image
        src={image}
        alt={title}
        width={1200}
        height={1200}
        className={`w-full ${imageHeight} object-cover mt-6 rounded-lg`}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="px-6 md:px-[100px] py-24 flex flex-col items-center justify-center">
      <h1>Equipment hire. Simplified.</h1>
      <p className="body-l mt-6 max-w-2xl">
        Connected to Australia's best hire suppliers. One place.
      </p>
      <p className="body-l mt-2 max-w-2xl">
        Every solution.
      </p>
      <div className="flex space-x-4 mt-6">
        <button className="bg-black text-white hover:bg-gray-800 transition-colors py-[14px] px-8 rounded-lg font-medium">
          Get a Quote
        </button>
        <button className="border-2 border-gray-300 rounded-lg py-[14px] px-8 font-medium hover:border-gray-400 transition-colors">
          Login
        </button>
      </div>
      <Image
        src="/images/homeSection1.png"
        alt="Equipment hire dashboard"
        width={1000}
        height={1000}
        className="w-full h-[600px] object-cover mt-14 rounded-lg"
      />
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 md:px-[100px] py-24 flex flex-col items-center justify-center">
      <h2>How it works</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 mt-12 w-full">
        {/* Left column - Step 1 */}
        <div className="flex-1">
          <StepCard {...steps[0]} />
        </div>
        
        {/* Right column - Steps 2 & 3 */}
        <div className="flex-1 flex flex-col gap-8">
          <StepCard {...steps[1]} />
          <StepCard {...steps[2]} />
        </div>
      </div>
    </section>
  );
}

const gear = [
  {
    id: 1,
    name: "VMS Board",
    image: "/images/gear-vms-board.jpg"
  },
  {
    id: 2,
    name: "Light Tower",
    image: "/images/gear-light-tower.jpg"
  },
  {
    id: 3,
    name: "Portable Traffic Lights",
    image: "/images/gear-vms-board.jpg"
  },
  {
    id: 4,
    name: "Excavator",
    image: "/images/gear-excavator.jpg"
  },
  {
    id: 5,
    name: "Forklifts",
    image: "/images/gear-forklift.jpg"
  },
  {
    id: 6,
    name: "Portabooms",
    image: "/images/gear-portaboom.jpg"
  },
  {
    id: 7,
    name: "Coolrooms",
    image: "/images/gear-coolroom.jpg"
  },
  {
    id: 8,
    name: "Scissors Lift",
    image: "/images/gear-scissors-lift.jpg"
  }
];

function FeaturedGear() {
  return (
    <section id="featured-gear" className="bg-white py-[60px] px-6 md:px-[100px]">
      <motion.h2 
        className="text-center mb-[60px] text-[#0A0A0A]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured gear
      </motion.h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gear.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="text-center group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <div className="overflow-hidden mb-4 rounded-lg group-hover:opacity-90 transition-opacity duration-300">
              <Image 
                src={item.image} 
                alt={item.name}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-[#0A0A0A] font-medium">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const reviewCards = [
  {
    type: 'review',
    rating: 5,
    quote: "Best equipment hire service in Sydney! Quick response, great prices, and the portal makes everything so easy. Highly recommend!",
    author: "Michael Thompson",
    timeAgo: "2 weeks ago"
  },
  {
    type: 'image',
    caption: "Professional equipment for every project",
    imageUrl: "/images/reviews-construction-site.jpg"
  },
  {
    type: 'faq',
    question: "How quickly can I get equipment?",
    answer: "Most equipment can be delivered within 24-48 hours. For urgent requests, we offer same-day delivery options across Sydney."
  },
  {
    type: 'stats',
    logo: "HireHub",
    stats: [
      { value: "800+", label: "equipment items" },
      { value: "5000+", label: "bookings completed" }
    ],
    cta: "Read the case study →"
  },
  {
    type: 'review',
    rating: 5,
    quote: "HireHub has transformed our construction projects. The real-time availability and competitive rates save us time and money on every job.",
    author: "James Chen",
    timeAgo: "1 month ago"
  },
  {
    type: 'image',
    caption: "Perfect solutions for events and functions",
    imageUrl: "/images/reviews-event-setup.jpg"
  },
  {
    type: 'faq',
    question: "What areas do you service?",
    answer: "We service all of Greater Sydney including CBD, Western Sydney, Northern Beaches, and surrounding areas. Delivery fees vary by location."
  },
  {
    type: 'review',
    rating: 5,
    quote: "Professional service from start to finish. The team is knowledgeable and the equipment is always in excellent condition.",
    author: "Sarah Mitchell",
    timeAgo: "3 weeks ago"
  },
  {
    type: 'stats',
    logo: "Sydney Hire",
    stats: [
      { value: "24/7", label: "booking access" },
      { value: "98%", label: "customer satisfaction" }
    ],
    cta: "Read the case study →"
  },
  {
    type: 'image',
    caption: "Reliable warehouse and storage solutions",
    imageUrl: "/images/reviews-warehouse.jpg"
  },
  {
    type: 'faq',
    question: "Do you offer insurance?",
    answer: "Yes, all equipment comes with comprehensive insurance coverage. Additional coverage options are available for high-value items."
  },
  {
    type: 'review',
    rating: 5,
    quote: "Amazing experience! Booked online, delivered on time, and pickup was seamless. Will definitely use again for future events.",
    author: "Emma Rodriguez",
    timeAgo: "5 days ago"
  },
  {
    type: 'image',
    caption: "How HireHub powers construction sites",
    imageUrl: "/images/reviews-construction-power.jpg"
  }
];

function ReviewsSection() {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="reviews" className="bg-white relative py-[60px] px-6 md:px-[100px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-[60px]">
        <motion.h2 
          className="text-left text-[#0A0A0A] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What everyone<br />is saying
        </motion.h2>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="font-bold text-[#0A0A0A] text-4xl md:text-[56px]">G</div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-[#0A0A0A] text-xl md:text-[28px]">5.0</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-[#FFC700] fill-[#FFC700]" />
                ))}
              </div>
            </div>
            <div className="text-[#666666] text-xs md:text-sm">Based on 9 reviews</div>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewCards.map((card, index) => (
            <motion.div
              key={index}
              className="shrink-0 rounded-3xl overflow-hidden shadow-lg cursor-pointer w-[300px] md:w-[380px] h-[380px] md:h-[420px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)", 
                transition: { duration: 0.2 } 
              }}
            >
              {card.type === 'review' && (
                <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xl leading-relaxed mb-6 text-white">{card.quote}</p>
                    <p className="text-white">{card.author}</p>
                    <p className="text-white/80 text-sm mt-1">{card.timeAgo}</p>
                  </div>
                </div>
              )}

              {card.type === 'faq' && (
                <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <p className="text-3xl leading-relaxed mb-6 text-white">{card.question}</p>
                    <p className="text-white/90 text-lg leading-relaxed">{card.answer}</p>
                  </div>
                </div>
              )}

              {card.type === 'image' && (
                <div className="relative h-full group">
                  <Image
                    src={card.imageUrl}
                    alt={card.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-white text-xl group-hover:text-yellow-400 transition-colors">{card.caption}</p>
                  </div>
                </div>
              )}

              {card.type === 'stats' && (
                <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="mb-8">
                      <div className="inline-block px-4 py-2 border-2 border-white/30 rounded-lg">
                        <span className="text-2xl tracking-wide text-white">{card.logo}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {card.stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-5xl mb-2 text-white">{stat.value}</div>
                          <div className="text-white/90 text-lg">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a href="#" className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 mt-6">
                    {card.cta}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10 border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10 border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

const companies = [
  { name: "SEM Hire", logo: "/images/companyLogo1.png" },
  { name: "Active Forklifts Australia", logo: "/images/companyLogo2.png" },
  { name: "AusHires", logo: "/images/companyLogo3.png" },
  { name: "Call 2 Hire", logo: "/images/companyLogo4.png" },
  { name: "Topflite", logo: "/images/companyLogo5.png" },
  { name: "Clark Equipment", logo: "/images/companyLogo6.png" },
  { name: "Allcott Hire", logo: "/images/companyLogo7.png" },
  { name: "RPM Hire", logo: "/images/companyLogo8.png" }
];

function CompanySlider() {
  // Duplicate the companies array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section id="companies" className="bg-white border-t border-b border-gray-200 overflow-hidden py-[60px] px-6 md:px-[100px]">
      <motion.h2 
        className="text-center mb-[60px] text-[#0A0A0A]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Trusted by industry leaders
      </motion.h2>
      
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center min-w-[200px]"
              >
                <Image 
                  src={company.logo} 
                  alt={company.name}
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [wantCallback, setWantCallback] = useState(false);
  const [wantEmail, setWantEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="bg-white py-[60px] px-6 md:px-[100px]">
      <motion.h2 
        className="text-center mb-6 text-[#0A0A0A]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact us
      </motion.h2>
      
      <motion.p 
        className="text-center max-w-2xl mx-auto text-[#666666] mb-[60px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a question or need equipment? Fill out the form below and we'll get back to you promptly.
      </motion.p>

      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
              <User className="w-4 h-4" />
              Name
            </label>
            <input 
              id="name" 
              type="text"
              placeholder="Your full name" 
              required 
              className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com" 
              required 
              className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
              <Phone className="w-4 h-4" />
              Phone
            </label>
            <input 
              id="phone" 
              type="tel" 
              placeholder="+61 XXX XXX XXX" 
              required
              className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="company" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
              <Building2 className="w-4 h-4" />
              Company
            </label>
            <input 
              id="company" 
              type="text"
              placeholder="Your company name" 
              className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="equipment" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
            <Package className="w-4 h-4" />
            Equipment Needed
          </label>
          <input 
            id="equipment" 
            type="text"
            placeholder="What equipment do you need?" 
            className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="flex items-center gap-2 mb-2 text-sm font-medium text-[#0A0A0A]">
            <MessageSquare className="w-4 h-4" />
            Message
          </label>
          <textarea 
            id="message" 
            placeholder="Tell us more about your requirements..." 
            rows={6}
            className="w-full p-3 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-[#0A0A0A] mb-3">How would you like us to contact you back?</p>
          
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={wantCallback}
                onChange={(e) => setWantCallback(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 accent-yellow-400"
              />
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-[#0A0A0A]">Call me back</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={wantEmail}
                onChange={(e) => setWantEmail(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 accent-yellow-400"
              />
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-[#0A0A0A]">Email me back</span>
            </label>
          </div>
        </div>

        <div className="text-center">
          <button 
            type="submit"
            className="bg-black text-white hover:bg-gray-800 transition-colors py-[14px] px-12 rounded-lg font-medium group inline-flex items-center gap-2"
          >
            Send message
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.form>
    </section>
  );
}

export function HomeLanding() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturedGear />
      <ReviewsSection />
      <CompanySlider />
      <ContactForm />
      <ScrollNavigator />
    </>
  );
}

