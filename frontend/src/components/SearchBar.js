import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" placeholder="Search books..." onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
