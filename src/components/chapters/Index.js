import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Exercise1IndexData } from '../../data/ExerciseData';
import './styles.css';


function Index() {
  const { id } = useParams(); // Using useParams hook to access the id parameter

  // Render content based on the id
  let content;
  if (id === '1') {
    content = (
      <div class="component-container">
        <div class="content-container">
           <div class="exercise-container">
           <h1 class="heading">1. REAL NUMBERS</h1>
            <ul>
                {Exercise1IndexData.map(item => (
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
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">2. POLYNOMIALS</h1>
          </div>
        </div>
      );
  } 
  
  else if (id === '3') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 3</h1>
          </div>
        </div>
      );
  }

  else if (id === '5') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 5</h1>
          </div>
        </div>
      );
  }

  else if (id === '6') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 6</h1>
          </div>
        </div>
      );
  }

  else if (id === '7') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 7</h1>
          </div>
        </div>
      );
  }

  else if (id === '8') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 8</h1>
          </div>
        </div>
      );
  }

  else if (id === '9') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 9</h1>
          </div>
        </div>
      );
  }

  else if (id === '10') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 10</h1>
          </div>
        </div>
      );
  }

  else if (id === '11') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 11</h1>
          </div>
        </div>
      );
  }

  else if (id === '12') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 12</h1>
          </div>
        </div>
      );
  }

  else if (id === '13') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 13</h1>
          </div>
        </div>
      );
  }

  else if (id === '14') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 14</h1>
          </div>
        </div>
      );
  }

  else if (id === '15') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 15</h1>
          </div>
        </div>
      );
  }

  else if (id === '16') {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 16</h1>
          </div>
        </div>
      );
  }

  else {
    content = (
        <div class="component-container">
          <div class="content-container">
              <h1 class="heading">Chapter 17</h1>
          </div>
        </div>
      );
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Index;
