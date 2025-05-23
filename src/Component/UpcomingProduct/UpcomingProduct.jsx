import React from 'react'
import { motion as Motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Wound Dressing',
    price: '$5.78',
    image: '/img/Upcomingproduct-1.png',
  },
  {
    id: 2,
    title: 'IV Cathetere',
    price: '$2.00',
    image: '/img/Upcomingproduct-2.png',
  },
  {
    id: 3,
    title: 'Blood Pressure Cuff',
    price: '$24.78',
    image: '/img/Upcomingproduct-3.png',
  },
  {
    id: 4,
    title: 'Chest Tube',
    price: '$58.56',
    image: '/img/Upcomingproduct-4.png',
  },
];

const UpcomingProduct = () => {
  return (
    <>
    <section className="px-4 md:px-12 py-16 bg-gradient-to-br from-[#e0f7ec] via-white to-[#f0f9ff] rounded-t-4xl">
          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              🩺 Upcoming Products
            </h1>
            <p className="text-lime-600 font-medium hover:underline cursor-pointer text-lg flex items-center w-full sm:w-auto justify-end sm:justify-start text-right sm:text-left">
              View All <i className="fa-solid fa-arrow-right ml-2"></i>
            </p>
          </div>
          
    
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15)',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="flex flex-col justify-between bg-white border border-lime-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-tr from-white to-lime-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="text-center">
                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-lime-600 text-base font-bold mt-1">{product.price}</p>
                  </div>
                </div>
    
                <div className="p-4">
                  <Motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white font-semibold transition duration-300 shadow-md hover:shadow-lg cursor-pointer "
                  >
                    See More <i className="fa-solid fa-cart-shopping ml-2"></i>
                  </Motion.button>
                </div>
              </Motion.div>
            ))}
          </div>
        </section>
    </>
  )
}

export default UpcomingProduct