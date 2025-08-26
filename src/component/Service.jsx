import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  const servicesData = [
    {
      title: "SET KPIs",
      description:
        "What are your goals and objectives? What do you want to achieve with the budget allocated towards Influencers? Within which core markets? We will focus your Influencer Marketing Campaign based on your vision, mission and achieving the goals you set.",
    },
    {
      title: "TARGET AUDIENCE",
      description:
        "Who are your targeted customers in terms of gender, age and market? What are their interests? Which social media do they use? Our influencer marketing agency will help define this personas in order to create influencer marketing campaigns that reach the right target audience.",
    },
    {
      title: "INFLUENCER IDENTIFICATION",
      description:
        "Our influencer marketing agency will be able to match your target audience with the relevant influencers. Our clients have full access to the influencers’ target demographics and can see which ones are the perfect ones for their Influencer Marketing Campaigns.",
    },
    {
      title: "CONTRACTING INFLUENCERS",
      description:
        "The relationship between you and an Influencer has to involve a legal agreement where the Influencers know their rights and obligations. We will take care of having each Influencer that will be part of your Campaign sign an agreement and commit to the deliverables.",
    },
    {
      title: "CONTENT CREATION",
      description:
        "In order to make any Influencer Campaign successful, you cannot just rely on the Influencers following, you need to think how to best engage with their users. We will help you create concepts and content that will make the Influencers followers interact with.",
    },
    {
      title: "TRACKING RESULTS",
      description:
        "Tracking results is the most important thing to do when you want to understand the success of an Influencer Marketing campaign. We will put in place tracking pixels and tools that will provide you extensive reporting and tangible metrics for any of the activities.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-white py-12 md:py-20 -mt-10 md:-mt-18">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="font-poppins font-bold text-[48px] leading-[62.4px] tracking-normal text-[#D62976] text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-auto h-auto md:h-[228px] md:w-[545px] rounded-3xl p-[1px] bg-gradient-to-b from-white/0 to-white/25 hover:shadow-2xl  transition-all duration-300"
            >
              <div className="bg-[#F3F9FF] w-full h-full rounded-3xl p-4 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0 flex justify-center items-center">
                  <svg
                    width="56"
                    height="54"
                    viewBox="0 0 69 66"
                    fill="none"
                    className="w-14 h-14 sm:w-[69px] sm:h-[66px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="68.1494"
                      height="66"
                      rx="24"
                      fill="url(#paint0_linear_237_818)"
                    />
                    <path
                      d="M39.2549 22.6166C37.1432 22.6166 35.2532 23.6433 34.0749 25.2183C32.8965 23.6433 31.0065 22.6166 28.8949 22.6166C25.3132 22.6166 22.4082 25.5333 22.4082 29.1383C22.4082 30.5266 22.6299 31.81 23.0149 33C24.8582 38.8333 30.5399 42.3216 33.3515 43.2783C33.7482 43.4183 34.4015 43.4183 34.7982 43.2783C37.6099 42.3216 43.2915 38.8333 45.1349 33C45.5199 31.81 45.7415 30.5266 45.7415 29.1383C45.7415 25.5333 42.8365 22.6166 39.2549 22.6166Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_237_818"
                        x1="13.9397"
                        y1="2.86509e-07"
                        x2="44.8016"
                        y2="66.7691"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B91550" />
                        <stop offset="1" stopColor="#FF1B6D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-[24px] leading-[100%] tracking-normal text-[#F11C69] mb-1 sm:mb-2">
                    {service.title}
                  </h3>

                  <p className="font-inter font-normal text-[16px] leading-[26px] tracking-normal text-[#626262]">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
