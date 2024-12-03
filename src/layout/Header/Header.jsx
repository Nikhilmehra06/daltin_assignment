import React from "react";
import "./header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate  = useNavigate()
  const location = useLocation();

  const isAboutPage = location.pathname === "/about"
  
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/")}>Logo</div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to={"/about"} className={isAboutPage && "active"}>About Us</Link>
        <Link>Destinations</Link>
        <Link>Universities</Link>
        <Link>Our Products</Link>
        <Link>Our Services</Link>
      </nav>

      {/* Search and Talk to Experts */}
      <div className="header-right">
        <div className="search-icon">🔍</div>
        <button className="talk-to-experts-btn" onClick={() => navigate("/emailVerify")}>Registration Process</button>
        <button className="talk-to-experts-btn" onClick={() => navigate("/login")}>Login</button>
      
      </div>
    </header>
  );
};

export default Header;
