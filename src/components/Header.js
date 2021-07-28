import '../styles/Header.css';
import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/Logo.png';

 function Header() {

  return (
    <header>
    <nav>
      <section className="img-nav" >
        <img className="nav-image" src={logo} alt="logo Rick and Morty" />
      </section>
      <ul>
        <li>
          <Link
            className="item"
            to="/"
            style={{ textDecoration: "none", color: "#d7ccbb" }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className="item"
            to="/favorites"
            style={{ textDecoration: "none", color: "#d7ccbb" }}
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            className="item"
            to="/about"
            style={{ textDecoration: "none", color: "#d7ccbb" }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default Header;