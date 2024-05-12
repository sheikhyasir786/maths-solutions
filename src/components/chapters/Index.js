import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ChapterOneIndex } from '../../data/ExerciseData';
import './styles.css';
import Header from '../Header';


function Index() {
  const { id } = useParams(); // Using useParams hook to access the id parameter

  // Render content based on the id
  let content;
  if (id === '1') {
    content = (
      <div className="component-container">
        <div className="content-container">
           <div className="exercise-container">
           <h1 className="heading">1. REAL NUMBERS</h1>
            <ul>
                {ChapterOneIndex.map(item => (
                  <li key={item.id}>
                    <Link to={`/Exercise/${item.id}`}>{item.name}</Link>
                  </li>
                ))}
            </ul>
           </div>
        </div>
      </div>
    );
  } 
  
  else if (id === '2') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">2. POLYNOMIALS</h1>
          </div>
        </div>
      );
  } 
  
  else if (id === '3') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 3</h1>
          </div>
        </div>
      );
  }

  else if (id === '5') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 5</h1>
          </div>
        </div>
      );
  }

  else if (id === '6') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 6</h1>
          </div>
        </div>
      );
  }

  else if (id === '7') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 7</h1>
          </div>
        </div>
      );
  }

  else if (id === '8') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 8</h1>
          </div>
        </div>
      );
  }

  else if (id === '9') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 9</h1>
          </div>
        </div>
      );
  }

  else if (id === '10') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 10</h1>
          </div>
        </div>
      );
  }

  else if (id === '11') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 11</h1>
          </div>
        </div>
      );
  }

  else if (id === '12') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 12</h1>
          </div>
        </div>
      );
  }

  else if (id === '13') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 13</h1>
          </div>
        </div>
      );
  }

  else if (id === '14') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 14</h1>
          </div>
        </div>
      );
  }

  else if (id === '15') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 15</h1>
          </div>
        </div>
      );
  }

  else if (id === '16') {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 16</h1>
          </div>
        </div>
      );
  }

  else {
    content = (
        <div className="component-container">
          <div className="content-container">
              <h1 className="heading">Chapter 17</h1>
          </div>
        </div>
      );
  }

  return (
    <section>
      <Header />
      <div>
      {content}
    </div>
    </section>
    
  );
}

export default Index;
