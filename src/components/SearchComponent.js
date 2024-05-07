import React, { useState} from 'react';

const SearchComponent = ({ data, setFilteredData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredData = data.filter(item => {
      // Check if item is a string before calling toLowerCase()
      if (typeof item.name === 'string') {
        return item.name.toLowerCase().includes(query.toLowerCase());
      }
      return false;
    });

    // Update the filtered data in parent component
    setFilteredData(filteredData);
  };

  return (
    <div class="search-component">
      <input
        class="search-box"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchComponent;
