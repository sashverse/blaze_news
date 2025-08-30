// app/admin/login/page.tsx
"use client";
import React from "react";

const AdminLogin = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
