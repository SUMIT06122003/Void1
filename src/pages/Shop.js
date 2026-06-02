import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ProductContext from '../context/ProductContext';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { categories, activeCategory, setActiveCategory, filteredProducts, query, setQuery } = useContext(ProductContext);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="page-section">
        <div className="section-heading">
          <div>
            <h2 className="section-title">Shop VOID Collection</h2>
            <p className="section-subtitle">Premium activewear engineered for peak performance at original Indian prices.</p>
          </div>
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              className={category === activeCategory ? 'category-pill active' : 'category-pill'}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="empty-state card">
          <h3>No products found</h3>
          <p>Try adjusting your search or browsing a different category to discover our full range.</p>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid-gap product-grid"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Shop;
