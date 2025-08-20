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
      icon: <FaPlane className="text-white text-2xl" />,
      title: 'On Time Delivery',
      subtitle: 'Loreum epsum',
    },
    {
      icon: <FaDollarSign className="text-white text-2xl" />,
      title: 'Low Cost',
      subtitle: 'Loreum epsum',
    },
    {
      icon: <FaPhone className="text-white text-2xl" />,
      title: 'Online Support',
      subtitle: 'Loreum epsum',
    },
    {
      icon: <FaGift className="text-white text-2xl" />,
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
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16">
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img 
              src={aboutImage} 
              alt="Creative Spark" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
          {/* Text Content Column */}
          <motion.div 
            className="w-full md:w-1/2 md:pl-12"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-pink-500 leading-tight mb-6">
              Your Brand's Creative Spark in the Digital World
            </h1>
            <p className="text-gray-300 mb-4">
              We're more than influencer marketers — we're your strategic storytellers. Our mission goes far beyond connecting brands with audiences; we craft experiences that resonate, inspire, and last well beyond a single campaign.
            </p>
            <p className="text-gray-300 mb-8">
              What sets us apart is our commitment to creating campaigns that don't just perform; they inspire conversation, spark emotion, and leave a lasting mark on your audience. With us, your brand isn't simply part of the digital noise — it becomes a story worth remembering.
            </p>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
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
                    className="bg-pink-500 rounded-full p-4 mr-4"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-400">{feature.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-pink-50">
        <div className="container mx-auto flex flex-col md:flex-row items-start px-6 py-20">
            {/* Numbered List Column */}
            <motion.div 
              className="w-full md:w-1/2 space-y-10 mb-12 md:mb-0 md:pr-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
               {workSteps.map((step) => (
                 <motion.div 
                    key={step.number} 
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                 >
                    <div className="relative flex-shrink-0 mr-6">
                        <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center">
                            <span className="text-4xl font-bold text-pink-500">{step.number}</span>
                        </div>
                        <div 
                            className="absolute top-0 left-0 w-20 h-20 rounded-full border-2 border-pink-500"
                            style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
                        ></div>
                    </div>
                    <div className="pt-2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                 </motion.div>
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
                <h2 className="text-4xl font-bold text-pink-500 mb-6">How we work</h2>
                <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet fringilla purus massa gravida eu. Lacinia lacus, sed pellentesque bibendum et. Bibendum tellus, ultrices ipsum lorem odio et tortor ac, tellus. Dictum sit commodo diam nisl vitae dapibus mauris auctor arcu. Risus purus ultrices at facilisis.
                </p>
                <p className="text-gray-700 mb-8">
                    Lorem ipsum dolor sit amet, consectetur elit. Aliquet fringilla purus massa gravida eu. Lacinia lacus, sed pellentesque bibendum et.
                </p>
                <motion.button 
                  className="bg-pink-500 text-white font-bold py-3 px-10 rounded-lg text-lg"
                  whileHover={{ scale: 1.1, backgroundColor: "#D53F8C" }}
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