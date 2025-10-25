import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} AutoPortal | ყველა უფლება დაცულია.</p>
        <div className="footer-links">
          <a href="/about">ჩვენს შესახებ</a>
          <a href="/contact">კონტაქტი</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;