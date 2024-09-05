import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='div-container'>
        <h1 className='caption'>Find Your Next Read!</h1>
        <p className='par-container'>Explore a world of captivating stories, valuable knowledge, and endless inspiration.
        Dive into our bookstore today!</p>
         <div className='btn'>
        <Link to="/all-books" className='btn-container'>Discover Books</Link></div>
      </div>
    </div>
  )
}

export default Hero
