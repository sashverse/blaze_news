"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 mt-16 py-12">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-red-600 text-center mb-6">
          Contact Blaze <span className="text-black">News</span>
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have a story, tip, or just want to get in touch? Fill the form below or reach us via email.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Extra Contact Info */}
        <div className="text-center mt-10">
          <p className="text-gray-600">Or reach us directly at:</p>
          <p className="font-semibold text-red-600">contact@blazenews.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
