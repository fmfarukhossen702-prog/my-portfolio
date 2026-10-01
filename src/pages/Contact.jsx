import React, { useState } from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoSend, IoCheckmarkCircle } from "react-icons/io5";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 md:p-12 text-white font-mono max-w-6xl mx-auto"
    >
      {/* Sub-heading */}
      <motion.h2
        variants={itemVariants}
        className="text-sm text-[#2effdcd6] mb-2"
      >
        // 03. CONTACT ME
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-extrabold font-syne mb-4 text-white tracking-tight"
      >
        Get In <span className="text-[#FF6FD8]">Touch</span>.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-[13px] text-[#ffffff86] leading-6 tracking-[0.5px] max-w-xl mb-8"
      >
        I am currently looking for new opportunities in Frontend Development and
        open to collaborate on exciting projects. Feel free to reach out
        anytime!
      </motion.p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Contact Cards & Socials */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-[#222222] border border-[#ffffff15] p-6 rounded-md space-y-5">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#272727] border border-[#ffffff15] rounded-md text-[#2effdcd6]">
                <MdEmail className="text-xl" />
              </div>
              <div>
                <p className="text-[10px] text-[#818181f6] uppercase font-bold tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:fmfarukhossen702@gmail.com"
                  className="text-xs text-white hover:text-[#2effdcd6] transition-colors"
                >
                  fmfarukhossen702@gmail.com
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#272727] border border-[#ffffff15] rounded-md text-[#25D366]">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <p className="text-[10px] text-[#818181f6] uppercase font-bold tracking-wider">
                  Phone / WhatsApp
                </p>
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-white hover:text-[#25D366] transition-colors"
                >
                  +880 1608795150
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#272727] border border-[#ffffff15] rounded-md text-[#FF6FD8]">
                <MdLocationOn className="text-xl" />
              </div>
              <div>
                <p className="text-[10px] text-[#818181f6] uppercase font-bold tracking-wider">
                  Location
                </p>
                <p className="text-xs text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xs font-bold text-white mb-3">
              // CONNECT WITH ME
            </h3>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="https://github.com/fmfarukhossen702-prog"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#222222] border border-[#ffffff15] px-4 py-2.5 rounded-md hover:border-[#2effdcd6] hover:text-[#2effdcd6] transition-all"
              >
                <FaGithub className="text-sm" /> GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#222222] border border-[#ffffff15] px-4 py-2.5 rounded-md hover:border-[#FF6FD8] hover:text-[#FF6FD8] transition-all"
              >
                <FaLinkedinIn className="text-sm" /> LinkedIn
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#222222] border border-[#ffffff15] px-4 py-2.5 rounded-md hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-all"
              >
                <FaTwitter className="text-sm" /> Twitter
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#222222] border border-[#ffffff15] px-4 py-2.5 rounded-md hover:border-[#4267B2] hover:text-[#4267B2] transition-all"
              >
                <FaFacebookF className="text-sm" /> Facebook
              </a>
            </div>
          </div>

          {/* Location Badge / Availability Status */}
          <div className="bg-[#222222] border border-[#ffffff15] p-4 rounded-md flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2effdcd6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2effdcd6]"></span>
            </span>
            <p className="text-xs text-[#ffffffa6]">
              Available for freelance work & full-time roles.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Interactive Form */}
        <motion.div variants={itemVariants}>
          <form
            onSubmit={handleSubmit}
            className="bg-[#222222] border border-[#ffffff15] p-6 rounded-md space-y-4 relative"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#2effdcd6]/10 border border-[#2effdcd6] p-3 rounded text-xs text-[#2effdcd6] flex items-center gap-2 mb-2"
              >
                <IoCheckmarkCircle className="text-lg" />
                Message sent successfully! I will reply soon.
              </motion.div>
            )}

            <div>
              <label className="block text-[11px] text-[#ffffff86] mb-1">
                // Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Faruk Hossen"
                className="w-full bg-[#1c1c1c] border border-[#ffffff15] rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#2effdcd6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] text-[#ffffff86] mb-1">
                // Your Email
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full bg-[#1c1c1c] border border-[#ffffff15] rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#2effdcd6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] text-[#ffffff86] mb-1">
                // Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full bg-[#1c1c1c] border border-[#ffffff15] rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#2effdcd6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] text-[#ffffff86] mb-1">
                // Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Hello Faruk, I'd like to discuss..."
                className="w-full bg-[#1c1c1c] border border-[#ffffff15] rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#2effdcd6] transition-colors resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#2effdcd6] text-[#070707] font-bold py-2.5 rounded text-xs cursor-pointer hover:bg-[#2effdce6] transition-colors"
            >
              Send Message <IoSend />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
