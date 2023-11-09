import React from 'react';

const ProductItem = ({ product }) => {
  return (
<div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <img className="w-full h-48 lg:h-auto object-cover rounded" src={product.image} alt={product.title} />
      <div className="mt-3">
        <p className="text-gray-900 font-bold text-xl mb-2">{product.title}</p>
        <p className="text-gray-700 text-base">{product.description.substring(0, 100)}...</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{product.category}</p>
        <p className="text-gray-600">{product.price}$</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-auto">
        Add to Cart
      </button>
    </div>
  </div>
</div>
  );
};

export default ProductItem;
