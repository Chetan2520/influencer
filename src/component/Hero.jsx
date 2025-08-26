import { motion } from "framer-motion";
import React from "react";

// Make sure this path is correct for your project structure
import heroImage from "/home.png";

const InfluencerHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="bg-white max-w-7xl mx-auto py-20 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          {/* Left Column: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-[#dd246e] sm:text-5xl lg:text-6xl"
            >
              Find the perfect
              <br />
              influencer / KOLs for
              <br />
              your campaign
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Connect with influencers / KOLs who share your brand's values and
              reach your target audience.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10">
              <button className="rounded-lg bg-[#dd246e] px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-[#c21a5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dd246e]">
                Browse Influencers/KOLs
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="flex items-center justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={heroImage}
              alt="Find the perfect influencer for your campaign"
              className="w-full max-w-xl rounded-lg"
            />
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-20 flex justify-center space-x-2.5">
          <span className="h-2 w-2 rounded-full bg-[#dd246e]"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default InfluencerHeroSection;
