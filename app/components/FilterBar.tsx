'use client';

import { useState } from 'react';

const categories = [
  { id: 'omg', label: 'OMG!', icon: '👽' },
  { id: 'beaches', label: 'Beaches', icon: '🏖️' },
  { id: 'pools', label: 'Amazing Pools', icon: '🏊' },
  { id: 'islands', label: 'Islands', icon: '🏝️' },
  { id: 'arctic', label: 'Arctic', icon: '❄️' },
  { id: 'tiny', label: 'Tiny Homes', icon: '🏠' },
  { id: 'design', label: 'Design', icon: '🎨' },
  { id: 'cabins', label: 'Cabins', icon: '🪵' },
  { id: 'lake', label: 'Lakefront', icon: '🛶' },
  { id: 'surfing', label: 'Surfing', icon: '🏄' },
  { id: 'camping', label: 'Camping', icon: '⛺' },
  { id: 'golf', label: 'Golfing', icon: '⛳' },
  { id: 'farms', label: 'Farms', icon: '🚜' },
];

export default function FilterBar() {
  const [selected, setSelected] = useState('omg');

  return (
    <div className="border-b bg-white sticky top-[80px] z-40">
      <div className="container mx-auto px-4 pt-4">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelected(category.id)}
              className={`flex flex-col items-center gap-2 min-w-[64px] transition cursor-pointer group ${
                selected === category.id
                  ? 'text-black border-b-2 border-black pb-2'
                  : 'text-gray-500 hover:text-black hover:border-b-2 hover:border-gray-300 pb-2 border-b-2 border-transparent'
              }`}
            >
              <span className="text-2xl group-hover:scale-110 transition">{category.icon}</span>
              <span className="text-xs font-medium whitespace-nowrap">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

