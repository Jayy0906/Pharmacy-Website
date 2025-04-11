import React from 'react';
import { motion as Motion } from 'framer-motion';

const Hero_Product = () => {
  return (
    <section className="px-4 md:px-12 py-16 bg-gradient-to-br from-[#e0f7ec] via-white to-[#f0f9ff] rounded-t-4xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Product */}
        <Motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03, boxShadow: '0 16px 40px rgba(0,0,0,0.15)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="flex flex-col lg:flex-row items-center justify-between bg-white border border-lime-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group w-full lg:basis-3/5"
        >
          <div className="flex flex-col gap-4 p-6 text-center lg:text-left max-w-xl bg-gradient-to-tr from-white to-lime-50">
            <button className="bg-lime-600 text-white px-8 py-2 rounded-full text-sm font-semibold hover:bg-lime-700 transition">
              25% OFF
            </button>
            <h1 className="font-bold text-3xl sm:text-4xl text-[#304d30]">BLACK GARLIC OIL</h1>
            <p className="text-lg text-gray-700">Stronger and Thicker Hair With Black Garlic Oil.</p>
            <p className="text-sm text-gray-500 line-through">$49.00</p>
            <div className="flex justify-center lg:justify-start gap-2 text-base text-gray-600 items-center">
              <p className="text-xl font-bold text-[#304d30]">$37.00</p>
              <span className=" ">Including Tax</span>
            </div>
          </div>
          <div className="w-full max-w-[300px] p-6">
            <img
              src="/img/garlocoil.png"
              alt="Black Garlic Oil"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </Motion.div>

        {/* Side Products */}
        <div className="flex flex-col gap-8 w-full lg:basis-2/5">
          {[{
            id: 1,
            title: 'Dental Care Set for Vivid and Bright Smiles',
            priceOld: '$33.90',
            priceNew: '$22.90',
            image: '/img/hero_product-2.png'
          }, {
            id: 2,
            title: 'BANANA FLAVOURED TOOTHPASTE',
            priceOld: '$37.00',
            priceNew: '$37.00',
            image: '/img/hero_product-3.png'
          }].map(product => (
            <Motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 16px 40px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="flex flex-col lg:flex-row items-center justify-between bg-white border border-lime-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4 p-6 text-center lg:text-left bg-gradient-to-tr from-white to-lime-50">
                <button className="bg-lime-600 text-white px-8 py-2 rounded-full text-sm font-semibold hover:bg-lime-700 transition">
                  25% OFF
                </button>
                <h2 className="text-xl sm:text-2xl font-bold text-[#304d30] leading-snug">{product.title}</h2>
                <p className="text-sm text-gray-500 line-through">{product.priceOld}</p>
                <div className="flex justify-center lg:justify-start gap-2 text-sm text-gray-600 items-center">
                  <p className="text-lg font-bold text-[#304d30]">{product.priceNew}</p>
                  <span>Including Tax</span>
                </div>
              </div>
              <div className="w-full max-w-[250px] p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero_Product;
