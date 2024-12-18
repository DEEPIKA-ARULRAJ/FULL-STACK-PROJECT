import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './userhome.css';
 function  Userhome () {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="Userhome">
         <header className="homeheader">
          <div className='headerbackgrd'>
          <div className="header-title">BIT VENUE BOOKING PORTAL</div>
          <div className="search-bar">
            <div className='logo'>
          <img src="/images/search image.png" alt="search"/>
          </div>
            <input type="text" placeholder="Press / to search" />
          </div>
          </div>
          <div className="user-info">
            <div className="user-icon">D</div>
            <div className="user-name">DEEPIKA A</div>
          </div>
        </header>
       
        <div className="main-content">
          <aside className="sidebar">
          <div className='logohome'>
          <img src="/images/home image.png" alt="home"/>
          </div>
          <div className='content'>Home</div>
          <div className='logotype'>
          <img src="/images/venue type.png" alt="type"/>
          </div>
            <nav className="venue-types">
              
              <button onClick={toggleDropdown} className="dropdown-toggle">
                VENUES TYPE {isDropdownOpen ? '▲' : '▼'}
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <Link to="/auditorium">
                  <li>Auditorium</li>
                  </Link>
                  <Link to="/seminarhall">
                  <li>Seminar hall</li>
                  </Link>
                  <Link to="/computerlab">
                  <li>Computer lab</li>
                  </Link>
                  <li>Conference hall</li>
                  <li>Class room</li>
                </ul>
              )}
            </nav>
            <div className='logoreport'>
          <img src="/images/report image.png" alt="report"/>
          </div>

          <Link to="/approvalreportcontainer">
            <div className="approval-report">VENUES APPROVAL REPORT</div>
            </Link>
            
          </aside>
          <div className="main-content">
          <div className="user-card">
            <div className="user-avatar">
              <span className="user-initial">D</span>
            </div>
            <div className="user-info">
              <p>Welcome back, DEEPIKA A !</p>
            </div>
          </div>
      </div>
        </div>
      </div>
    );
  }

  
  export default Userhome;
