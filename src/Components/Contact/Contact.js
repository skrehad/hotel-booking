import React from "react";
import "./Contact.css";
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import useTitle from "../../Shared/TitleChange/TitleChange";

const Contact = () => {
  useTitle("Contact");
  const contactForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const textarea = event.target.textarea.value;
    const result = { name, email, textarea };
    // console.log(result);
    toast.success(`${result.name} your information submitted successfully`);
    event.target.reset();
  };

  return (
    <section className="contact">
      <div className="content">
        <h2 className="font-bold font-mono mb-4">Contact Us</h2>
      </div>
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="contactInfo"
        >
          <div className="box">
            <div className="icon1">
              <FaHome></FaHome>
            </div>
            <div className="text font-bold font-mono">
              <h3>Address</h3>
              <p>San Antonio, TX, USA</p>
            </div>
          </div>
          <div className="box">
            <div className="icon1">
              <IoIosCall></IoIosCall>
            </div>
            <div className="text font-bold font-mono">
              <h3>Phone</h3>
              <p>+87787845784</p>
            </div>
          </div>
          <div className="box">
            <div className="icon1">
              <MdOutlineEmail></MdOutlineEmail>
            </div>
            <div className="text font-bold font-mono">
              <h3>Email</h3>
              <p>hotelbookin2002@gmail.com</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="contactFrom"
        >
          <form
            onSubmit={contactForm}
            className="text-center font-bold font-mono"
          >
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                required
                className="input  w-full max-w-xs"
              />
            </div>
            <div className="inputBox">
              <textarea
                name="textarea"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
