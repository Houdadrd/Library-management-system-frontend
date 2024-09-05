import React, { useState } from 'react';
import './Navbar.css';
import booklogo from '../logos/book.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext'; 
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger icon and close icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    { title: 'Home', link: '/' },
    { title: 'All Books', link: '/all-books' },
    ...(authToken ? [
      { title: 'Favorite', link: '/favorite' },
      { title: 'Cart', link: '/cart' },
      { title: 'History', link: '/history' }
    ] : []),
  ];

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <nav className='nav'>
      <Link to='/' className='logname'>
        <img src={booklogo} alt='logo' />
        <h1 className='name'>LibrTrack</h1>
      </Link>
      <button className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {links.map((item, i) => (
          <Link to={item.link} className='nav-titles' key={i} onClick={() => setIsMenuOpen(false)}>
            {item.title}
          </Link>
        ))}
        <div className='btns'>
          {authToken ? (
            <button onClick={handleLogout} className='btn-signup'>
              Log out
            </button>
          ) : (
            <>
              <Link to='/login' className='btn-signin'>
                LogIn
              </Link>
              {/* <Link to='/signup' className='btn-signup'>
                SignUp
              </Link> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
