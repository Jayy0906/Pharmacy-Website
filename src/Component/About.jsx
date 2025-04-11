import React from "react";
import Layout from "../Component/Layout"; // Adjust this path if needed
import { motion as Motion } from "framer-motion";
import { Star } from "lucide-react";

const achievements = [
  {
    year: "2010",
    title: "Founded",
    description:
      "Started operations with a mission to make essential medicines affordable.",
  },
  {
    year: "2013",
    title: "ISO & GMP Certified",
    description:
      "Achieved global manufacturing certifications for quality and safety.",
  },
  {
    year: "2017",
    title: "Expanded R&D",
    description:
      "Established advanced R&D center focusing on generic and novel therapies.",
  },
  {
    year: "2021",
    title: "50+ Global Exports",
    description:
      "Products shipped to over 50 countries with regulatory approvals.",
  },
];

const testimonials = [
  {
    name: "Dr. Anjali Menon",
    feedback:
      "Their commitment to compliance and product quality is unmatched. One of the most trustworthy pharma partners.",
    org: "HealthCare India",
  },
  {
    name: "John D.",
    feedback:
      "We’ve worked with them for years. Outstanding support and consistent supply chain. Highly recommend.",
    org: "PharmaLink Europe",
  },
];

const logos = [
  "/img/logo1.png",
  "/img/logo2.png",
  "/img/logo3.png",
  "/img/logo4.png",
]; // Replace with actual client logos

const About = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-[#1f2f1f] text-[#304d30] dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
          {/* Intro */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-lime-700 dark:text-lime-400">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
              Advancing global healthcare with innovation, quality, and
              integrity.
            </p>
          </Motion.div>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-lime-600 dark:text-lime-300 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide safe, affordable, and high-quality medications that
                enhance life expectancy and health outcomes globally.
              </p>
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-lime-600 dark:text-lime-300 mb-3">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the most trusted pharmaceutical partner globally,
                recognized for ethical practices, innovation, and impact.
              </p>
            </Motion.div>
          </div>

          {/* Timeline / Achievements */}
          <div className="space-y-10">
            <h2 className="text-3xl font-semibold text-center text-lime-600 dark:text-lime-300">
              Milestones
            </h2>
            <div className="space-y-8 relative border-l-4 border-lime-500 dark:border-lime-400 pl-6">
              {achievements.map((a, i) => (
                <Motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-3 top-1 w-5 h-5 bg-lime-600 dark:bg-lime-400 rounded-full shadow-md" />
                  <h3 className="text-xl font-semibold">
                    {a.year} — {a.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {a.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-lime-600 dark:text-lime-300 text-center">
              Meet Our Experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              {["Dr. Neha Sharma", "Mr. Rohan Mehta", "Dr. Alok Verma"].map(
                (name, idx) => (
                  <div
                    key={idx}
                    className="bg-lime-50 dark:bg-[#2c3e2c] rounded-xl p-6 shadow hover:shadow-lg transition text-center"
                  >
                    <div className="h-24 w-24 rounded-full bg-gray-300 dark:bg-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium">{name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {idx === 0
                        ? "Chief Scientist"
                        : idx === 1
                        ? "Operations Head"
                        : "Regulatory Officer"}
                    </p>
                  </div>
                )
              )}
            </div>
          </Motion.div>

          {/* Testimonials */}
          <div className="space-y-12">
            <h2 className="text-3xl font-semibold text-center text-lime-600 dark:text-lime-300">
              What Our Partners Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <Motion.div
                  key={i}
                  className="bg-lime-50 dark:bg-[#2c3e2c] p-6 rounded-xl shadow-md space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    “{t.feedback}”
                  </p>
                  <div className="text-sm font-medium text-right">
                    — {t.name},{" "}
                    <span className="text-lime-700 dark:text-lime-400">
                      {t.org}
                    </span>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Client Logos */}
          <div className="pt-16">
            <h2 className="text-3xl font-semibold text-center text-lime-600 dark:text-lime-300 mb-8">
              Trusted By
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {logos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Client ${i + 1}`}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
