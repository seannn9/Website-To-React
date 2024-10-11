import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/contact.css";

const Contact = () => {
    return (
        <div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link className="active" to="/contact">
                    Contact
                </Link>
                <div className="login">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>

            <div className="background_container">
                <div className="hero-content">
                    <h1 className="hero-heading">Get in Touch</h1>
                    <p className="hero-subheading">
                        We’re here to answer your questions and help you with
                        your architectural needs.
                    </p>
                </div>
            </div>

            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions, comments, or would like to
                    discuss your project, please feel free to reach out to us.
                    We look forward to hearing from you!
                </p>

                <h3>Our Location</h3>
                <p>
                    123 Architecture Lane
                    <br />
                    City, State, ZIP
                </p>
                <div className="contact-details">
                    <h3>Email Us</h3>
                    <p>
                        <a href="mailto:info@yourarchitecturalstudio.com">
                            info@yourarchitecturalstudio.com
                        </a>
                    </p>

                    <h3>Call Us</h3>
                    <p>
                        <a href="tel:+1234567890">(123) 456-7890</a>
                    </p>
                </div>
            </div>
            <div className="contact-background">
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                        ></textarea>

                        <button type="submit" className="cta-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="cta">
                <h2>Ready to Start Your Project?</h2>
                <p>
                    Contact us today, and let’s turn your vision into reality!
                </p>
                {/* <a href="./services.html" className="cta-button">
                    Explore Our Services
                </a> */}
                <Link to="/services" className="cta-button">
                    {" "}
                    Explore Our Services
                </Link>
            </div>

            <div className="separate_hero"></div>
        </div>
    );
};

export default Contact;
