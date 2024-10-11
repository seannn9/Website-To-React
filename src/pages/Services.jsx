import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import "../styles/services.css";
import residentialImg from "../images/residential.jpg";
import commercialImg from "../images/commercial.jpg";
import interiorImg from "../images/interior.jpg";
import urbanImg from "../images/urban.jpg";

const Services = () => {
    return (
        <div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link className="active" to="/services">
                    Services
                </Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <div className="login">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>

            <div className="background_container">
                <div className="hero-content">
                    <h1 className="hero-heading">Our Services</h1>
                    <p className="hero-subheading">
                        Innovative solutions tailored to your needs.
                    </p>
                </div>
            </div>

            <div className="services-introduction">
                <h2>What We Offer</h2>
                <p>
                    Our architecture studio specializes in a range of services
                    designed to meet the diverse needs of our clients. From
                    initial concept design to final execution, we ensure that
                    each project reflects our commitment to quality,
                    sustainability, and innovation.
                </p>
            </div>

            <div className="services-list">
                <div className="service-item">
                    <div className="service-content">
                        <h3>Residential Design</h3>
                        <p>
                            We create stunning and functional residential spaces
                            that cater to the unique lifestyles and needs of our
                            clients.
                        </p>
                    </div>
                    <img src={residentialImg} alt="Residential Design" />
                </div>
                <div className="service-item">
                    <div className="service-content">
                        <h3>Commercial Architecture</h3>
                        <p>
                            Our team delivers innovative commercial designs that
                            enhance productivity and create inspiring work
                            environments.
                        </p>
                    </div>
                    <img src={commercialImg} alt="Commercial Architecture" />
                </div>
                <div className="service-item">
                    <div className="service-content">
                        <h3>Interior Design</h3>
                        <p>
                            We offer comprehensive interior design services,
                            transforming spaces into functional and
                            aesthetically pleasing environments.
                        </p>
                    </div>
                    <img src={interiorImg} alt="Interior Design" />
                </div>
                <div className="service-item">
                    <div className="service-content">
                        <h3>Urban Planning</h3>
                        <p>
                            Our urban planning services focus on creating
                            sustainable and vibrant communities that meet the
                            needs of today and tomorrow.
                        </p>
                    </div>
                    <img src={urbanImg} alt="Urban Planning" />
                </div>
            </div>

            <div className="cta">
                <h2>Ready to Discuss Your Project?</h2>
                <p>
                    Contact us today to find out how we can help you bring your
                    vision to life.
                </p>
                <Link to="/contact" className="cta-button">
                    Get In Touch
                </Link>
            </div>

            <div className="separate_hero"></div>
        </div>
    );
};

export default Services;
