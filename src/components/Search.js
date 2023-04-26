import React, { useState } from 'react';
import './Search.css'

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term, e.g. fetch data from an API
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className='search-input'  value={searchTerm} onChange={handleInputChange} />
    </form>
  );
}

export default Search;