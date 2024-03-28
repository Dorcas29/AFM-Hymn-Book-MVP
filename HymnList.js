import React from 'react';

const HymnList = ({ hymns }) => {
  return (
    <div>
      <h2>Hymn List</h2>
      <ul>
        {hymns.map(hymn => (
          <li key={hymn.id}>{hymn.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HymnList;

