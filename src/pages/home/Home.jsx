import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Profile from "../../assets/logo.png";
import "./home.css";

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Md Faizan Khan.</span> Web Developer
                    </h1>

                    <p className="home__description">
                        I'm Full Stack Web Developer focused on crafting clean &
                        user-friendly experiences, I am passionate about
                        building excellent software, I am also contributing to
                        the open-source projects.
                    </p>

                    <Link to="/about" className="button">
                        More About Me{" "}
                        <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    );
};

export default Home;
