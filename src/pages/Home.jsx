import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import sustainableImg from "../images/sustainable.jpg";
import threeDImg from "../images/3dmodel.jpg";
import interiorImg from "../images/interior.jpeg";

const Home = () => {
    return (
        <div className="global-body">
            <div className="navbar">
                <Link className="active" to="/">
                    Home
                </Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <div className="login">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>

            <div className="background_container">
                <div className="hero-content">
                    <h1 className="hero-heading">
                        Transforming Spaces, Inspiring Lives
                    </h1>
                    <p className="hero-subheading">
                        Crafting innovative architectural solutions that
                        harmonize beauty, functionality, and sustainability.
                    </p>
                    {/* <a href="./services.html" className="hero-button">
                        Learn More
                    </a> */}
                    <Link to="/services" className="hero-button">
                        Learn More
                    </Link>
                </div>
            </div>

            <div className="introduction">
                <h2>Welcome to Our Architecture Studio</h2>
                <p>
                    At our studio, we believe that architecture is not just
                    about building structures—it's about creating environments
                    that enhance the quality of life. Our passionate team of
                    architects and designers is dedicated to delivering
                    innovative and sustainable solutions that reflect your
                    vision. From residential designs to commercial spaces, we
                    collaborate closely with clients to bring their ideas to
                    life, ensuring every project is a unique expression of
                    artistry and functionality.
                </p>
            </div>

            <div className="features">
                <div className="feature">
                    <img src={sustainableImg} alt="Feature 1" />
                    <h3>Sustainable Design</h3>
                    <p>
                        Emphasizing eco-friendly practices and materials, our
                        designs aim to minimize environmental impact while
                        maximizing efficiency.
                    </p>
                </div>
                <div className="feature">
                    <img src={threeDImg} alt="Feature 2" />
                    <h3>3D Rendering & Visualization</h3>
                    <p>
                        Experience your project before it’s built with our
                        high-quality 3D renderings that bring your ideas to
                        life.
                    </p>
                </div>
                <div className="feature">
                    <img src={interiorImg} alt="Feature 3" />
                    <h3>Interior Design</h3>
                    <p>
                        Our interior design services focus on creating spaces
                        that are not only beautiful but also functional and
                        welcoming.
                    </p>
                </div>
            </div>

            <div className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial">
                    <p>
                        "Amazing service! The team was professional and helped
                        us achieve our goals efficiently."
                    </p>
                    <cite style={{ color: "#f4f4f4" }}>— Client Name</cite>
                </div>
                <div className="testimonial">
                    <p>
                        "A game-changer for our business. Highly recommend their
                        expertise and support."
                    </p>
                    <cite style={{ color: "#f4f4f4" }}>— Another Client</cite>
                </div>
            </div>

            <div className="cta">
                <h2>Ready to Get Started?</h2>
                <p>
                    Contact us today to find out how we can help you achieve
                    your goals.
                </p>
                <Link to="/contact" className="cta-button">
                    Get In Touch
                </Link>
            </div>

            <div className="separate_hero"></div>
        </div>
    );
};

export default Home;
