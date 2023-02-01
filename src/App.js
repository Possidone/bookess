import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);
    const data = await response.json();
    setBooks(data.hits);
  };

  return (
    <div className='container'>
      <h1>Search inc</h1>
      <input className='search-bar' type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button className='search-button' onClick={handleSearch}>Pesquisar</button>
      <ul>
        {books.map(book => (
          <h4 key={book.objectID}>{book.title}</h4>
        ))}
      </ul>
    </div>
  );
}

export default App;
