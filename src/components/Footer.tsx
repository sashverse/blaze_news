/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // replace with your Blaze News logo
              alt="Blaze News Logo"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-extrabold text-red-600">
              Blaze <span className="text-white">News</span>
            </h2>
          </div>
          <p className="mt-4 text-sm leading-6">
            Blaze News brings you the latest updates on crime, investigations, 
            politics, and world affairs with blazing-fast and unbiased reporting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/crime" className="hover:text-red-500 transition">Crime</a></li>
            <li><a href="/investigations" className="hover:text-red-500 transition">Investigations</a></li>
            <li><a href="/politics" className="hover:text-red-500 transition">Politics</a></li>
            <li><a href="/admin" className="hover:text-red-500 transition">Admin</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/local" className="hover:text-red-500 transition">Local News</a></li>
            <li><a href="/videos" className="hover:text-red-500 transition">Videos</a></li>
            <li><a href="/opinion" className="hover:text-red-500 transition">Opinions</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact Us</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for the latest crime & breaking news.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md focus:outline-none text-black text-sm"
            />
            <button
              type="submit"
              className="bg-red-600 px-4 py-2 rounded-r-md text-white font-medium hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-red-500"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-500"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Blaze News. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
