import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search hymns..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;

