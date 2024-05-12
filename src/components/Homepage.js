import React from 'react';
import { Link } from 'react-router-dom';
import './Frontpage.css';
import Header from './Header';
function Homepage() {
  return (
   <seciton>
    <Header />
    <div className="component-container">
        <div className="content-container">
           <div className="frontpage-content">
            <div className="top-content">
                <h1 className="header">mathematics</h1>
                <h3 className="sub-heading">Solutions For className 10th</h3>
            </div>
             <Link to="/indexpage">
                <button className="button">Click Here To Continue</button>
             </Link>
             <div className="bottom-content">
                 <h2 className="bottom-heading">Jammu and Kashmir <br/>Board of School Education</h2>
             </div>
            </div>
        </div>
    </div>
   </seciton>
  )
}

export default Homepage;