import React from 'react';
import { motion as Motion } from 'framer-motion';

const achievements = [
  {
    img: '/img/Achivement-1.png',
    count: '14K+',
    title: 'Orders',
    subtitle: 'Completed',
    bg: '#bfe5c7',
  },
  {
    img: '/img/Achivement-2.png',
    count: '1.2K+',
    title: 'Happy',
    subtitle: 'Customers',
    bg: '#fbe0c3',
  },
  {
    img: '/img/Achivement-3.png',
    count: '320+',
    title: 'Products',
    subtitle: 'Available',
    bg: '#d9e4f5',
  },
  {
    img: '/img/Achivement-4.png',
    count: '98%',
    title: 'Customer',
    subtitle: 'Satisfaction',
    bg: '#f8d0e5',
  },
];

const Achievement = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
            }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 150 }}
            className="rounded-2xl p-5 flex flex-col items-center shadow-md transition-all duration-300"
            style={{ backgroundColor: item.bg }}
          >
            <div className="flex items-center gap-4 mb-3">
              <img src={item.img} alt={`achievement-${index}`} className="w-12 h-12" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#304d30]">{item.count}</h2>
            </div>
            <h3 className="text-lg font-semibold text-[#304d30]">{item.title}</h3>
            <p className="text-[#304d30] text-sm">{item.subtitle}</p>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
