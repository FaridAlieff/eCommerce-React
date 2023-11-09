import React from 'react';

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className="bg-gray-100 p-4 w-64 min-h-screen">
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2 text-gray-700 hover:text-gray-900">
          <button
          onClick={() => onSelectCategory(category)}
          className="text-left w-full text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          {category}
        </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
