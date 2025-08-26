import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const testimonials = [
  {
    id: 1,
    quote: "Effortless campaign management, quality influencers. Highly recommended.",
    name: "Jaida Barton",
    title: "Marketing Head @ Alpha Inc.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 2,
    quote: "Streamlined searches, transparent pricing, top-notch influencers. A must-have tool for brands.",
    name: "Alex Rodriguez",
    title: "Founder @ Creative Co.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    quote: "Game-changer! Found perfect influencers effortlessly, smooth collaboration from start to finish.",
    name: "Sarah Chen",
    title: "Social Media Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    quote: "The analytics are incredibly detailed, helping us track ROI effectively. We've seen a 200% increase in engagement.",
    name: "David Lee",
    title: "CEO @ Tech Innovators",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 5,
    quote: "An indispensable tool for our marketing team. The platform is intuitive and the support is outstanding.",
    name: "Maria Garcia",
    title: "CMO @ StyleHub",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 6,
    quote: "Connecting with authentic influencers has never been easier. This platform truly understands the creator economy.",
    name: "Michael Brown",
    title: "Brand Strategist",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    id: 7,
    quote: "We launched our most successful campaign to date using this platform. The results speak for themselves.",
    name: "Emily White",
    title: "E-commerce Specialist",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg",
  },
  {
    id: 8,
    quote: "From discovery to payment, every step is seamless. It has saved us countless hours of manual work.",
    name: "James Taylor",
    title: "Product Manager @ Gadget Corp",
    avatar: "https://randomuser.me/api/portraits/men/94.jpg",
  },
];

// --- FRAMER MOTION VARIANTS ---
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// --- SVG ICONS ---
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-pink-500"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

const Arrow = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md transition-transform hover:scale-110 ${
        direction === 'left' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-gray-600"
      >
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        )}
      </svg>
    </button>
  );


// --- MAIN COMPONENT ---
export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Wraps the index to create an infinite loop
  const testimonialIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="w-full py-16 bg-white sm:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            What people <span className="text-pink-500">are saying</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from real customers.
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center max-w-2xl mx-auto h-96">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full px-8"
            >
              <div className="relative">
                {/* Speech Bubble Card */}
                <div className="p-8 bg-gray-100 rounded-3xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (<StarIcon key={i} />))}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                </div>
                {/* Speech Bubble Pointer */}
                <div className="absolute left-12 w-6 h-6 bg-gray-100 transform rotate-45 -bottom-3"></div>

                {/* Author Info */}
                <div className="flex items-center mt-8 ml-4">
                  <img
                    src={testimonials[testimonialIndex].avatar}
                    alt={testimonials[testimonialIndex].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonials[testimonialIndex].name}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[testimonialIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <Arrow direction="left" onClick={() => paginate(-1)} />
          <Arrow direction="right" onClick={() => paginate(1)} />
        </div>
      </div>
    </section>
  );
}
