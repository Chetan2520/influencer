import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

// --- Data for the video cards ---
// Now includes a 'description' field for the text below each card.
const videos = [
    {
        id: 1,
        imageUrl: 'user6.png',
        platform: 'facebook',
        description: 'Experience the inspiring story of Green, a YouTube sensation!',
    },
    {
        id: 2,
        imageUrl: 'user5.png',
        platform: 'instagram',
        description: 'Experience the inspiring story of Green, a YouTube sensation!',
    },
    {
        id: 3,
        imageUrl: 'user7.png',
        platform: 'instagram',
        description: 'Experience the inspiring story of Green, a YouTube sensation!',
    },
    {
        id: 4,
        imageUrl: 'user7.png',
        platform: 'instagram',
        description: 'Experience the inspiring story of Green, a YouTube sensation!',
    },
    {
        id: 5,
        imageUrl: 'user8.png',
        platform: 'facebook',
        description: 'Experience the inspiring story of Green, a YouTube sensation!',
    },
    {
        id: 6,
        imageUrl: 'user9.png',
        platform: 'instagram',
        description: 'Experience the inspiring story of Green, a YouTube sensation!',
    },
];

const FacebookSVG = () => (
    <svg
        width="58"
        height="59"
        viewBox="0 0 58 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <ellipse cx="28.9933" cy="29.8656" rx="28.9933" ry="28.9933" fill="#1674EA" />
        <path
            d="M36.2417 17.7852H32.6176C31.0156 17.7852 29.4792 18.4215 28.3464 19.5543C27.2137 20.6871 26.5773 22.2234 26.5773 23.8254V27.4496H22.9531V32.2818H26.5773V41.9462H31.4095V32.2818H35.0337L36.2417 27.4496H31.4095V23.8254C31.4095 23.505 31.5368 23.1978 31.7633 22.9712C31.9899 22.7446 32.2972 22.6174 32.6176 22.6174H36.2417V17.7852Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const InstagramSVG = () => (
    <svg
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <ellipse cx="29.9635" cy="29.9749" rx="28.9933" ry="28.9933" fill="#FF186D" />
        <path
            d="M37.5936 14.7152H22.3339C18.1201 14.7152 14.7041 18.1312 14.7041 22.345V37.6047C14.7041 41.8185 18.1201 45.2345 22.3339 45.2345H37.5936C41.8074 45.2345 45.2234 41.8185 45.2234 37.6047V22.345C45.2234 18.1312 41.8074 14.7152 37.5936 14.7152Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M36.068 29.0136C36.2563 30.2836 36.0394 31.5806 35.4481 32.7202C34.8567 33.8597 33.9212 34.7839 32.7744 35.3611C31.6276 35.9383 30.328 36.1392 29.0604 35.9352C27.7929 35.7313 26.6219 35.1328 25.7141 34.225C24.8062 33.3172 24.2078 32.1462 24.0038 30.8786C23.7998 29.6111 24.0007 28.3115 24.578 27.1647C25.1552 26.0179 26.0793 25.0823 27.2189 24.491C28.3585 23.8997 29.6555 23.6828 30.9255 23.8711C32.2209 24.0632 33.4202 24.6668 34.3462 25.5928C35.2722 26.5189 35.8759 27.7182 36.068 29.0136Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M38.3569 21.582H38.3729"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const SocialIcon = ({ platform }) => {
    const icons = {
        facebook: FacebookSVG,
        instagram: InstagramSVG,
    };

    const Icon = icons[platform];
    if (!Icon) return null;

    return (
        <div
            className={`absolute -left-4 -bottom-2 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-white  shadow-lg`}
        >
            <Icon size={20} />
        </div>

    );
};

// --- Framer Motion Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

// --- Main Video Gallery Component ---
const VideoGallery = () => {
    return (
        <div className="min-h-screen bg-white font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="flex justify-between items-center mb-8 border-b-2 border-gray-200">
                    <h1 className="font-['Inter'] font-bold text-[24px] leading-none capitalize text-[#242424]">
                        Videos
                    </h1>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-[135px] h-[44px] bg-[#D62976] cursor-pointer text-white font-['Inter'] font-semibold rounded-[16px] py-[9px] px-[23px] mb-2 shadow-lg hover:bg-pink-600 transition-colors duration-300"
                    >
                        Show More
                    </motion.button>

                </header>

                {/* Video Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-30"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {videos.map((video) => (
                        <motion.div key={video.id} variants={itemVariants}>
                            {/* Image Container with hover effects */}
                            <motion.div
                                className="relative rounded-2xl shadow-xl cursor-pointer group w-[325px] h-[417px]"
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <img
                                    src={video.imageUrl}
                                    alt={`Video thumbnail ${video.id}`}
                                    className="w-[325px] h-[417px] object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <SocialIcon platform={video.platform} />
                                <motion.p
                                    className="mt-4 text-left text-[#000000] font-['Inter'] font-sans text-[23px] leading-[36px] px-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {video.description}
                                </motion.p>

                            </motion.div>


                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default VideoGallery;
