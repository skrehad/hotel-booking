import React from "react";
import "./Contact.css";
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2 className="font-bold font-mono mb-4">Contact Us</h2>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon1">
              <FaHome></FaHome>
            </div>
            <div className="text font-bold font-mono">
              <h3>Address</h3>
              <p>412 Dhaka, Mirpur Road</p>
            </div>
          </div>
          <div className="box">
            <div className="icon1">
              <IoIosCall></IoIosCall>
            </div>
            <div className="text font-bold font-mono">
              <h3>Phone</h3>
              <p>01996064707</p>
            </div>
          </div>
          <div className="box">
            <div className="icon1">
              <MdOutlineEmail></MdOutlineEmail>
            </div>
            <div className="text font-bold font-mono">
              <h3>Email</h3>
              <p>rehadhasan664@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactFrom">
          <form className="text-center font-bold font-mono">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter Email"
                required
                className="input  w-full max-w-xs"
              />
            </div>
            <div className="inputBox">
              <textarea
                className="textarea textarea-bordered h-24 w-80"
                placeholder="Type your massage..."
                required
              ></textarea>
            </div>
            <div className="inputBox">
              <input
                className="btn capitalize"
                type="submit"
                name=""
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
