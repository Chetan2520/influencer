import React from 'react';
import { motion } from 'framer-motion';

// --- MOCK DATA ---
// Create an array of brand logo paths.
// Assuming you have 24 brand images named brand1.png, brand2.png, etc.
// and they are located in the **public/brands/** directory.
const brandLogos = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    src: `/brands/brand${i + 1}.png`,
    alt: `Client Brand ${i + 1}`,
}));

// --- Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

// --- COMPONENT ---
const OurClients = () => {
    return (
        <section className="max-w-7xl mx-auto text-black  flex items-center justify-center py-16 px-4 -mt-16">
            <motion.div
                className="container mx-auto text-center"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-[48px] leading-[62.4px] font-bold font-poppins text-center text-[#D62976] mb-12"
                >
                    Our Clients
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="max-w-4xl mx-auto text-[16px] leading-[26px] font-normal font-inter text-center text-[#626262] mb-12"
                    variants={itemVariants}
                >
                    These are just some of our amazing clients. Our influencer marketing agency proudly works with them on their influencer marketing campaigns, starting from understanding their KPIs, identifying the right influencers, working on the campaign narrative, managing the execution and finalizing with tracking and in-depth reporting.
                </motion.p>


                {/* Logos Grid */}
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-10 items-center"
                    variants={sectionVariants} // Reuse section variants for staggering children
                >
                    {brandLogos.map((logo) => (
                        <motion.div
                            key={logo.id}
                            className="flex justify-center items-center"
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-12 w-auto object-contain cursor-pointer"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OurClients;
