import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="gap-0 m-auto">
        <img
          className="w-[80px] m-auto"
          src="https://i.ibb.co/1MZDM9G/favicon.png"
          alt=""
          srcSet=""
        />
        <p className="m-auto">Hotel Booking.com</p>
        <p className="m-auto">Providing reliable hotels since 2002</p>
      </div>
      <div className="m-auto">
        <span className="footer-title m-auto">Services</span>
        <Link className="link link-hover m-auto">Branding</Link>
        <Link className="link link-hover m-auto">Design</Link>
        <Link className="link link-hover m-auto">Marketing</Link>
        <Link className="link link-hover m-auto">Advertisement</Link>
      </div>
      <div className="m-auto">
        <span className="footer-title m-auto">Company</span>
        <Link to="/about" className="link m-auto link-hover">
          About us
        </Link>
        <Link to="/contact" className="link m-auto link-hover">
          Contact
        </Link>
        <Link to="/blog" className="link m-auto link-hover">
          Blog
        </Link>
        <Link className="link m-auto link-hover">Press kit</Link>
      </div>
      <div className="m-auto">
        <span className="footer-title m-auto">Legal</span>
        <Link className="link link-hover m-auto">Terms of use</Link>
        <Link className="link link-hover m-auto">Privacy policy</Link>
        <Link className="link link-hover m-auto">Cookie policy</Link>
        <Link to="/login" className="link m-auto link-hover">
          Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
