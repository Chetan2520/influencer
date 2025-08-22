import React from "react";
import { motion } from "framer-motion";
import VideoGallery from "../component/Video";

// Dummy data for demonstration
const socialStats = [
    {
        platform: "YouTube",
        icon: "/youtube.png",
        count: "1.5M+",
        label: "Subscribers",
        btn: "Subscribe",
        btnColor: "bg-[#EA252C]",
        textColor: "text-[#FFFFFF]",
    },
    {
        platform: "Instagram",
        icon: "/insta.png",
        count: "1.2M+",
        label: "Subscribers",
        btn: "Subscribe",
        btnColor: "bg-[#FF186D]",
        textColor: "text-[#FFFFFF]",
    },
    {
        platform: "Facebook",
        icon: "/facebook.png",
        count: "700K+",
        label: "Subscribers",
        btn: "Subscribe",
        btnColor: "bg-[#1674EA]",
        textColor: "text-[#FFFFFF]",
    },
];

// Framer Motion variants for animations
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

export default function Catherine() {
    return (
        // RESPONSIVE CHANGE: Added responsive horizontal padding for better spacing on different screen sizes.
        <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
            <motion.nav
                className="flex items-center justify-between p-4 md:p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center space-x-2 font-inter font-medium text-xs sm:text-[13px] leading-[100%] tracking-[0] text-[#D62976]">
                    <span>Home</span>
                    <span>›</span>
                    <span>Catherine</span>
                </div>
            </motion.nav>

            {/* Profile Card + Bio Row */}
            {/* RESPONSIVE CHANGE: **items-center** centers the content on mobile (column view), **md:items-start** aligns it to the top on larger screens (row view). */}
            <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-start">
                {/* Profile Card (Left) */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", duration: 0.7 }}
                    // RESPONSIVE CHANGE: The card is centered on mobile via the flex parent. Widths and heights are adjusted for screen size.
                    className="relative bg-[#F3F9FF] rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 flex flex-col shadow-lg w-full max-w-[256px] h-auto border border-gray-200"
                >
                    <div className="relative w-full mb-3">
                        <img
                            src="/user1.png"
                            alt="Catherine"
                            className="w-full aspect-square rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] overflow-hidden bg-gray-200"
                        />
                        {/* Play Button */}
                        <button className="absolute bottom-2 right-2 rounded-full cursor-pointer p-1 shadow-lg transition hover:bg-white/40">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] lg:w-[48px] lg:h-[48px]"
                            >
                                <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.44" />
                                <path d="M35.1705 25.3425L17.1705 34.3425C16.9418 34.4568 16.6876 34.5107 16.4321 34.4992C16.1767 34.4876 15.9284 34.4109 15.711 34.2764C15.4935 34.1419 15.314 33.954 15.1896 33.7306C15.0651 33.5072 14.9999 33.2557 15 33V15C15.0001 14.7444 15.0656 14.4931 15.1901 14.2699C15.3147 14.0467 15.4942 13.859 15.7116 13.7247C15.929 13.5904 16.1772 13.5138 16.4325 13.5023C16.6878 13.4908 16.9419 13.5448 17.1705 13.659L35.1705 22.659C35.4193 22.7837 35.6286 22.9752 35.7748 23.212C35.921 23.4488 35.9984 23.7217 35.9984 24C35.9984 24.2783 35.921 24.5512 35.7748 24.788C35.6286 25.0248 35.4193 25.2163 35.1705 25.341V25.3425Z" fill="#626262" />
                            </svg>
                        </button>
                    </div>
                    <div className="font-['Poppins'] font-semibold text-lg sm:text-xl lg:text-[24px] leading-tight text-[#626262] mb-1 text-left">
                        Catherine
                        <span className="inline-flex items-center ml-2">
                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                                <path d="M23.6713 7.81949L20.1436 2.40449C19.728 1.57199 18.4844 1.15649 17.6547 1.15649H6.44666C5.61704 1.15649 4.37186 1.78049 3.9578 2.40449L0.433037 7.81949C0.0174797 8.65199 0.0174797 9.69299 0.64231 10.3185L11.0163 21.3525C11.6381 21.9795 12.4677 21.7695 13.0896 21.3525L23.4636 10.3185C24.0884 9.69299 24.2947 8.44349 23.6728 7.81949H23.6713ZM18.2766 6.15449L12.4663 15.5235H9.56184L8.52295 6.98549C8.52295 6.56849 8.31666 6.36149 8.31666 6.15449C8.10739 5.94449 7.90111 5.94449 7.69333 5.94449L7.9026 5.52899H10.5977C10.804 5.52899 11.0133 5.52899 11.2196 5.73899C11.4289 5.94449 11.4289 6.15449 11.4289 6.36149L12.0492 12.399L15.1629 6.77699V6.35999C15.1629 6.15299 15.1629 6.15299 14.9551 5.94299C14.7458 5.94299 14.7458 5.73599 14.541 5.73599L14.7473 5.31899H17.8595C18.0658 5.31899 18.2751 5.31899 18.2751 5.52749C18.2751 5.73749 18.4814 5.94299 18.2751 6.15299H18.2766V6.15449Z" fill="url(#paint0_linear_263_4713)" />
                                <defs><linearGradient id="paint0_linear_263_4713" x1="12.096" y1="1.15649" x2="12.096" y2="21.7479" gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset="1" stopColor="#637F97" /></linearGradient></defs>
                            </svg>
                        </span>
                    </div>
                </motion.div>

                {/* Bio Text (Right) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
                    // RESPONSIVE CHANGE: Adjusted font size and line height for better readability on mobile.
                    className="flex-1 text-[#000000] font-['Inter'] font-normal text-base sm:text-lg md:text-[23px] leading-relaxed md:leading-[36px]"
                >
                    I’m a passionate content creator dedicated to inspiring and connecting with people through authentic storytelling and visually engaging content. With a focus on [your niche – e.g., fashion, travel, fitness, lifestyle, beauty], I share experiences, tips, and ideas that encourage my audience to explore new possibilities and embrace their unique style.<br /><br />
                    Collaborating with brands is more than a partnership for me it’s about aligning with those who share my values and vision. I aim to create campaigns that not only showcase a product or service but also tell a story my audience can relate to and trust.
                </motion.div>
            </div>

            {/* Social Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
            >
                {socialStats.map((stat) => (
                    <motion.div
                        key={stat.platform}
                        variants={item}
                        // RESPONSIVE CHANGE: Removed fixed width, added **w-full** and **max-w-[358px]** to prevent overflow on small screens. **mx-auto** centers it in the grid column.
                        className="flex bg-white rounded-[10px] p-3 w-full max-w-[358px] mx-auto h-auto sm:h-[136px] items-center"
                        style={{ boxShadow: '0px 20px 50px 0px #0000001A' }}
                    >
                        {/* RESPONSIVE CHANGE: Image width is smaller on mobile and grows on larger screens. */}
                        <img src={stat.icon} alt={stat.platform} className="w-[120px] sm:w-[160px] h-auto object-contain" />
                        <div className="w-[1px] bg-gray-300 mx-4 h-full" />
                        <div className="flex-1 flex flex-col justify-center items-center h-full text-center">
                            {/* RESPONSIVE CHANGE: Font size is now smaller on mobile. */}
                            <div className="font-questrial font-normal text-2xl sm:text-[28.1px] leading-tight text-[#1D1F22]">
                                {stat.count}
                            </div>
                            <div className="font-inter font-semibold text-sm leading-tight text-[#1D1F22] my-2">
                                {stat.label}
                            </div>
                            <button className={`rounded-full px-5 py-2 sm:px-6 sm:py-3 cursor-pointer text-white text-sm font-inter font-semibold ${stat.btnColor}`}>
                                {stat.btn}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Videos Section - This component is already responsive from previous edits */}
            <VideoGallery />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
