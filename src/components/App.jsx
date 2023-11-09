import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Sidebar categories={categories} onSelectCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
