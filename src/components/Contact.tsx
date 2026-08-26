"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Have a question, data engineering opportunity, or project in mind? Reach out directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm">
          <a
            href="mailto:shawnmugambi1@gmail.com"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition"
          >
            <FaEnvelope className="text-primary" size={16} />
            <span className="underline">shawnmugambi1@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/shawnmugambi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition"
          >
            <FaLinkedin className="text-primary" size={16} />
            <span className="underline">LinkedIn Profile</span>
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 bg-faint dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-sm"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}