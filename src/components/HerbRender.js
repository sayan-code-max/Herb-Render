// HerbRender.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; 

const HerbRender = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore'); // Navigate to Explore page
  };

  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': 10 }}>
        <div className="item" style={{ '--position': 1 }}>
          <img src="/images/s1.jpeg" alt="Slide 1" />
        </div>
        <div className="item" style={{ '--position': 2 }}>
          <img src="/images/s2.jpeg" alt="Slide 2" />
        </div>
        <div className="item" style={{ '--position': 3 }}>
          <img src="/images/s3.jpeg" alt="Slide 3" />
        </div>
        <div className="item" style={{ '--position': 4 }}>
          <img src="/images/s4.jpeg" alt="Slide 4" />
        </div>
        <div className="item" style={{ '--position': 5 }}>
          <img src="/images/s5.jpeg" alt="Slide 5" />
        </div>
        <div className="item" style={{ '--position': 6 }}>
          <img src="/images/s6.jpeg" alt="Slide 6" />
        </div>
        <div className="item" style={{ '--position': 7 }}>
          <img src="/images/s7.jpeg" alt="Slide 7" />
        </div>
        <div className="item" style={{ '--position': 8 }}>
          <img src="/images/s8.jpeg" alt="Slide 8" />
        </div>
        <div className="item" style={{ '--position': 9 }}>
          <img src="/images/s9.jpeg" alt="Slide 9" />
        </div>
        <div className="item" style={{ '--position': 10 }}>
          <img src="/images/s10.jpeg" alt="Slide 10" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="HERB RENDER">HERB RENDER</h1>
        <div className="author">
          <button id="button" onClick={handleExploreClick}>Explore</button>
          <h2>FIND THE PLANT</h2>
          <p className='p1'><b>Gain the knowledge</b></p>
          <p className='p2'>Easy to Access</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default HerbRender;
