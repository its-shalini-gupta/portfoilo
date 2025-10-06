import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);  // to show loading status

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendMail = () => {
    if (!validateForm()) return;

    const { name, email, message } = form;

    setSending(true); // Start sending

    const serviceID = "service_bkpx2hg";  // Replace with your EmailJS service ID
    const templateID = "template_z6rk4go"; // Replace with your EmailJS template ID
    const publicKey = "oi1n15oS2Qrw4d-p4";  // Replace with your EmailJS public key

    // Send email via EmailJS
    emailjs
      .send(serviceID, templateID, {
        name: name,
        email: email,
        message: message,
      }, publicKey)
      .then(
        (response) => {
          console.log("Success:", response);
          setSending(false);
          alert("Message sent successfully!");  // Notify user of success
          setForm({ name: "", email: "", message: "" });  // Clear form
        },
        (error) => {
          console.error("Error:", error);
          setSending(false);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-8 py-16 bg-sectionBg dark:bg-darkCardBg transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center text-accentLight dark:text-accentDark mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-xl mx-auto bg-navbar dark:bg-darkCardBg p-8 rounded-xl shadow-lg space-y-4 transition-all duration-700 animate-fadeIn"
      >
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-md border border-mutedLight dark:border-mutedDark bg-sectionBg dark:bg-darkBg text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Recipient Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-md border border-mutedLight dark:border-mutedDark bg-sectionBg dark:bg-darkBg text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded-md border border-mutedLight dark:border-mutedDark bg-sectionBg dark:bg-darkBg text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleSendMail}
          className="w-full py-3 bg-btnBgLight text-white font-semibold rounded-lg hover:scale-105 hover:bg-[#e67617] dark:bg-btnBgDark dark:text-textDark dark:hover:bg-[#e0a240] transition-all duration-300"
          disabled={sending}  // Disable button while sending
        >
          {sending ? "Sending..." : "Send via Email"}
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mt-10 animate-fadeIn">
        <a
          href="https://www.instagram.com/its_._shalini?igsh=MXh4ZHVmZDyzlwMa=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E4405F] text-2xl hover:scale-125 transition-transform duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/1ALq8zNbwb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] text-2xl hover:scale-125 transition-transform duration-300"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/its-shalini-gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#181717] dark:text-white text-2xl hover:scale-125 transition-transform duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shalini-gupta-7002a51a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] text-2xl hover:scale-125 transition-transform duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </section>
  );
};

export default Contact;
