"use client";
import React from "react";

const AdminNav = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Blaze News Admin</h1>
      <ul className="flex space-x-6">
        <li><a href="/admin/dashboard" className="hover:text-red-400">Dashboard</a></li>
        <li><a href="/admin/settings" className="hover:text-red-400">Settings</a></li>
        <li><a href="/admin/logout" className="hover:text-red-400">Logout</a></li>
      </ul>
    </nav>
  );
};

export default AdminNav;
