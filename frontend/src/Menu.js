/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
} from "react-icons/fa";

export default function Menu() {
  // mock data for menu items
  const items = [
    { name: "Home", icon: <FaHome /> },
    { name: "Explore", icon: <FaHashtag /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <FaTwitter className="text-4xl text-blue-600" />
      </div>
      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li key={item.name} className="flex items-center space-x-4">
            <span className="text-2xl text-gray-600">{item.icon}</span>
            <a
              href="#"
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
