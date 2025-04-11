import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialMedia = [
    {
      icon: "fa-facebook-f",
      link: "https://facebook.com",
      bg: "hover:bg-[#1877F2]",
    },
    {
      icon: "fa-linkedin-in",
      link: "https://linkedin.com",
      bg: "hover:bg-[#0A66C2]",
    },
    {
      icon: "fa-instagram",
      link: "https://instagram.com",
      bg: "hover:bg-[#E1306C]",
    },
    {
      icon: "fa-youtube",
      link: "https://youtube.com",
      bg: "hover:bg-[#FF0000]",
    },
  ];

  return (
    <footer className="bg-[#1b2d24] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.3)] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="mb-2 flex items-start">
            <i className="fa-solid fa-location-dot mr-2 text-lime-400 pt-1" />
            123 Road, Ahmedabad, Gujarat, India
          </p>
          <p className="mb-2 flex items-center">
            <i className="fa-solid fa-phone mr-2 text-lime-400" />
            +918200712345
          </p>
          <p className="mb-2 flex items-center">
            <i className="fa-solid fa-envelope mr-2 text-lime-400" />
            xyz@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          {["Home", "About", "Services", "Careers", "Contact"].map((link) => (
            <p
              key={link}
              className="mb-2 hover:text-lime-400 transition cursor-pointer"
            >
              {link}
            </p>
          ))}
        </div>

        {/* Specialties */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Specialties</h2>
          {[
            "Anesthesiology",
            "Psychiatry",
            "General surgery",
            "Family medicine",
            "Pediatrics",
          ].map((item) => (
            <p
              key={item}
              className="mb-2 hover:text-lime-400 transition cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          {["Medical", "Operation", "Laboratory", "ICU", "Patient Ward"].map(
            (service) => (
              <p
                key={service}
                className="mb-2 hover:text-lime-400 transition cursor-pointer"
              >
                {service}
              </p>
            )
          )}
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-3 flex-wrap">
            {socialMedia.map(({ icon, link, bg }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#2e473c] text-white transition-all duration-300 shadow-md ${bg}`}
              >
                <i className={`fa-brands ${icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm text-gray-400">
        © {year} Patel's Demo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
