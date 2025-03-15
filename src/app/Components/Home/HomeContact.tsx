"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
    rideFrom: string;
    rideTo: string;
    time: string;
  }

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    rideFrom: "",
    rideTo: "",
    time: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    rideFrom: "",
    rideTo: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    const formErrors: Partial<FormData> = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.rideFrom) formErrors.rideFrom = "Ride From is required";
    if (!formData.rideTo) formErrors.rideTo = "Ride To is required";
    if (!formData.time) formErrors.time = "Time is required";
    setErrors(formErrors as FormData);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      try {
        // Replace with your Formspree endpoint
        const formspreeEndpoint = "https://formspree.io/f/xanenyrb";

        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000); // Hide after 5s
          setFormData({
            name: "",
            email: "",
            message: "",
            rideFrom: "",
            rideTo: "",
            time: "",
          });
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container relative flex min-h-screen mb-20">
      {/* Left side - Assistance Section */}
      <div className="w-full max-w-[600px] bg-[#07aae7] text-white p-6 hidden md:flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Want a Ride? Book Now!</h2>
        <p className="text-lg mb-4">
          We are always here to assist you with anything you need. Just drop us
          a message, and we’ll take care of the rest. Your comfort is our top
          priority, and we ensure a smooth and safe ride.
        </p>
        <p className="text-lg">
          Let us take care of your journey — from you, to your destination, with
          ease and professionalism.
        </p>
      </div>

      {/* Right side - Contact Form Section */}
      <div className="w-full flex items-center">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-6 w-full"
          >
            <h2 className="md:hidden block text-3xl font-bold mb-4 text-[#07aae7]">
              Want a Ride? Book Now!
            </h2>
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="name"
                placeholder="Enter your name"
                className={`border p-2 w-full rounded ${
                  errors.name ? "border-red-500" : ""
                }`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="Enter your email"
                className={`border p-2 w-full rounded ${
                  errors.email ? "border-red-500" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Ride From Input */}
            <div className="mb-4">
              <label
                htmlFor="rideFrom"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ride From:
              </label>
              <input
                type="text"
                name="rideFrom"
                value={formData.rideFrom}
                onChange={handleChange}
                id="rideFrom"
                placeholder="Enter your pickup location"
                className={`border p-2 w-full rounded ${
                  errors.rideFrom ? "border-red-500" : ""
                }`}
                required
              />
              {errors.rideFrom && (
                <p className="text-red-500 text-sm">{errors.rideFrom}</p>
              )}
            </div>

            {/* Ride To Input */}
            <div className="mb-4">
              <label
                htmlFor="rideTo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ride To:
              </label>
              <input
                type="text"
                name="rideTo"
                value={formData.rideTo}
                onChange={handleChange}
                id="rideTo"
                placeholder="Enter your drop-off location"
                className={`border p-2 w-full rounded ${
                  errors.rideTo ? "border-red-500" : ""
                }`}
                required
              />
              {errors.rideTo && (
                <p className="text-red-500 text-sm">{errors.rideTo}</p>
              )}
            </div>

            {/* Time Input */}
            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Choose Time
              </label>
              <input
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                id="time"
                className={`border p-2 w-full rounded ${
                  errors.time ? "border-red-500" : ""
                }`}
                required
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time}</p>
              )}
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                id="message"
                placeholder="Enter your message"
                className={`border p-2 w-full rounded ${
                  errors.message ? "border-red-500" : ""
                }`}
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#07aae7] text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="w-16 h-16 bg-[#07aae7] text-white flex items-center justify-center rounded-full text-2xl"
            >
              ✓
            </motion.div>
            <h2 className="text-xl font-bold mt-4">Thank You!</h2>
            <p className="text-gray-600 text-center">
              Your message has been received. We will get back to you soon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-[#07aae7] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Another Response
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;