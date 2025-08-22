import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

// --- Dummy Data for Influencer Cards ---
const influencers = [
  {
    id: 1,
    name: 'Catherine',
    image: 'user1.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
  {
    id: 2,
    name: 'Catherine',
    image: 'user2.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
  {
    id: 3,
    name: 'Catherine',
    image: 'user3.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
  {
    id: 4,
    name: 'Catherine',
    image: 'user4.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
  {
    id: 5,
    name: 'Catherine',
    image: 'user10.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
  {
    id: 6,
    name: 'Catherine',
    image: 'user11.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
  {
    id: 7,
    name: 'Catherine',
    image: 'user12.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
  {
    id: 8,
    name: 'Catherine',
    image: 'user13.png',
    instaFollowers: '1.2k followers',
    youtubeFollowers: '1.2k followers',
  },
];

// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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


// --- Main Component ---
const ComedyPage = () => {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="">
        {/* --- Breadcrumbs --- */}
        <motion.nav
          className="flex items-center justify-between "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 font-inter font-medium text-xs sm:text-[13px] leading-[100%] tracking-[0] text-[#D62976]">
            <span>Home</span>
            <span>›</span>
            <span>Comedy</span>
          </div>
        </motion.nav>

        {/* --- Hero Section --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-poppins font-bold text-[48px] leading-[62.4px] text-[#D62976] mb-6">
              Top Comedy<br /> Influencers in India
            </h1>

            <p className="font-Inter font-normal text-[24px] leading-[24px] text-[#00001E99]">
              Want to sprinkle some fun into your brand and give your audience a good laugh?
              Enter the world of Instagram comedians here to absolutely slay.
              <br />
              In India, comedy influencers have stormed the digital marketing scene with unstoppable energy.
              Massive fan followings, irresistibly engaging content, and sky-high consumption rates
              have turned these creators on Instagram and YouTube into a powerful marketing force
              that brands can’t ignore.
            </p>

          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <img src="/mobile.png" alt="Comedy Influencer Illustration" className="max-w-sm md:max-w-md" />
          </motion.div>
        </div>

        {/* --- Influencers Grid Section --- */}
        <div>
          <h2 className="font-Inter font-bold text-[24px] leading-[24px] text-[#242424] capitalize mb-2">
            Comedy Influencers
          </h2>

          <hr className="border-t-2 border-gray-200 mb-8" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {influencers.map((influencer) => (
              <motion.div
                key={influencer.id}
                className="bg-[#F3F9FF] rounded-2xl p-4 w-full max-w-[256px] sm:w-[90%] md:w-full h-auto shadow-lg flex flex-col"
                variants={itemVariants}
              >
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="w-[208px] h-[208px] sm:w-[150px] sm:h-[150px] md:w-[208px] md:h-[208px] aspect-square object-cover rounded-xl mb-4 self-center"
                />

                <h3 className="font-poppins ml-2 font-semibold text-[24px] leading-[24px] text-[#626262] mb-4 text-center sm:text-left">
                  {influencer.name}
                </h3>

                <div className="space-y-2 ml-2 w-full flex flex-col items-start">
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
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ComedyPage;

