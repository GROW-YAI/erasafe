import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../ui/Input";
import Button from "../ui/button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // { ok: boolean, msg: string }
  const [sending, setSending] = useState(false);

  const validate = () => {
    if (!name.trim()) return { ok: false, msg: "Please enter your name." };
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return { ok: false, msg: "Please enter a valid email." };
    if (!message.trim()) return { ok: false, msg: "Please enter a message." };
    return { ok: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const v = validate();
    if (!v.ok) {
      setStatus({ ok: false, msg: v.msg });
      return;
    }

    // Simulate sending (replace with API call later)
    setSending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus({ ok: true, msg: "Message sent — thanks! We'll respond soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong. Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-green mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:flex">
          {/* Left: Contact Details */}
          <div className="md:w-1/3 bg-gray-50 p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-green">Get in touch</h3>
            <p className="text-sm text-gray-600">
              For enquiries, demos or partnership opportunities contact us directly.
            </p>

            <div className="mt-2 space-y-3">
              <div>
                <span className="block text-xs text-gray-500">Phone</span>
                <a href="tel:0549690331" className="text-gray-800 font-medium hover:text-orange transition-colors">
                  0549690331
                </a>
              </div>

              <div>
                <span className="block text-xs text-gray-500">Email</span>
                <a href="mailto:eluzaidemakpor@gmail.com" className="text-gray-800 font-medium hover:text-orange transition-colors">
                  eluzaidemakpor@gmail.com
                </a>
              </div>

              
            </div>

            
          </div>

          {/* Right: Form */}
          <div className="md:w-2/3 p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Contact form">
              <label className="sr-only" htmlFor="contact-name">Your name</label>
              <Input
                id="contact-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="sr-only" htmlFor="contact-email">Your email</label>
              <Input
                id="contact-email"
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="sr-only" htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green"
                aria-required="true"
              />

              {status && (
                <div
                  role={status.ok ? "status" : "alert"}
                  className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}
                >
                  {status.msg}
                </div>
              )}

              <div className="flex items-center gap-4">
                <Button type="submit" className="px-6" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </Button>

                <button
                  type="button"
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setStatus(null);
                  }}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors focus:outline-none"
                >
                  Clear
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                By contacting us you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
