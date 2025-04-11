import React from 'react';
import { motion as Motion } from 'framer-motion';

const Section = () => {
  const cards = [
    { id: 1, bg: '#bfe5c7', img: '/img/section-1.png' },
    { id: 2, bg: '#faedc9', img: '/img/section-2.png' },
    { id: 3, bg: '#c5ef99', img: '/img/section-3.png' },
    { id: 4, bg: '#F8EBFD', img: '/img/section-4.png' },
  ];

  return (
    <section className="mt-10 mb-10 px-4 md:px-8 lg:px-16">
      <div className="flex flex-nowrap md:flex-wrap gap-4 md:justify-between lg:justify-around overflow-x-auto md:overflow-visible scrollbar-hide">
        {cards.map((card, index) => (
          <Motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 15 }}
            className="min-w-[240px] md:w-[45%] lg:w-[22%] h-20 flex items-center justify-between rounded-3xl p-3 shadow-md transition-all duration-300"
            style={{ backgroundColor: card.bg }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <img
                  src={card.img}
                  alt={`Discount ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-[#304d30] leading-snug">Get 25%</h1>
                <h1 className="text-lg font-semibold text-[#304d30]">OFF</h1>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right text-[#304d30] text-lg"></i>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section;
