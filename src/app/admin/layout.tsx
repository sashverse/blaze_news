// app/admin/layout.tsx
import React from "react";

export const metadata = {
  title: "Admin | Blaze News",
  description: "Admin login and dashboard for Blaze News",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
