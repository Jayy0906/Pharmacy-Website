// MailPopup.jsx
import React from "react";

const MailPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose} // closes when clicking outside the box
    >
      <div
        className="bg-white dark:bg-[#2d2d2d] p-6 rounded-xl shadow-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Send us a message
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
          />
          <textarea
            placeholder="Your message"
            rows="5"
            className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-lime-700 text-white py-2 rounded hover:bg-lime-800 transition"
          >
            Send
          </button>
          <button
            type="button"
            className="text-sm text-gray-500 mt-2 hover:underline"
            onClick={onClose}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailPopup;
