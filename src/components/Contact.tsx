// components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const endpoint = "https://formspree.io/f/mkoywlwq";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-faint dark:bg-gray-800 px-6 md:px-12"
    >
      <div className="max-w-xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-primary"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-primary"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-primary resize-none"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="mt-3 text-green-600">
              ✅ Message sent! I’ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-red-600">
              ❗ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
