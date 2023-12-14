import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-transparent bg-body-tertiary" style={{borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px"}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Kendice.Y</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/projects">Projects</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
              {/* <a className="nav-link" href='https://drive.google.com/file/d/1oAq7pfA3oAqgG9UKPDgqu9suBqOd7J1j/view?usp=share_link' target='_blank'>Resume</a> */}
            </div>
          </div>
        </div>
      </nav>
)

export default Navbar;