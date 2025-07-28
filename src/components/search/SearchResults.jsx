import React, { useEffect, useState } from 'react';
import './search.css';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Mock search: Replace with actual logic
    const dummyResults = [
      { id: 1, title: `Result for ${query} 1`, summary: 'Summary 1' },
      { id: 2, title: `Result for ${query} 2`, summary: 'Summary 2' },
      { id: 3, title: `Result for ${query} 3`, summary: 'Summary 3' },
    ];
    setResults(dummyResults);
  }, [query]);

  return (
    <div className='search-results'>
      <h2>Search Results for "{query}"</h2>
      <ul>
        {results.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
