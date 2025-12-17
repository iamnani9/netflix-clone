import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue) {
        navigate(`/search?q=${searchValue}`);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate('/')}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />

        <div className="nav__links">
            <span onClick={() => navigate('/my-list')} className="nav__link">My List</span>
        </div>

        <form className="nav__search" onSubmit={handleSearch}>
             <input 
                type="text" 
                className="nav__searchInput"
                placeholder="Titles, people, genres"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
             />
        </form>

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
