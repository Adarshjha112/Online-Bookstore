import React from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';

const App = () => {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99 },
    // Add more book data as needed
  ];

  const handleSearch = (searchTerm) => {
    // Implement search functionality here
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;
