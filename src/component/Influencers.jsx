import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

// --- MOCK DATA ---
// Added unique follower counts for each influencer
const influencersData = [
    { id: 1, name: 'Catherine', city: 'Agra', category: 'Fashion', img: '/user1.png', instaFollowers: '1.2k followers', youtubeFollowers: '2.5k followers' },
    { id: 2, name: 'Isabella', city: 'Mumbai', category: 'Travel', img: '/user2.png', instaFollowers: '3.1k followers', youtubeFollowers: '1.8k followers' },
    { id: 3, name: 'Sophia', city: 'Delhi', category: 'Food', img: '/user3.png', instaFollowers: '5.8k followers', youtubeFollowers: '4.2k followers' },
    { id: 4, name: 'Olivia', city: 'Agra', category: 'Beauty', img: '/user4.png', instaFollowers: '10.5k followers', youtubeFollowers: '7.3k followers' },
    { id: 5, name: 'Emily', city: 'Bangalore', category: 'Tech', img: '/user10.png', instaFollowers: '8.9k followers', youtubeFollowers: '12.1k followers' },
    { id: 6, name: 'Chloe', city: 'Mumbai', category: 'Fashion', img: '/user11.png', instaFollowers: '4.6k followers', youtubeFollowers: '3.9k followers' },
    { id: 7, name: 'Grace', city: 'Delhi', category: 'Travel', img: '/user12.png', instaFollowers: '7.2k followers', youtubeFollowers: '9.1k followers' },
    { id: 8, name: 'Lily', city: 'Bangalore', category: 'Food', img: '/user13.png', instaFollowers: '22.4k followers', youtubeFollowers: '15.6k followers' },
    { id: 9, name: 'Zoe', city: 'Agra', category: 'Tech', img: '/user1.png', instaFollowers: '1.5k followers', youtubeFollowers: '1.1k followers' },
    { id: 10, name: 'Ava', city: 'Mumbai', category: 'Beauty', img: '/user10.png', instaFollowers: '18.7k followers', youtubeFollowers: '14.3k followers' },
    { id: 11, name: 'Mia', city: 'Delhi', category: 'Fashion', img: '/user11.png', instaFollowers: '9.3k followers', youtubeFollowers: '6.7k followers' },
    { id: 12, name: 'Nora', city: 'Bangalore', category: 'Travel', img: '/user12.png', instaFollowers: '11.2k followers', youtubeFollowers: '8.8k followers' },
];


const cities = ['All Cities', 'Agra', 'Mumbai', 'Delhi', 'Bangalore'];
const categories = ['All Categories', 'Fashion', 'Travel', 'Food', 'Beauty', 'Tech'];

const InstagramSVG = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" fill="#FF186D" />
        <path d="M18.9476 7.10535H11.0528C8.87277 7.10535 7.10547 8.87264 7.10547 11.0527V18.9475C7.10547 21.1275 8.87277 22.8948 11.0528 22.8948H18.9476C21.1276 22.8948 22.8949 21.1275 22.8949 18.9475V11.0527C22.8949 8.87264 21.1276 7.10535 18.9476 7.10535Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.1576 14.5027C18.255 15.1597 18.1428 15.8307 17.8369 16.4203C17.531 17.0099 17.0469 17.488 16.4536 17.7866C15.8603 18.0853 15.188 18.1892 14.5322 18.0837C13.8764 17.9781 13.2706 17.6685 12.8009 17.1989C12.3312 16.7292 12.0216 16.1234 11.9161 15.4676C11.8106 14.8118 11.9145 14.1394 12.2131 13.5461C12.5118 12.9528 12.9899 12.4688 13.5794 12.1629C14.169 11.8569 14.84 11.7447 15.4971 11.8421C16.1673 11.9415 16.7878 12.2538 17.2668 12.7329C17.7459 13.212 18.0582 13.8325 18.1576 14.5027Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.3418 10.658H19.3497" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const YoutubeSVG = () => (
    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.3019 3.49479C32.0039 5.90104 32.0039 11.0573 32.0039 11.0573C32.0039 11.0573 32.0039 16.1562 31.3019 18.6198C30.9509 19.9948 29.8394 21.026 28.4939 21.3698C25.9783 22 16.0332 22 16.0332 22C16.0332 22 6.0295 22 3.51396 21.3698C2.16844 21.026 1.05692 19.9948 0.705917 18.6198C0.00390625 16.1562 0.00390625 11.0573 0.00390625 11.0573C0.00390625 11.0573 0.00390625 5.90104 0.705917 3.49479C1.05692 2.11979 2.16844 1.03125 3.51396 0.6875C6.0295 0 16.0332 0 16.0332 0C16.0332 0 25.9783 0 28.4939 0.6875C29.8394 1.03125 30.9509 2.11979 31.3019 3.49479ZM12.7571 15.6979L21.0642 11.0573L12.7571 6.41667V15.6979Z" fill="#EA252C" />
    </svg>
);
// --- COMPONENTS ---

