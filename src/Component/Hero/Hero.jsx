import React from "react";
import { motion as Motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
};

const Hero = () => {
  return (
    <Motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-screen bg-[#304d30] dark:bg-[#1f2f1f] text-white dark:text-gray-100 flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-10 w-full gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          {["Your Prescription for", "Affordable Health", "Solutions!"].map(
            (text, index) => (
              <Motion.h1
                key={index}
                custom={index}
                variants={headingVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                {text}
              </Motion.h1>
            )
          )}

          <Motion.p
            custom={3}
            variants={headingVariants}
            className="text-base sm:text-lg max-w-md mx-auto lg:mx-0 pt-2"
          >
            Elevate your health journey with exclusive discounts and
            unparalleled convenience. Your path to well-being starts here, where
            every purchase is a prescription for savings.
          </Motion.p>

          <Motion.button
            custom={4}
            variants={headingVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Start shopping now"
            className="bg-white text-lime-600 font-semibold px-6 py-2 mt-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-base shadow-md flex items-center justify-center gap-2 mx-auto lg:mx-0"
          >
            Start Shopping <ShoppingCart size={20} />
          </Motion.button>
        </div>

        {/* Image Section */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 mt-5 lg:mt-0 flex justify-center"
        >
          <img
            loading="lazy"
            src="/img/hero.png"
            alt="Healthcare illustration"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]"
          />
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default Hero;
