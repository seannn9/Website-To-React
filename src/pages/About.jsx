import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import "../styles/about.css";
import memberImg from "../images/member.jpg";

const About = () => {
    return (
        <div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link className="active" to="/about">
                    About
                </Link>
                <Link to="/contact">Contact</Link>
                <div className="login">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>

            <div className="background_container">
                <div className="hero-content">
                    <h1 className="hero-heading">About Us</h1>
                    <p className="hero-subheading">
                        Creating innovative spaces that inspire.
                    </p>
                </div>
            </div>

            <div className="about-section">
                <div className="about-content">
                    <h2>Who We Are</h2>
                    <p>
                        Founded in [Year], our architecture studio is dedicated
                        to crafting exceptional spaces that blend creativity and
                        functionality. With a team of experienced architects and
                        designers, we pride ourselves on our collaborative
                        approach, working closely with clients to bring their
                        visions to life.
                    </p>
                </div>

                <div className="about-content">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to enhance the built environment through
                        innovative design that is sustainable, functional, and
                        aesthetically pleasing. We aim to create spaces that
                        foster community, promote well-being, and reflect the
                        unique identity of each client.
                    </p>
                </div>

                <div className="about-content">
                    <h2>Our Values</h2>
                    <ul>
                        <li>
                            <strong>Integrity:</strong> We uphold the highest
                            ethical standards in all our projects.
                        </li>
                        <li>
                            <strong>Innovation:</strong> We embrace new ideas
                            and technologies to push the boundaries of design.
                        </li>
                        <li>
                            <strong>Sustainability:</strong> We are committed to
                            environmentally responsible practices in our work.
                        </li>
                        <li>
                            <strong>Collaboration:</strong> We believe in the
                            power of teamwork and open communication.
                        </li>
                    </ul>
                </div>

                <div className="about-content">
                    <h2>Meet Our Team</h2>
                    <p>
                        Our diverse team of architects and designers brings a
                        wealth of knowledge and creativity to every project. We
                        are passionate about what we do and are committed to
                        delivering exceptional results for our clients.
                    </p>
                </div>
                <div className="team-profiles">
                    <div className="team-member">
                        <img src={memberImg} alt="Team Member 1" />
                        <h3>Jane Doe</h3>
                        <p>Lead Architect</p>
                    </div>
                    <div className="team-member">
                        <img src={memberImg} alt="Team Member 2" />
                        <h3>John Smith</h3>
                        <p>Interior Designer</p>
                    </div>
                    <div className="team-member">
                        <img src={memberImg} alt="Team Member 3" />
                        <h3>Emily Johnson</h3>
                        <p>Project Manager</p>
                    </div>
                </div>
            </div>

            <div className="cta">
                <h2>Let’s Work Together</h2>
                <p>
                    Ready to start your architectural journey? Contact us today!
                </p>
                <Link to="/contact" className="cta-button">
                    Get In Touch
                </Link>
            </div>

            <div className="separate_hero"></div>
        </div>
    );
};

export default About;
