import React from 'react';
import { Link } from 'react-router-dom';
import './Frontpage.css';
import Header from './Header';
function Frontpage() {
  return (
   <seciton>
    <Header />
     <div class="component-container">
        <div class="content-container">
           <div class="frontpage-content">
            <div class="top-content">
                    <h1 class="header">mathematics</h1>
                    <h3 class="sub-heading">Solutions For Class 10th</h3>
                </div>
                <Link to="/indexpage">
                    <button class="button">Click Here To Continue</button>
                </Link>
                <div class="bottom-content">
                    <h2 class="bottom-heading">Jammu and Kashmir <br/>Board of School Education</h2>
                </div>
           </div>
        </div>
    </div>
   </seciton>
  )
}

export default Frontpage