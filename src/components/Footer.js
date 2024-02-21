import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>The Bricks, LLC</h4>
            <NavLink to="/about">About Us</NavLink>&emsp;
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
          <div className="col-md-4">
            <h4>Legal</h4>
            <NavLink to="/privacy">Privacy</NavLink>&emsp;
            <NavLink to="/terms">Terms of Use</NavLink>
          </div>
          <div className="col-md-4">
            <h4>Connect With Us</h4>
            <NavLink to="/facebook">Facebook</NavLink>&emsp;
            <NavLink to="/twitter">Twitter</NavLink>&emsp;
            <NavLink to="/instagram">Instagram</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
