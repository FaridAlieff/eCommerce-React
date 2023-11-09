import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