// 1. Influencer Card Component (Updated Design)
const InfluencerCard = ({ influencer }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-[#F3F9FF] rounded-2xl p-4 w-full max-w-[256px] sm:w-[90%] md:w-full h-auto shadow-lg flex flex-col"
        >
            <img
                src={influencer.img}
                alt={influencer.name}
                className="w-[208px] h-[208px] sm:w-[150px] sm:h-[150px] md:w-[208px] md:h-[208px] aspect-square object-cover rounded-xl mb-4 self-center"
            />
            <h3 className="font-poppins ml-2 font-semibold text-[24px] leading-[24px] text-[#626262] mb-4 text-center sm:text-left">
                {influencer.name}
            </h3>

            <div className="space-y-2 ml-2 w-full flex flex-col items-start -mt-4">
                <div className="flex items-center my-2 text-[#667085] text-[16px] leading-6 font-normal font-inter">
                    <FiMapPin className="mr-2" />
                    <span>{influencer.city}</span>
                </div>

                <div className="flex items-center gap-2">
                    <InstagramSVG className="w-6 h-6" />
                    <span className="font-Inter cursor-pointer font-semibold text-[16px] leading-[24px] text-[#1D1F22] align-middle">
                        {influencer.instaFollowers}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <YoutubeSVG className="w-6 h-6" />
                    <span className="font-Inter cursor-pointer font-semibold text-[16px] leading-[24px] text-[#1D1F22] align-middle">
                        {influencer.youtubeFollowers}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};


// 2. Filters Component
const Filters = ({ filters, setFilters }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* City Select */}
            <div className="relative">
                <select
                    value={filters.city}
                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    className="w-full bg-[#F3F9FF] cursor-pointer text-gray-700 py-3 px-4 pr-10 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#B5DAFF] border border-[#B5DAFF]"
                >
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Category Select */}
            <div className="relative">
                <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full bg-[#F3F9FF] cursor-pointer text-gray-700 py-3 px-4 pr-10 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#B5DAFF] border border-[#B5DAFF]"
                >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Search Input */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search influencer"
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    className="w-full bg-[#F3F9FF] text-gray-700 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5DAFF] border border-[#B5DAFF]"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
        </div>
    );
};

