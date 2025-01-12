// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HerbRender from "./components/HerbRender";
import Explore from "./components/Explore";
import Nav from "./components/Nav";
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HerbRender />} />
        <Route path="/explore" element={<Explore></Explore>} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

// Component to conditionally render the footer based on the route
const FooterComponent = () => {
  const location = useLocation();
  // Render the footer only if the current path is not '/explore'
  return location.pathname !== '/explore' ? <Footer /> : null;
};

export default App;
