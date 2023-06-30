import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="gap-0">
        <img
          className="w-[80px]"
          src="https://i.ibb.co/1MZDM9G/favicon.png"
          alt=""
          srcset=""
        />
        <p>
          Hotel Booking.com
          <br />
          Providing reliable hotels since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/blog" className="link link-hover">
          Blog
        </Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
        <Link to="/login" className="link link-hover">
          Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
