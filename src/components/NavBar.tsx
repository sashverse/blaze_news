/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import React, { useState } from "react";
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react";

const mockArticles = [
  { id: 1, title: "Crime in Delhi: Shocking Update", description: "Latest update on the ongoing crime case in Delhi...", image: "/crime1.jpg" },
  { id: 2, title: "Political Scandal Rocks Parliament", description: "New scandal involving top politicians...", image: "/politics1.jpg" },
  { id: 3, title: "International Crime Syndicate Busted", description: "Interpol cracks down on major crime ring...", image: "/world1.jpg" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = mockArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
    // ✅ Get today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm px-4 py-1 flex justify-between items-center">
        <span className="font-semibold">Breaking: Major Crime Updates Live 🚨</span>
        <span className="hidden md:block">{formattedDate}</span>
      </div>

      {/* Main Nav */}
      <nav className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Blaze News Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl font-extrabold text-red-600 tracking-wide">
            Blaze <span className="text-black">News</span>
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8 text-base font-medium text-gray-700">
          <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
          <li><a href="/crime" className="hover:text-red-600 transition">Crime</a></li>
          <li><a href="/investigations" className="hover:text-red-600 transition">Investigations</a></li>
          <li><a href="/politics" className="hover:text-red-600 transition">Politics</a></li>
          {/* <li>
            <a href="/world" className="hover:text-red-600 transition flex items-center gap-1">
              World <ChevronDown size={16} />
            </a>
          </li> */}
          <li><a href="/videos" className="hover:text-red-600 transition">Videos</a></li>
          <li><a href="/contact" className="hover:text-red-600 transition">Contact</a></li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="w-5 h-5 text-gray-700 hover:text-red-600 transition" />
          </button>
          <button aria-label="Language">
            <Globe className="w-5 h-5 text-gray-700 hover:text-red-600 transition" />
          </button>

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

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-base font-medium text-gray-700">
            <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="/crime" className="hover:text-red-600 transition">Crime</a></li>
            <li><a href="/investigations" className="hover:text-red-600 transition">Investigations</a></li>
            <li><a href="/politics" className="hover:text-red-600 transition">Politics</a></li>
            {/* <li>
              <a href="/world" className="hover:text-red-600 transition flex items-center gap-1">
                World <ChevronDown size={16} />
              </a>
            </li> */}
            <li><a href="/videos" className="hover:text-red-600 transition">Videos</a></li>
            <li><a href="/contact" className="hover:text-red-600 transition">Contact</a></li>
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
                filteredArticles.map(article => (
                  <div key={article.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                    <img src={article.image} alt={article.title} className="w-full h-32 object-cover rounded-md mb-2" />
                    <h2 className="font-bold text-lg text-red-600">{article.title}</h2>
                    <p className="text-gray-600 text-sm">{article.description}</p>
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
