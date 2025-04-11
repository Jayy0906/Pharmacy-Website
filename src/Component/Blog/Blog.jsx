import React from 'react';
import { motion as Motion } from 'framer-motion';

const Blog = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 150, damping: 20 },
  };

  return (
    <section className="bg-gradient-to-br from-[#e7f5ff] via-[#f0f9ff] to-[#fafffc] py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <Motion.div {...fadeUp} className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
          📰 Our Latest News & Blogs
        </h1>
      </Motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Featured Blog */}
        <Motion.div
          {...fadeUp}
          className="w-full lg:w-1/2 bg-white rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 p-6"
        >
          <img
            src="/img/blog-1.png"
            alt="Blog 1"
            className="rounded-2xl w-full h-64 sm:h-72 md:h-80 object-cover mb-5"
          />
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 mb-3">
            <p className="text-center sm:text-left">👨‍⚕️ Doctor</p>
            <p className="text-center sm:text-right">
              <i className="fa-solid fa-calendar-days mr-1"></i> 24 Dec, 2023
            </p>
          </div>
          <h2 className="text-xl font-semibold text-[#1e293b] mb-2 text-center sm:text-left">
            In this section, we delve into various aspects of health
          </h2>
          <p className="text-gray-600 mb-4 text-center sm:text-left">
            Explore the world of medical specialties through our blog's spotlight feature.
            From cardiology to pediatrics, we share in-depth articles written by our expert physicians.
          </p>
          <div className="text-center sm:text-left">
            <button className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 text-white hover:from-lime-600 hover:to-lime-700 transition shadow-md">
              Read More <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </Motion.div>

        {/* Right Blog List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {[2, 3, 4].map((num, idx) => (
            <Motion.div
              key={num}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row md:items-center bg-white border border-gray-200 rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full sm:w-40 md:w-36 md:h-36 lg:w-50 lg:h-full h-52 shrink-0">
                <img
                  src={`/img/blog-${num}.png`}
                  alt={`Blog ${num}`}
                  className="w-full h-full object-cover sm:rounded-l-3xl"
                />
              </div>

              {/* Text */}
              <div className="flex-1 px-4 py-4 flex flex-col justify-between text-center md:text-left">
                <div>
                  <div className="flex flex-wrap justify-center md:justify-start items-center text-xs text-gray-500 space-x-4 mb-1">
                    <p className="flex items-center">
                      👨‍⚕️ <span className="ml-1">Doctor</span>
                    </p>
                    <p className="flex items-center">
                      <i className="fa-solid fa-calendar-days mr-1"></i> 24 Dec, 2023
                    </p>
                  </div>

                  <h3 className="text-md sm:text-lg font-semibold text-gray-800 leading-snug mb-1">
                    {num === 2 && 'Discover a treasure trove of practical tips for enhancing'}
                    {num === 3 && "Our patients' journeys are filled with courage and triumph."}
                    {num === 4 && 'From organizing health fairs to local partnerships'}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {num === 2 && "From nutrition advice to exercise routines, we’re here to support your journey."}
                    {num === 3 && "We share inspiring narratives of individuals overcoming health challenges."}
                    {num === 4 && "Find out how you can join community events and support wellness."}
                  </p>
                </div>

                <div className="mt-3">
                  <button className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 text-white hover:from-lime-600 hover:to-lime-700 transition shadow text-sm sm:text-base">
                    Read More <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
