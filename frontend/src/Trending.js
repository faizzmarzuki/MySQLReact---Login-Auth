/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Trending() {
  // mock data for trending topics
  const topics = [
    { name: "#WorldCup", tweets: "1.2M" },
    { name: "#COVID19", tweets: "892K" },
    { name: "#Bing", tweets: "789K" },
    { name: "#React", tweets: "654K" },
    { name: "#TailwindCSS", tweets: "543K" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">Trending</h2>
      <ul className="mt-4 space-y-4">
        {topics.map((topic) => (
          <li key={topic.name} className="flex items-center justify-between">
            <a
              href="#"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              {topic.name}
            </a>
            <span className="text-sm text-gray-500">{topic.tweets} Tweets</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
