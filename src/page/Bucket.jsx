import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MessageCircle, Share2 } from 'lucide-react';
import FeaturedInfluencers from '../component/Feature';

const InfluencerMarketplace = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredInfluencer, setHoveredInfluencer] = useState(null);

    const categories = [
        { name: 'Automobile', image: 'img1.png' },
        { name: 'Beauty & Lifestyle', image: 'img2.png', color: 'from-pink-100 to-orange-100' },
        { name: 'Comedy', image: 'img3.png', color: 'from-orange-200 to-red-200' },
        { name: 'Education', image: 'img4.png', color: 'from-yellow-50 to-yellow-100' },
        { name: 'Fashion & Lifestyle', image: 'img5.png', color: 'from-pink-50 to-pink-100' },
        { name: 'Finance', image: 'img6.png', color: 'from-teal-200 to-teal-300' },
        { name: 'Fitness', image: 'img7.png', color: 'from-orange-50 to-orange-100' },
        { name: 'Food', image: 'img8.png', color: 'from-yellow-50 to-orange-50' },
        { name: 'Gaming', image: 'img9.png', color: 'from-teal-200 to-teal-400' },
        { name: 'Parenting', image: 'img10.png', color: 'from-pink-50 to-pink-100' },
        { name: 'Tech', image: 'img11.png', color: 'from-gray-50 to-gray-100' },
        { name: 'Travel', image: 'img12.png', color: 'from-orange-100 to-orange-200' }
    ];

    const featuredInfluencers = [
        { name: 'Catherine', age: '21 years old', image: 'use1.png', verified: false, category: 'Lifestyle' },
        { name: 'Catherine', age: '27 years old', image: 'use2.png', verified: false, category: 'Beauty' },
        { name: 'Catherine', age: '27 years old', image: 'use3.png', verified: true, category: 'Fashion' },
        { name: 'Catherine', age: '27 years old', image: 'use4.png', verified: false, category: 'Travel' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const heroVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-white max-w-7xl mx-auto">
            {/* Navigation */}
            <motion.nav
                className="flex items-center justify-between p-4 md:p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center space-x-2 font-inter font-medium text-[18px] sm:text-[18px    ] leading-[100%] tracking-[0] text-[#D62976]">
                    <span>Home</span>
                    <span>›</span>
                    <span>Bucket</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.section
                className="relative px-4 md:px-6 mb-8 md:mb-16"
                variants={heroVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <img
                            src="bucket.png"
                            alt="Influencers background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Hero content */}
                    <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl mx-auto">
                        <motion.h1
                            className="font-inter font-black text-2xl sm:text-3xl md:text-[48px] leading-tight sm:leading-[50px] md:leading-[60px] tracking-[-0.05em] text-center mb-3 sm:mb-4 md:mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Find the Perfect Influencer for Your Brand
                        </motion.h1>

                        <motion.p
                            className="font-inter font-normal text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[24px] tracking-[0px] text-center text-gray-200 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Connect with top creators across various categories to amplify your brand's reach and impact.
                        </motion.p>

                        <motion.button
                            className="w-full sm:w-[192px] h-[44px] sm:h-[48px] min-w-[84px] max-w-[480px] bg-[#D9267A] cursor-pointer hover:from-pink-600 hover:to-pink-700 
                            text-center text-white font-inter font-bold text-sm sm:text-[16px] leading-[24px] tracking-[0px] 
                            px-4 sm:px-5 rounded-[12px] opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Influencers
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            {/* Categories Section */}
            <section className="px-4 md:px-6 mb-8 md:mb-16">
                <motion.h2
                    className="font-inter font-bold text-lg sm:text-xl md:text-[24px] leading-[100%] tracking-[0] capitalize 
             text-gray-900 mb-4 sm:mb-6 md:mb-8 border-b border-gray-200 pb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Browse Influencer Categories
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            className="flex flex-col items-center group cursor-pointer"
                            variants={itemVariants}
                            onHoverStart={() => setHoveredCategory(index)}
                            onHoverEnd={() => setHoveredCategory(null)}
                        >
                            <motion.div
                                className="relative rounded-xl p-2 sm:p-3 md:p-4 overflow-hidden flex items-center justify-center w-full max-w-[310px] aspect-square"
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="relative z-10 flex items-center justify-center w-full h-full"
                                    animate={{
                                        scale: hoveredCategory === index ? 1.1 : 1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </motion.div>
                            </motion.div>

                            <h3 className="font-['Inter'] font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[24px] tracking-[0] text-[#171214] text-center mt-2 sm:mt-3 px-2">
                                {category.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Featured Influencers Section */}
            <FeaturedInfluencers />
        </div>
    );
};

export default InfluencerMarketplace;