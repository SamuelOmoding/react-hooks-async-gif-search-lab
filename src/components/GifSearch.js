import React, { useState } from 'react';

function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{
    }}>
      <p style={{
        fontSize: '2.5rem',
        marginBottom: '0',
        fontWeight: 'bold'
      }}>Enter a Search Term</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          borderRadius: '1rem',
          border: '1px solid #676ff0',
          padding: '0.5rem',
          fontSize: '1.2rem',
          marginBottom: '1rem'
        }}
      />
      <button type="submit" style={{
        borderRadius: '1rem',
        border: 'none',
        padding: '0.5rem 2rem',
        fontSize: '1.2rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
        display: 'flex'
      }}>Find Gifs</button>
    </form>
  );
}

export default GifSearch;