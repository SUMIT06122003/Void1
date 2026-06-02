import React, { createContext, useMemo, useState } from 'react';
import productsData from '../data/products';
import { CATEGORIES } from '../utils/constants';

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const categories = useMemo(() => ['All', ...CATEGORIES], []);

  const getProductById = (id) => productsData.find((product) => product.id === id);

  return (
    <ProductContext.Provider
      value={{ products: productsData, filteredProducts, query, setQuery, activeCategory, setActiveCategory, categories, getProductById }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
