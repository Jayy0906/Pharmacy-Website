import React from "react";
import Layout from "../Component/Layout"; // Update path if Layout is elsewhere

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-[#1f2f1f] px-6 py-16 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#304d30] dark:text-lime-400 text-center mb-10">
            Get in Touch
          </h2>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 text-[#304d30] dark:text-gray-100">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="opacity-80">hello@example.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="opacity-80">+1 234 567 8901</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="opacity-80">123 Lime Street, GreenCity, Earth</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 bg-gray-50 dark:bg-[#2c3e2c] p-6 rounded-2xl shadow-xl">
              <div>
                <label className="block text-sm font-medium text-[#304d30] dark:text-gray-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#304d30] dark:text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#304d30] dark:text-gray-200 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <button
                type="submit"
                className="bg-lime-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-lime-800 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
