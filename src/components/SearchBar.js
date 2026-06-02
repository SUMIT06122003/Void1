import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ value, onChange, placeholder = 'Search products' }) => (
  <label className="search-control">
    <BiSearch size={20} className="search-icon" />
    <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
  </label>
);

export default SearchBar;
