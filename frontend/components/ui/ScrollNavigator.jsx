"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function ScrollNavigator() {
  const [currentSection, setCurrentSection] = useState(0);
  
  // Define section IDs in order
  const sections = [
    "hero",
    "how-it-works", 
    "featured-gear",
    "reviews",
    "companies",
    "contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Determine current section based on scroll position
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (sectionElements[i].offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (direction) => {
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
    
    if (direction === "up" && currentSection > 0) {
      sectionElements[currentSection - 1]?.scrollIntoView({ behavior: "smooth" });
    } else if (direction === "down" && currentSection < sectionElements.length - 1) {
      sectionElements[currentSection + 1]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      <motion.button
        onClick={() => scrollToSection("up")}
        className={`p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors ${
          currentSection === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        whileHover={currentSection !== 0 ? { scale: 1.1 } : {}}
        whileTap={currentSection !== 0 ? { scale: 0.9 } : {}}
        disabled={currentSection === 0}
        aria-label="Scroll to previous section"
      >
        <ChevronUp className="w-4 h-4 text-black" />
      </motion.button>
      <motion.button
        onClick={() => scrollToSection("down")}
        className={`p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors ${
          currentSection === sections.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        whileHover={currentSection !== sections.length - 1 ? { scale: 1.1 } : {}}
        whileTap={currentSection !== sections.length - 1 ? { scale: 0.9 } : {}}
        disabled={currentSection === sections.length - 1}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-4 h-4 text-black" />
      </motion.button>
    </div>
  );
}
