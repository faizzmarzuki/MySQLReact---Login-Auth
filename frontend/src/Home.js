import React from 'react'
import Trending from './Trending'
import Menu from "./Menu";
import Content from "./Content"

function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-white border-r">
        <Menu />
      </div>
      <div className="w-1/2 p-4 overflow-y-auto">
        <Content/>
      </div>
      <div className="w-1/4 bg-white border-l">
        <Trending />
      </div>
    </div>
  );
}

export default Home