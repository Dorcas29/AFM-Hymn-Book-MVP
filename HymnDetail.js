import React from 'react';

const HymnDetail = ({ hymn }) => {
  return (
    <div>
      <h2>{hymn.title}</h2>
      <p>{hymn.lyrics}</p>
    </div>
  );
}

export default HymnDetail;

