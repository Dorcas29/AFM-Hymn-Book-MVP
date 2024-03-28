import React, { useState } from 'react';
import Header from './components/Header';
import HymnList from './components/HymnList';
import HymnDetail from './components/HymnDetail';
import SearchBar from './components/SearchBar';
import hymnsData from './data/hymns.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHymn, setSelectedHymn] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredHymns = hymnsData.filter(hymn =>
    hymn.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <div className="container">
        <HymnList hymns={filteredHymns} />
        {selectedHymn && <HymnDetail hymn={selectedHymn} />}
      </div>
    </div>
  );
}

export default App;

