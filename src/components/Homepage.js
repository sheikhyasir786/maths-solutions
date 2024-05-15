import React from 'react';
import { Link } from 'react-router-dom';
import HomepageHeroDesktop from '../assets/HomepageHero.png';
import HomepageHeroMobile from '../assets/homepageheromobile.png';
import './Homepage.css';
import Header from './Header';
function Homepage() {
  return (
    <>
     <Header />
    <div className="homepage-container">
      <img src={HomepageHeroDesktop} alt="homepage-hero" class="homepage-heroDesktop"/>
      <img src={HomepageHeroMobile} alt="homepage-hero" class="homepage-heroMobile"/>
        <div className="homepage-content">
          <h1 className="homepage-title">Empower Your Math Journey</h1>
          <h3 className="homepage-subtitle">Simplify your learning with step-by-step solutions and excel in 10th-grade math!</h3>
          <p className="homepage-description">Welcome to our comprehensive education app, where unlocking the mysteries of 10th-grade mathematics is made accessible and engaging. Dive into a treasure trove of meticulously crafted solutions, designed to guide you through every concept with clarity and precision. Whether you're tackling algebra, geometry, or calculus, our user-friendly interface and expertly curated content ensure that no problem remains unsolved. Join us on your journey to mathematical mastery and watch as your confidence soars and your understanding deepens. With our app by your side, conquering 10th-grade math has never been easier!</p>
          <Link to="/indexpage" class="mlean-button-primary">Click Here</Link>
        </div>
    </div>
    </>
   
  )
}

export default Homepage;