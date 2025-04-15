import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">ShopEase</div>
      <div className="navbar__search">
        <input type="text" placeholder="Search products..." />
      </div>
      <ul className="navbar__links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/explore'>Explore</Link></li>
        <li><Link to='/deals'>Deals</Link></li>
        <li><Link to='/contacts'>Contact</Link></li>
      </ul>

      <div className="navbar__icons">
        <Link to="/profile">
          <i className="far fa-user"></i>
        </Link>
        <Link to="/Mycart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
}