// 3. Main Page Component
const InfluencersPage = () => {
    const [filters, setFilters] = useState({
        city: 'All Cities',
        category: 'All Categories',
        search: '',
    });

    const filteredInfluencers = useMemo(() => {
        return influencersData.filter(influencer => {
            const searchMatch = influencer.name.toLowerCase().includes(filters.search.toLowerCase());
            const cityMatch = filters.city === 'All Cities' || influencer.city === filters.city;
            const categoryMatch = filters.category === 'All Categories' || influencer.category === filters.category;
            return searchMatch && cityMatch && categoryMatch;
        });
    }, [filters]);

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="max-w-7xl mx-auto bg-white">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-[48px] leading-[62.4px] font-bold font-poppins text-center text-[#D62976] mb-12"
                >
                    Find Influencers
                </motion.h1>


                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <Filters filters={filters} setFilters={setFilters} />
                </motion.div>

                {/* Influencers Grid */}
                <div className="p-4 sm:p-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-[48px] leading-[62.4px] font-bold font-poppins text-center text-[#D62976] mb-12"
                    >
                        Top Influencers
                    </motion.h2>

                    <motion.div
                        variants={gridContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        <AnimatePresence>
                            {filteredInfluencers.length > 0 ? (
                                filteredInfluencers.map(influencer => (
                                    <InfluencerCard key={influencer.id} influencer={influencer} />
                                ))
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-full text-center text-gray-500 py-10"
                                >
                                    No influencers found. Try adjusting your filters!
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Footer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-20 grid md:grid-cols-2 gap-12 text-[#626262] "
                >
                    <div>
                        <h3 className="text-[30px] leading-[40px] font-bold font-poppins text-[#D62976] mb-4">
                            Influencer Marketing Agency
                        </h3>

                        <p className="text-[16px] leading-[28px] tracking-[0.01em] font-normal font-inter mb-6">
                            You are aware that influencer marketing can support your business but you don't really know how to leverage it. Our Influencer Marketing Agency supports our clients from A-Z creating influencer marketing campaigns that are effective.
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[15px] leading-[100%] font-medium cursor-pointer font-inter text-center text-[#D62976] hover:text-[#D62976] transition-colors"
                        >
                            CONTACT US
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_102_4649)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.75 8C14.75 9.79021 14.0388 11.5071 12.773 12.773C11.5071 14.0388 9.79021 14.75 8 14.75C6.20979 14.75 4.4929 14.0388 3.22703 12.773C1.96116 11.5071 1.25 9.79021 1.25 8C1.25 6.20979 1.96116 4.4929 3.22703 3.22703C4.4929 1.96116 6.20979 1.25 8 1.25C9.79021 1.25 11.5071 1.96116 12.773 3.22703C14.0388 4.4929 14.75 6.20979 14.75 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM7.47 5.53L9.19 7.25H4V8.75H9.19L7.47 10.47L8.53 11.53L11.53 8.53C11.6705 8.38937 11.7493 8.19875 11.7493 8C11.7493 7.80125 11.6705 7.61063 11.53 7.47L8.53 4.47L7.47 5.53Z"
                                        fill="#D62976"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_102_4649">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                    </div>
                    <div>
                        <h3 className="text-[30px] leading-[40px] font-bold font-poppins text-[#D62976] mb-4">Social Media Campaigns</h3>
                        <p className="text-[16px] leading-[28px] tracking-[0.01em] font-normal font-inter mb-6">
                            As a global Influencer Marketing Agency, we create the most authentic, scalable and ROI-oriented social media influencer campaigns for amazing brands on TikTok, Instagram and YouTube.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[15px] leading-[100%] font-medium cursor-pointer font-inter text-center text-[#D62976] hover:text-[#D62976] transition-colors"
                        >
                            OUR WORKS
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_102_4649)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.75 8C14.75 9.79021 14.0388 11.5071 12.773 12.773C11.5071 14.0388 9.79021 14.75 8 14.75C6.20979 14.75 4.4929 14.0388 3.22703 12.773C1.96116 11.5071 1.25 9.79021 1.25 8C1.25 6.20979 1.96116 4.4929 3.22703 3.22703C4.4929 1.96116 6.20979 1.25 8 1.25C9.79021 1.25 11.5071 1.96116 12.773 3.22703C14.0388 4.4929 14.75 6.20979 14.75 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM7.47 5.53L9.19 7.25H4V8.75H9.19L7.47 10.47L8.53 11.53L11.53 8.53C11.6705 8.38937 11.7493 8.19875 11.7493 8C11.7493 7.80125 11.6705 7.61063 11.53 7.47L8.53 4.47L7.47 5.53Z"
                                        fill="#D62976"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_102_4649">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InfluencersPage;
