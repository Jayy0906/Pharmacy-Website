import React from 'react';
import { motion as Motion } from 'framer-motion';

const Offer = () => {
  return (
    <section className="bg-gradient-to-r from-[#f6faff] to-[#e4f2ff] py-10 px-4 sm:px-6 md:px-12 lg:px-12">
      <Motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300"
      >
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm font-medium text-lime-600 tracking-wide uppercase">
            Today’s Hot Offer
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e293b] leading-snug">
            Unlock 50% Off on Essential Medicines!
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Embrace wellness without breaking the bank! Enjoy a generous 25% discount on a wide range of vital medicines at our online pharmacy. Your health matters, and so does your budget.
          </p>
         <Motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.98 }} className="mt-4 inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white font-semibold transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Place An Order Now
            <i className="fa-solid fa-arrow-right ml-2"></i>
         </Motion.button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/img/offerimg.png"
            alt="Hot Offer"
            className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px]"
          />
        </div>
      </Motion.div>
    </section>
  );
};

export default Offer;
