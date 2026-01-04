// Category data - easily extendable for new categories
export const categoryData = {
  "retail-hire": {
    title: "Retail Hire",
    description: "Discover the latest retail equipment available for hire.",
    subcategories: [
      {
        id: 1,
        name: "VMS Boards",
        image: "/images/retail-vms-boards.jpg",
        link: "/categories/retail-hire/vms-boards"
      },
      {
        id: 2,
        name: "Video Boards",
        image: "/images/retail-video-boards.jpg",
        link: "/categories/retail-hire/video-boards"
      },
      {
        id: 3,
        name: "Generators",
        image: "/images/retail-generators.jpg",
        link: "/categories/retail-hire/generators"
      },
      {
        id: 4,
        name: "Portable AC",
        image: "/images/retail-portable-ac.jpg",
        link: "/categories/retail-hire/portable-ac"
      },
      {
        id: 5,
        name: "Forklift",
        image: "/images/retail-forklift.jpg",
        link: "/categories/retail-hire/forklift"
      }
    ]
  },
  "general-hire": {
    title: "General Hire",
    description: "Discover the latest general equipment available for hire.",
    subcategories: [
      {
        id: 1,
        name: "Wheelbarrow",
        image: "/images/general-wheelbarrow.jpg",
        link: "/categories/general-hire/wheelbarrow"
      },
      {
        id: 2,
        name: "Ladder",
        image: "/images/general-ladder.jpg",
        link: "/categories/general-hire/ladder"
      },
      {
        id: 3,
        name: "Grinders",
        image: "/images/general-grinders.jpg",
        link: "/categories/general-hire/grinders"
      },
      {
        id: 4,
        name: "Jack Hammer",
        image: "/images/general-jackhammer.jpg",
        link: "/categories/general-hire/jack-hammer"
      }
    ]
  },
  "traffic-light": {
    title: "Traffic Hire",
    description: "Discover the latest traffic management equipment available for hire.",
    subcategories: [
      {
        id: 1,
        name: "VMS Boards",
        image: "/images/traffic-vms-boards.jpg",
        link: "/categories/traffic-light/vms-boards"
      },
      {
        id: 2,
        name: "Lighting Towers",
        image: "/images/traffic-lighting-towers.jpg",
        link: "/categories/traffic-light/lighting-towers"
      },
      {
        id: 3,
        name: "Portable Traffic Lights",
        image: "/images/traffic-portable-lights.jpg",
        link: "/categories/traffic-light/portable-traffic-lights"
      },
      {
        id: 4,
        name: "Portabooms",
        image: "/images/traffic-portabooms.jpg",
        link: "/categories/traffic-light/portabooms"
      },
      {
        id: 5,
        name: "Road Plates",
        image: "/images/traffic-road-plates.jpg",
        link: "/categories/traffic-light/road-plates"
      },
      {
        id: 6,
        name: "Water-filled Barriers",
        image: "/images/traffic-water-barriers.jpg",
        link: "/categories/traffic-light/water-filled-barriers"
      },
      {
        id: 7,
        name: "Concrete Barriers",
        image: "/images/traffic-concrete-barriers.jpg",
        link: "/categories/traffic-light/concrete-barriers"
      },
      {
        id: 8,
        name: "Trailer Mounted Portable Toilets",
        image: "/images/traffic-portable-toilets.jpg",
        link: "/categories/traffic-light/trailer-mounted-portable-toilets"
      }
    ]
  },
  "construction-hire": {
    title: "Construction Hire",
    description: "Professional construction equipment for your projects.",
    subcategories: []  // To be filled later
  },
  "access-hire": {
    title: "Access Hire",
    description: "Aerial work platforms and access equipment for hire.",
    subcategories: []  // To be filled later
  },
  "events-hire": {
    title: "Events Hire",
    description: "Everything you need for your next event.",
    subcategories: []  // To be filled later
  }
};

// Default related products for subcategory pages
export const defaultRelatedProducts = [
  {
    name: "Excavator",
    image: "/images/related-excavator.jpg",
    link: "/categories/construction-hire"
  },
  {
    name: "Scissor Lift",
    image: "/images/related-scissorlift.jpg",
    link: "/categories/access-hire"
  },
  {
    name: "Forklift",
    image: "/images/related-forklift.jpg",
    link: "/categories/general-hire"
  },
  {
    name: "Generator",
    image: "/images/related-generator.jpg",
    link: "/categories/construction-hire"
  }
];

export function getCategoryBySlug(slug) {
  return categoryData[slug] || null;
}

export function getAllCategorySlugs() {
  return Object.keys(categoryData);
}

export function getSubcategoryBySlug(categorySlug, subcategorySlug) {
  const category = categoryData[categorySlug];
  if (!category) return null;
  
  // Convert subcategory slug to match (e.g., "vms-boards" matches link ending)
  const subcategory = category.subcategories.find(sub => {
    const linkSlug = sub.link.split('/').pop();
    return linkSlug === subcategorySlug;
  });
  
  if (!subcategory) return null;
  
  return {
    ...subcategory,
    categoryTitle: category.title,
    categorySlug: categorySlug
  };
}

