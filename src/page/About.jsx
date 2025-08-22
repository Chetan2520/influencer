import React from 'react';
import aboutImage from '/about.png';
import { FaPlane, FaDollarSign, FaPhone, FaGift } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CreativeSpark = () => {
    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Stagger children animations by 0.2s
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };


    const features = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" stroke="#D62976" />
                    <path d="M34.3169 23.9998C34.3169 23.0759 33.5579 22.3323 32.6341 22.3513L27.5779 22.4554L23.5351 14.4133L20.9982 14.4133L22.9337 22.551L17.7295 22.6582L16.3635 20.7555L14.0706 20.7555L15.6317 23.9998L14.0706 27.2441L16.3635 27.2441L17.7295 25.3414L22.9337 25.4486L20.9982 33.5863L23.5351 33.5863L27.578 25.5442L32.6341 25.6483C33.5579 25.6673 34.3169 24.9237 34.3169 23.9998Z" fill="#D62976" />
                </svg>
            ),
            title: 'On Time Delivery',
            subtitle: 'Loreum epsum',
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" stroke="#D62976" />
                    <path d="M24 14C29.5228 14 34 18.4772 34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14ZM23.5088 19.499C21.9296 19.6426 20.6895 20.511 20.6895 22.0771C20.6896 23.5583 21.7599 24.3155 22.9736 24.583L23.5352 24.707V27.1338C22.7 27.0229 22.2623 26.5211 22.2295 25.9209H20.5195C20.5328 27.128 21.3424 28.3999 23.502 28.5566L23.4961 29.373H24.5527L24.5469 28.5439C26.3346 28.3742 27.4696 27.3888 27.4697 25.8359C27.4697 24.2568 26.4063 23.5912 25.0947 23.3105L24.54 23.1924V20.915C25.2317 21.026 25.6171 21.5483 25.6367 22.0703H27.3066C27.2805 20.7131 26.2172 19.6822 24.5664 19.5059V18.6572H23.5088V19.499ZM24.6709 24.915C25.4015 25.1173 25.7207 25.4767 25.7207 26.0117C25.7207 26.6512 25.2317 27.075 24.54 27.1338V24.8828C24.5857 24.8959 24.6318 24.9085 24.6709 24.915ZM23.5352 22.9971C23.47 22.984 23.4112 22.9639 23.3525 22.9443C22.7587 22.7486 22.458 22.4093 22.458 21.9395C22.4581 21.3458 22.9153 20.9741 23.5352 20.9023V22.9971Z" fill="#D62976" />
                </svg>

            ),
            title: 'Low Cost',
            subtitle: 'Loreum epsum',
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" stroke="#D62976" />
                    <path d="M28.1169 27.6803L27.4983 28.6082C27.3748 28.7934 27.2115 28.9514 26.9963 29.0083C26.2914 29.1946 24.4199 29.2787 21.5706 26.4294C18.7213 23.5801 18.8054 21.7086 18.9917 21.0037C19.0486 20.7885 19.2066 20.6252 19.3918 20.5017L20.3197 19.8831C21.0105 19.4226 21.1972 18.4892 20.7367 17.7983L18.9842 15.1696C18.5822 14.5666 17.8072 14.3362 17.1411 14.6217L16.3505 14.9605C15.75 15.2179 15.2601 15.6798 14.9679 16.2642C14.7238 16.7525 14.5346 17.2666 14.5089 17.8119C14.4281 19.5303 14.8049 23.7638 19.5206 28.4795C24.2362 33.1951 28.4697 33.5719 30.1881 33.4911C30.7334 33.4654 31.2475 33.2762 31.7358 33.0321C32.3202 32.7399 32.7821 32.25 33.0395 31.6495L33.3783 30.8589C33.6638 30.1928 33.4334 29.4178 32.8304 29.0158L30.2017 27.2633C29.5108 26.8028 28.5774 26.9895 28.1169 27.6803Z" fill="#D62976" />
                </svg>

            ),
            title: 'Online Support',
            subtitle: 'Loreum epsum',
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" stroke="#D62976" />
                    <path d="M23.0996 25.1982V33.5703H16.9092C15.8046 33.5703 14.9092 32.6749 14.9092 31.5703V25.1982H23.0996ZM33.0908 31.5703C33.0908 32.6749 32.1954 33.5703 31.0908 33.5703H24.9004V25.1982H33.0908V31.5703ZM25.8896 14.4971C27.3675 13.5557 29.329 13.9909 30.2705 15.4688C31.2119 16.9466 30.7766 18.9082 29.2988 19.8496C29.2524 19.8792 29.2021 19.9056 29.1514 19.9346H33C33.5523 19.9346 34 20.3823 34 20.9346V22.5703C34 22.939 33.7802 23.2557 33.4648 23.3984H24.9004V19.9346H23.0996V23.3984H14.5352C14.2198 23.2557 14 22.939 14 22.5703V20.9346C14 20.3823 14.4477 19.9346 15 19.9346H18.8477C18.797 19.9056 18.7467 19.8792 18.7002 19.8496C17.2227 18.9082 16.7876 16.9465 17.7285 15.4688C18.6699 13.9911 20.6316 13.556 22.1094 14.4971C22.7237 14.8885 23.4524 15.654 23.999 16.46C24.5455 15.654 25.2752 14.8886 25.8896 14.4971Z" fill="#D62976" />
                </svg>

            ),
            title: 'Get Coupon',
            subtitle: 'Loreum epsum',
        },
    ];

    const workSteps = [
        {
            number: '1',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet, consectetur elit. Aliquet fringilla purus massa gravida eu.',
        },
        {
            number: '2',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet, consectetur elit. Aliquet fringilla purus massa gravida eu.',
        },
        {
            number: '3',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet, consectetur elit. Aliquet fringilla purus massa gravida eu.',
        },
    ];

    return (
        <div className="w-full overflow-x-hidden">
            {/* Top Section */}
            <section className="bg-white text-black max-w-7xl mx-auto">
                <div className="container mx-auto flex flex-col md:flex-row items-start px-6 py-16">

                    {/* Mobile-only heading at the top */}
                    <h1 className="font-poppins font-semibold text-[40px] leading-[48px] text-[#D62976] mb-6 block md:hidden text-center">
                        Your Brand's Creative Spark in the Digital World
                    </h1>

                    {/* Image Column */}
                    <motion.div
                        className="w-full md:w-1/2 mb-6 md:mb-0"
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <img
                            src={aboutImage}
                            alt="Creative Spark"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    {/* Desktop Text + Features Column */}
                    <motion.div
                        className="w-full md:w-1/2 md:pl-12 flex flex-col"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Desktop heading */}
                        <h1 className="font-poppins font-semibold text-[40px] md:text-[48px] leading-[62.4px] text-[#D62976] mb-6 hidden md:block">
                            Your Brand's Creative Spark in the Digital World
                        </h1>

                        {/* Paragraphs */}
                        <p className="font-inter font-normal text-[16px] leading-[18px] tracking-[0px] text-[#00001E99] mb-4">
                            We’re more than influencer marketers — we’re your strategic storytellers. Our mission goes far beyond connecting brands with audiences; we craft experiences that resonate, inspire, and last well beyond a single campaign.
                        </p>

                        <p className="font-inter font-normal text-[16px] leading-[18px] tracking-[0px] text-[#00001E99] mb-8">
                            What sets us apart is our commitment to creating campaigns that don't just perform; they inspire conversation, spark emotion, and leave a lasting mark on your audience. With us, your brand isn't simply part of the digital noise — it becomes a story worth remembering.
                        </p>

                        {/* Features Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.title}
                                    className="flex items-center"
                                    variants={itemVariants}
                                >
                                    <motion.div
                                        className="p-4"
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="font-inter font-medium text-[14px] leading-[20px] tracking-[2%] align-middle">
                                            {feature.title}
                                        </h3>

                                        <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[2%] align-middle text-gray-400">
                                            {feature.subtitle}
                                        </p>

                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* Bottom Section */}
            <section className="bg-[#FFE2EF]">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-start px-6 py-20">
                    {/* Numbered List Column */}
                    <motion.div
                        className="w-full md:w-1/2 space-y-8 mb-12 md:mb-0 md:pr-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {workSteps.map((step) => (
                            // Wrapper with the soft pink background and padding
                            <div key={step.number} className="bg-[#FFE2EF] p-3 rounded-2xl">
                                <motion.div
                                    // The main card that clips the shape
                                    className="relative bg-[#F7F7F7] rounded-xl shadow-sm overflow-hidden"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                                >
                                    {/* Flex container for alignment */}
                                    <div className="flex items-center min-h-[120px]">
                                        <div
                                            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[45%]
                                   w-[140px] h-[140px] bg-[#803EAF40] rounded-full
                                   border-2 border-[#D62976]
                                   flex items-center justify-end pr-7" // Aligns number correctly
                                        >
                                            <span className="font-sawarabi font-normal text-[72px] leading-[90px] tracking-[0px] text-[#D62976]">
                                                {step.number}
                                            </span>

                                        </div>

                                        {/* Text Content */}
                                        <div className="pl-24 pr-6 py-6">
                                            <h3 className="font-inter font-semibold text-[30px] leading-[40px] tracking-[0px] text-[#01182F] mb-2">
                                                {step.title}
                                            </h3>

                                            <p className="font-inter font-normal text-[18px] leading-[28px] tracking-[1%] text-[#4D5D64]">
                                                {step.description}
                                            </p>

                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>



                    {/* How We Work Column */}
                    <motion.div
                        className="w-full md:w-1/2 md:pl-12"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-poppins font-semibold text-[40px] leading-[62.4px] tracking-[0px] text-[#D62976] mb-6">
                            How we work
                        </h2>

                        <p className="font-inter font-normal text-[16px] leading-[25px] tracking-[0px] text-[#00001E99] mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet fringilla purus massa gravida eu. Lacinia lacus, sed pellentesque bibendum et. Bibendum tellus, ultrices ipsum lorem odio et tortor ac, tellus. Dictum sit commodo diam nisl vitae dapibus mauris auctor arcu. Risus purus ultrices at facilisis.
                        </p>

                        <p className="font-inter font-normal text-[16px] leading-[25px] tracking-[0px] text-[#00001E99] mb-8">
                            Lorem ipsum dolor sit amet, consectetur elit. Aliquet fringilla purus massa gravida eu. Lacinia lacus, sed pellentesque bibendum et.
                        </p>

                        <motion.button
                            className="bg-[#D62976] text-white cursor-pointer font-bold w-[145px] h-[56px] py-4 px-6 rounded-[16px] text-lg flex items-center justify-center gap-[10px]"
                            whileHover={{ scale: 1.1, backgroundColor: "#D62976" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            Contact us
                        </motion.button>

                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CreativeSpark;