// import React from "react";
// import { motion } from "framer-motion";

// // Dummy data for demonstration
// const socialStats = [
//     {
//         platform: "YouTube",
//         icon: "/youtube.svg",
//         count: "1.5M+",
//         label: "Subscribers",
//         btn: "Subscribe",
//         btnColor: "bg-[#ff2e2e]",
//         textColor: "text-[#ff2e2e]",
//     },
//     {
//         platform: "Instagram",
//         icon: "/instagram.svg",
//         count: "1.2M+",
//         label: "Subscribers",
//         btn: "Subscribe",
//         btnColor: "bg-[#ff2e92]",
//         textColor: "text-[#ff2e92]",
//     },
//     {
//         platform: "Facebook",
//         icon: "/facebook.svg",
//         count: "700K+",
//         label: "Subscribers",
//         btn: "Subscribe",
//         btnColor: "bg-[#006aff]",
//         textColor: "text-[#006aff]",
//     },
// ];

// const videos = [
//     { img: "/video1.jpg", platform: "facebook", icon: "/facebook.svg" },
//     { img: "/video2.jpg", platform: "instagram", icon: "/instagram.svg" },
//     { img: "/video3.jpg", platform: "instagram", icon: "/instagram.svg" },
//     { img: "/video4.jpg", platform: "instagram", icon: "/instagram.svg" },
//     { img: "/video5.jpg", platform: "facebook", icon: "/facebook.svg" },
//     { img: "/video6.jpg", platform: "instagram", icon: "/instagram.svg" },
// ];

// const container = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: { staggerChildren: 0.15 },
//     },
// };

// const item = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
// };

// export default function Catherine() {
//     return (
//         <div className="bg-white min-h-screen px-4 py-6 max-w-7xl mx-auto">
//             <motion.nav
//                 className="flex items-center justify-between p-4 md:p-6"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//             >
//                 <div className="flex items-center space-x-2 font-inter font-medium text-xs sm:text-[13px] leading-[100%] tracking-[0] text-[#D62976]">
//                     <span>Home</span>
//                     <span>›</span>
//                     <span>Catherine</span>
//                 </div>
//             </motion.nav>

//             {/* Profile Card + Bio Row */}
//             <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
//                 {/* Profile Card (Left) */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30, scale: 0.96 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ type: "spring", duration: 0.7 }}
//                     className="bg-[#f5fbff] rounded-2xl shadow p-4 flex flex-col items-center w-full md:w-60"
//                 >
//                     <div className="relative w-40 h-40 mb-3">
//                         <img
//                             src="/profile.jpg"
//                             alt="Catherine"
//                             className="w-full h-full object-cover rounded-xl"
//                         />
//                         {/* Play Button */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="bg-white/70 rounded-full w-12 h-12 flex items-center justify-center shadow backdrop-blur-sm">
//                                 <svg
//                                     viewBox="0 0 48 48"
//                                     fill="none"
//                                     className="w-7 h-7"
//                                 >
//                                     <polygon points="19,16 35,24 19,32" fill="#666" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="font-bold text-lg text-gray-800 flex items-center">
//                         Catherine
//                         <span className="ml-1">
//                             <svg
//                                 width="22"
//                                 height="22"
//                                 viewBox="0 0 20 20"
//                                 fill="none"
//                                 className="inline"
//                             >
//                                 <circle cx="10" cy="10" r="10" fill="#dbeafe" />
//                                 <path
//                                     d="M14 8l-4.5 4.5L7 10"
//                                     stroke="#7dd3fc"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     fill="none"
//                                 />
//                             </svg>
//                         </span>
//                     </div>
//                 </motion.div>

//                 {/* Bio Text (Right) */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
//                     className="flex-1 text-gray-700 text-base leading-relaxed"
//                 >
//                     I’m a passionate content creator dedicated to inspiring and connecting with people through authentic storytelling and visually engaging content. With a focus on [your niche – e.g., fashion, travel, fitness, lifestyle, beauty], I share experiences, tips, and ideas that encourage my audience to explore new possibilities and embrace their unique style.<br /><br />
//                     Collaborating with brands is more than a partnership for me—it’s about aligning with those who share my values and vision. I aim to create campaigns that not only showcase a product or service but also tell a story my audience can relate to and trust.
//                 </motion.div>
//             </div>

//             {/* Social Cards */}
//             <motion.div
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
//             >
//                 {socialStats.map((stat, idx) => (
//                     <motion.div
//                         key={stat.platform}
//                         variants={item}
//                         className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
//                     >
//                         <img src={stat.icon} alt={stat.platform} className="w-10 h-10" />
//                         <div className="flex-1">
//                             <div className="font-semibold">{stat.platform}</div>
//                             <div className="text-lg font-bold">{stat.count}</div>
//                             <div className="text-gray-500 text-xs">{stat.label}</div>
//                         </div>
//                         <button
//                             className={`rounded-full px-4 py-1 text-white font-semibold text-sm ${stat.btnColor}`}
//                         >
//                             {stat.btn}
//                         </button>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Videos Section */}
//             <div className="flex items-center justify-between mb-2">
//                 <h2 className="font-semibold text-gray-700 text-lg">Videos</h2>
//                 <motion.button
//                     whileTap={{ scale: 0.95 }}
//                     whileHover={{ scale: 1.05 }}
//                     className="bg-pink-500 text-white rounded-full px-5 py-2 font-semibold shadow transition"
//                 >
//                     Show More
//                 </motion.button>
//             </div>
//             <motion.div
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//                 className="grid grid-cols-2 sm:grid-cols-3 gap-6"
//             >
//                 {videos.map((video, idx) => (
//                     <motion.div
//                         key={idx}
//                         variants={item}
//                         className="relative rounded-2xl overflow-hidden shadow-lg group"
//                     >
//                         <img
//                             src={video.img}
//                             alt="video"
//                             className="w-full h-48 object-cover"
//                         />
//                         {/* Social Icon Badge */}
//                         <div className="absolute bottom-3 left-3">
//                             <div
//                                 className={`w-8 h-8 rounded-full flex items-center justify-center bg-white shadow`}
//                             >
//                                 <img src={video.icon} alt={video.platform} className="w-5 h-5" />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }
