/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useState } from "react";
import { Menu, X, PlayCircle } from "lucide-react";

const mockArticles = [
  {
    id: 1,
    title: "Crime in Delhi: Shocking Update",
    description: "Latest update on the ongoing crime case in Delhi...",
    image: "/crime1.jpg",
  },
  {
    id: 2,
    title: "Political Scandal Rocks Parliament",
    description: "New scandal involving top politicians...",
    image: "/politics1.jpg",
  },
  {
    id: 3,
    title: "International Crime Syndicate Busted",
    description: "Interpol cracks down on major crime ring...",
    image: "/world1.jpg",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = mockArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Main Nav */}
      <nav className="flex justify-between items-center px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/full_logo.png"
            alt="Blaze News Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-extrabold text-red-600 tracking-wide">
            Blaze <span className="text-black">News</span>
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base font-medium text-gray-700">
          <li>
            <a href="/" className="hover:text-red-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-600 transition">
              India
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-600 transition">
              Crime
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-600 transition">
              Politics
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-600 transition">
              Sports
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-600 transition">
              Entertainment
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-600 transition">
              World
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-600 transition">
              contact
            </a>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Location Dropdown */}
          <select className="hidden md:block border rounded-md text-sm px-2 py-1">
            <option>India</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
            <option>Bengaluru</option>
            <option>Kolkata</option>
          </select>
 
          {/* Live TV Button */}
          <a
            href="https://www.youtube.com/@Blazenewsmedia"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 text-sm"
          >
            <PlayCircle size={16} /> Live TV
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-base font-medium text-gray-700">
            <li>
              <a href="/" className="hover:text-red-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600 transition">
                India
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600 transition">
                Crime
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600 transition">
                Politics
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600 transition">
                Sports
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600 transition">
                Entertainment
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600 transition">
                World
              </a>
            </li>
            <li>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-600 transition">
                Contact
              </a>
            </li>
            <li>
              <select className="w-full border rounded-md text-sm px-2 py-1">
                <option>India</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Hyderabad</option>
                <option>Bengaluru</option>
                <option>Kolkata</option>
              </select>
            </li>
            <li>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
              >
                <PlayCircle size={18} /> Live TV
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Search UI */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-50 shadow-lg border-t px-6 py-4 z-40">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Search Results */}
          {searchQuery && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h2 className="font-bold text-lg text-red-600">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {article.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 mt-2">No results found.</p>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
