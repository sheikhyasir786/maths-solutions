import React from 'react'
import './Indexpage.css';
import { Link } from 'react-router-dom';
import { IndexpageData } from '../data/IndexpageData'; 
function Indexpage() {
  return (
    <div class="component-container">
        <div class="content-container">
           <div class="index-container">
                <h1 class="heading">Table of Contents</h1>
                <ul>
                    {IndexpageData.map((chapter) => (
                    <li key={chapter.id}>
                        <Link to={`/Chapter/${chapter.id}`}>{chapter.id}. {chapter.name}</Link>
                    </li>
                    ))}
                </ul>
           </div>
        </div>
    </div>
  )
}

export default Indexpage