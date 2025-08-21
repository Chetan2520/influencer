import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

const influencers = [
    {
        name: "Catherine",
        age: 27,
        country: "Japan",
        flag: "🇯🇵",
        badge: (
            <span className="inline-flex items-center ml-2">
                <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                >
                    <path
                        d="M23.6713 7.81949L20.1436 2.40449C19.728 1.57199 18.4844 1.15649 17.6547 1.15649H6.44666C5.61704 1.15649 4.37186 1.78049 3.9578 2.40449L0.433037 7.81949C0.0174797 8.65199 0.0174797 9.69299 0.64231 10.3185L11.0163 21.3525C11.6381 21.9795 12.4677 21.7695 13.0896 21.3525L23.4636 10.3185C24.0884 9.69299 24.2947 8.44349 23.6728 7.81949H23.6713ZM18.2766 6.15449L12.4663 15.5235H9.56184L8.52295 6.98549C8.52295 6.56849 8.31666 6.36149 8.31666 6.15449C8.10739 5.94449 7.90111 5.94449 7.69333 5.94449L7.9026 5.52899H10.5977C10.804 5.52899 11.0133 5.52899 11.2196 5.73899C11.4289 5.94449 11.4289 6.15449 11.4289 6.36149L12.0492 12.399L15.1629 6.77699V6.35999C15.1629 6.15299 15.1629 6.15299 14.9551 5.94299C14.7458 5.94299 14.7458 5.73599 14.541 5.73599L14.7473 5.31899H17.8595C18.0658 5.31899 18.2751 5.31899 18.2751 5.52749C18.2751 5.73749 18.4814 5.94299 18.2751 6.15299H18.2766V6.15449Z"
                        fill="url(#paint0_linear_263_4713)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_263_4713"
                            x1="12.096"
                            y1="1.15649"
                            x2="12.096"
                            y2="21.7479"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#637F97" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        ),
        image: "user1.png",
        topPick: false,
    },
    {
        name: "Catherine",
        age: 27,
        country: "Japan",
        flag: "🇯🇵",
        badge: (
            <span className="inline-flex items-center ml-2">
                <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                >
                    <path
                        d="M23.6713 7.81949L20.1436 2.40449C19.728 1.57199 18.4844 1.15649 17.6547 1.15649H6.44666C5.61704 1.15649 4.37186 1.78049 3.9578 2.40449L0.433037 7.81949C0.0174797 8.65199 0.0174797 9.69299 0.64231 10.3185L11.0163 21.3525C11.6381 21.9795 12.4677 21.7695 13.0896 21.3525L23.4636 10.3185C24.0884 9.69299 24.2947 8.44349 23.6728 7.81949H23.6713ZM18.2766 6.15449L12.4663 15.5235H9.56184L8.52295 6.98549C8.52295 6.56849 8.31666 6.36149 8.31666 6.15449C8.10739 5.94449 7.90111 5.94449 7.69333 5.94449L7.9026 5.52899H10.5977C10.804 5.52899 11.0133 5.52899 11.2196 5.73899C11.4289 5.94449 11.4289 6.15449 11.4289 6.36149L12.0492 12.399L15.1629 6.77699V6.35999C15.1629 6.15299 15.1629 6.15299 14.9551 5.94299C14.7458 5.94299 14.7458 5.73599 14.541 5.73599L14.7473 5.31899H17.8595C18.0658 5.31899 18.2751 5.31899 18.2751 5.52749C18.2751 5.73749 18.4814 5.94299 18.2751 6.15299H18.2766V6.15449Z"
                        fill="url(#paint0_linear_263_4713)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_263_4713"
                            x1="12.096"
                            y1="1.15649"
                            x2="12.096"
                            y2="21.7479"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#637F97" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        ),
        image: "user2.png",
        topPick: false,
    },
    {
        name: "Catherine",
        age: 27,
        country: "Japan",
        flag: "🇯🇵",
        badge: (
            <span className="inline-flex items-center ml-2">
                <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                >
                    <path
                        d="M23.6713 7.81949L20.1436 2.40449C19.728 1.57199 18.4844 1.15649 17.6547 1.15649H6.44666C5.61704 1.15649 4.37186 1.78049 3.9578 2.40449L0.433037 7.81949C0.0174797 8.65199 0.0174797 9.69299 0.64231 10.3185L11.0163 21.3525C11.6381 21.9795 12.4677 21.7695 13.0896 21.3525L23.4636 10.3185C24.0884 9.69299 24.2947 8.44349 23.6728 7.81949H23.6713ZM18.2766 6.15449L12.4663 15.5235H9.56184L8.52295 6.98549C8.52295 6.56849 8.31666 6.36149 8.31666 6.15449C8.10739 5.94449 7.90111 5.94449 7.69333 5.94449L7.9026 5.52899H10.5977C10.804 5.52899 11.0133 5.52899 11.2196 5.73899C11.4289 5.94449 11.4289 6.15449 11.4289 6.36149L12.0492 12.399L15.1629 6.77699V6.35999C15.1629 6.15299 15.1629 6.15299 14.9551 5.94299C14.7458 5.94299 14.7458 5.73599 14.541 5.73599L14.7473 5.31899H17.8595C18.0658 5.31899 18.2751 5.31899 18.2751 5.52749C18.2751 5.73749 18.4814 5.94299 18.2751 6.15299H18.2766V6.15449Z"
                        fill="url(#paint0_linear_263_5029)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_263_5029"
                            x1="12.096"
                            y1="1.15649"
                            x2="12.096"
                            y2="21.7479"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFCA5B" />
                            <stop offset="1" stopColor="#D79100" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        ),
        image: "user3.png",
        topPick: true,
    },
    {
        name: "Catherine",
        age: 27,
        country: "Japan",
        flag: "🇯🇵",
        badge: (
            <span className="inline-flex items-center ml-2">
                <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                >
                    <path
                        d="M23.6713 7.81949L20.1436 2.40449C19.728 1.57199 18.4844 1.15649 17.6547 1.15649H6.44666C5.61704 1.15649 4.37186 1.78049 3.9578 2.40449L0.433037 7.81949C0.0174797 8.65199 0.0174797 9.69299 0.64231 10.3185L11.0163 21.3525C11.6381 21.9795 12.4677 21.7695 13.0896 21.3525L23.4636 10.3185C24.0884 9.69299 24.2947 8.44349 23.6728 7.81949H23.6713ZM18.2766 6.15449L12.4663 15.5235H9.56184L8.52295 6.98549C8.52295 6.56849 8.31666 6.36149 8.31666 6.15449C8.10739 5.94449 7.90111 5.94449 7.69333 5.94449L7.9026 5.52899H10.5977C10.804 5.52899 11.0133 5.52899 11.2196 5.73899C11.4289 5.94449 11.4289 6.15449 11.4289 6.36149L12.0492 12.399L15.1629 6.77699V6.35999C15.1629 6.15299 15.1629 6.15299 14.9551 5.94299C14.7458 5.94299 14.7458 5.73599 14.541 5.73599L14.7473 5.31899H17.8595C18.0658 5.31899 18.2751 5.31899 18.2751 5.52749C18.2751 5.73749 18.4814 5.94299 18.2751 6.15299H18.2766V6.15449Z"
                        fill="url(#paint0_linear_263_4713)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_263_4713"
                            x1="12.096"
                            y1="1.15649"
                            x2="12.096"
                            y2="21.7479"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#637F97" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        ),
        image: "user4.png",
        topPick: false,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.1, type: "spring", stiffness: 80 },
    }),
};

export default function FeaturedInfluencers() {
    return (
        <section className="w-full px-4 py-10">
            <motion.h2
                className="font-inter font-bold text-[24px] leading-[100%] tracking-[0] capitalize 
             text-gray-900 mb-6 md:mb-8 border-b border-gray-200 pb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                Featured Influencers
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {influencers.map((inf, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="relative bg-[#f5fbff] rounded-[24px] p-4 flex flex-col items-center shadow-lg w-[256px] h-[321px] border border-gray-200 opacity-100"
                        whileHover={{ scale: 1.03 }}
                    >
                        {/* Top Picks Ribbon */}
                        {inf.topPick && (
                            <img
                                src="/tag.png"
                                alt="Top Picks Ribbon"
                                className="absolute top-0 right-0 z-5 pointer-events-none select-none"
                                style={{
                                    width: '110px',
                                    height: 'auto',
                                    userSelect: 'none',
                                    pointerEvents: 'none'
                                }}
                            />
                        )}

                        {/* Influencer Image */}
                        <div className="w-full aspect-square rounded-[12px] overflow-hidden mb-4 relative flex items-center justify-center bg-gray-200">
                            <img
                                src={inf.image}
                                alt={inf.name}
                                className="object-cover w-full h-full"
                            />
                            {/* Play Button */}
                            <button className="absolute bottom-3 right-3 rounded-full cursor-pointer p-2 shadow-lg transition hover:bg-white/40">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="24"
                                        fill="white"
                                        fillOpacity="0.44"
                                    />
                                    <path
                                        d="M35.1705 25.3425L17.1705 34.3425C16.9418 34.4568 16.6876 34.5107 16.4321 34.4992C16.1767 34.4876 15.9284 34.4109 15.711 34.2764C15.4935 34.1419 15.314 33.954 15.1896 33.7306C15.0651 33.5072 14.9999 33.2557 15 33V15C15.0001 14.7444 15.0656 14.4931 15.1901 14.2699C15.3147 14.0467 15.4942 13.859 15.7116 13.7247C15.929 13.5904 16.1772 13.5138 16.4325 13.5023C16.6878 13.4908 16.9419 13.5448 17.1705 13.659L35.1705 22.659C35.4193 22.7837 35.6286 22.9752 35.7748 23.212C35.921 23.4488 35.9984 23.7217 35.9984 24C35.9984 24.2783 35.921 24.5512 35.7748 24.788C35.6286 25.0248 35.4193 25.2163 35.1705 25.341V25.3425Z"
                                        fill="#626262"
                                    />
                                </svg>
                            </button>

                        </div>
                        {/* Influencer Name & Badge */}
                        <div className="w-full text-left">
                            <h3 className="font-['Poppins'] font-semibold text-[24px] leading-[100%] tracking-[0] text-[#626262] mb-1 flex items-center">
                                {inf.name}
                                {inf.badge}
                            </h3>

                            <p className="font-['Inter'] font-normal text-[14px] leading-[100%] tracking-[0] text-[#7E95AA] flex items-center">
                                {inf.age} years old
                                <div className="pl-2">
                                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="21" height="15" rx="3" fill="white" />
                                        <path d="M10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z" fill="#D62976" />
                                    </svg>
                                </div>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
