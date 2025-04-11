import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FlaskConical,
  BriefcaseMedical,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
} from "lucide-react";
import Layout from "./Layout";

const services = [
  {
    icon: <FlaskConical className="w-8 h-8 text-lime-600 dark:text-lime-400" />,
    title: "Pharmaceutical Manufacturing",
    description:
      "WHO-GMP certified production of tablets, capsules, injectables, and more using state-of-the-art facilities.",
  },
  {
    icon: (
      <BriefcaseMedical className="w-8 h-8 text-lime-600 dark:text-lime-400" />
    ),
    title: "Research & Development",
    description:
      "Innovative R&D pipeline focused on affordable generics and novel drug delivery systems.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-lime-600 dark:text-lime-400" />,
    title: "Regulatory Compliance",
    description:
      "End-to-end support with documentation, dossier filing, and regulatory audits globally.",
  },
  {
    icon: <Truck className="w-8 h-8 text-lime-600 dark:text-lime-400" />,
    title: "Global Distribution",
    description:
      "Trusted logistics network to ensure timely and secure delivery to over 50+ countries.",
  },
];

const faqs = [
  {
    question: "Are your products WHO-GMP certified?",
    answer:
      "Yes, all our manufacturing units comply with WHO-GMP standards ensuring quality, safety, and efficacy.",
  },
  {
    question: "Do you provide custom formulation services?",
    answer:
      "Absolutely. We collaborate on developing tailored pharmaceutical formulations based on client needs.",
  },
  {
    question: "Can you support regulatory submissions in the EU and US?",
    answer:
      "Yes. We offer full regulatory documentation and support for markets across Europe and the Americas.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="bg-white dark:bg-[#1f2f1f] text-[#304d30] dark:text-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* HEADER */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-lime-700 dark:text-lime-400">
              Our Services
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Comprehensive pharmaceutical solutions from formulation to global
              supply, built on trust and excellence.
            </p>
          </Motion.div>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-lime-50 dark:bg-[#2c3e2c] rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </Motion.div>
            ))}
          </div>

          {/* FAQ SECTION */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-lime-700 dark:text-lime-400 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border rounded-lg bg-lime-50 dark:bg-[#2c3e2c]"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
                  >
                    <span>{faq.question}</span>
                    {activeIndex === i ? (
                      <Minus className="text-lime-700 dark:text-lime-400" />
                    ) : (
                      <Plus className="text-lime-700 dark:text-lime-400" />
                    )}
                  </button>
                  {activeIndex === i && (
                    <Motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      className="px-6 pb-4 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {faq.answer}
                    </Motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* INQUIRY FORM */}
          <div className="mt-20 bg-lime-100 dark:bg-[#304d30] rounded-xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-lime-800 dark:text-lime-300 mb-6">
              Service Inquiry Form
            </h2>
            <form className="grid gap-6 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-md bg-white dark:bg-[#3f513f] text-gray-800 dark:text-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-md bg-white dark:bg-[#3f513f] text-gray-800 dark:text-white placeholder-gray-500"
              />
              <textarea
                rows="4"
                placeholder="Describe your service requirement..."
                className="p-3 rounded-md bg-white dark:bg-[#3f513f] text-gray-800 dark:text-white placeholder-gray-500"
              ></textarea>
              <button
                type="submit"
                className="bg-lime-700 hover:bg-lime-800 text-white font-semibold py-3 rounded-md"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
