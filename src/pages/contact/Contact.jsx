import React from "react";
import {
    FaEnvelopeOpen,
    FaTwitter,
    FaDiscord,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
    return (
        <div>
            <section className="contact section">
                <h2 className="section__title">
                    Get In <span>Touch</span>
                </h2>

                <div className="contact__container container grid">
                    <div className="contact__data">
                        <h3 className="contact__title">Don't be Shy!</h3>

                        <p className="contact__description">
                            Fell free to get in touch with me. I am always open
                            to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                        </p>

                        <div className="contact__info">
                            <div className="info__item">
                                <FaEnvelopeOpen className="info__icon" />

                                <div>
                                    <span className="info__title">Mail me</span>
                                    <h4 className="info__desc">
                                        FKHAN20040@GMAIL.COM
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <a
                                href="https://twitter.com/THEFZNKHAN"
                                className="contact__social-link"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="https://discord.com/users/1156287168986218666"
                                className="contact__social-link"
                            >
                                <FaDiscord />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/thefznkhan/"
                                className="contact__social-link"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/THEFZNKHAN"
                                className="contact__social-link"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <form className="contact__form">
                        <div className="form__input-group">
                            <div className="form__input-div">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="form__control"
                                />
                            </div>

                            <div className="form__input-div">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="form__control"
                                />
                            </div>

                            <div className="form__input-div">
                                <input
                                    type="text"
                                    placeholder="Your Subject"
                                    className="form__control"
                                />
                            </div>
                        </div>
                        <div className="form__input-div">
                            <textarea
                                placeholder="Your Message"
                                className="form__control textarea"
                            ></textarea>
                        </div>

                        <button className="button">
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend />
                            </span>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
