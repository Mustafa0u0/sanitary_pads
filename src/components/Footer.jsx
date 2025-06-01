import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} EcoPads. All rights reserved.
      </div>
    </footer>
  );
}