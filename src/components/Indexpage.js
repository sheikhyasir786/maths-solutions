import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IndexpageData } from '../data/IndexpageData';
import SearchComponent from './SearchComponent'; // Import the SearchComponent
import './Indexpage.css';

function Indexpage() {
  const [filteredData, setFilteredData] = useState(IndexpageData); // State to store filtered data

  return (
    <div className="component-container">
      <div className="content-container">
        <div className="index-container">
          <h1 className="heading">Table of Contents</h1>
          
          {/* Render the SearchComponent and pass IndexpageData as prop */}
          <SearchComponent data={IndexpageData} setFilteredData={setFilteredData} />

          {/* Render the filtered data */}
          <ul>
            {filteredData.map((chapter) => (
              <li key={chapter.id}>
                <Link to={`/Chapter/${chapter.id}`}>{chapter.id}. {chapter.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Indexpage;
