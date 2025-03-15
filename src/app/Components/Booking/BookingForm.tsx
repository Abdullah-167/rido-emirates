"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Clock } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    rideFrom: "",
    rideTo: "",
    date: new Date(),
    time: "",
    rideType: "private",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData({ ...formData, date });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Formspree endpoint (replace with your Formspree form ID)
    const formspreeEndpoint = "https://formspree.io/f/xanenyrb";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your booking has been submitted.");
        setFormData({
          name: "",
          phoneNo: "",
          rideFrom: "",
          rideTo: "",
          date: new Date(),
          time: "",
          rideType: "private",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-40 pb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Ride</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone No
          </label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Ride From Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Ride From
          </label>
          <input
            type="text"
            name="rideFrom"
            value={formData.rideFrom}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter pickup location"
            required
          />
        </div>

        {/* Ride To Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Ride To
          </label>
          <input
            type="text"
            name="rideTo"
            value={formData.rideTo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter drop-off location"
            required
          />
        </div>

        {/* Date Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <div className="relative">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Ride Type Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Ride Type
          </label>
          <div className="mt-1">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="rideType"
                value="private"
                checked={formData.rideType === "private"}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Private</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rideType"
                value="shared"
                checked={formData.rideType === "shared"}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Shared</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}