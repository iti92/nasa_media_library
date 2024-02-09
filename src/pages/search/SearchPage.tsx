import React, { useState } from 'react';
// import axios from 'axios';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Validate input data here (basic validation)

    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${query}&media_type=image&year_start=${yearStart}&year_end=${yearEnd}`
      );
      const data = await response.json();
      setResults(data.data.collection.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const handleItemClick = (item) => {
  //   history.push(`/show/${item.data[0].nasa_id}`);
  // };

  return (
    <div>
      <h1>Search Page</h1>
      <div>
        <label>
          Query:
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <label>
          Year Start:
          <input type="number" value={yearStart} onChange={(e) => setYearStart(e.target.value)} />
        </label>
        <label>
          Year End:
          <input type="number" value={yearEnd} onChange={(e) => setYearEnd(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {/* {results.map((item) => (
          <div key={item.data[0].nasa_id} onClick={() => handleItemClick(item)}>
            <img src={item.links[0].href} alt={item.data[0].title} />
            <p>Title: {item.data[0].title}</p>
            <p>Location: {item.data[0].location}</p>
            <p>Photographer: {item.data[0].photographer}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SearchPage;
