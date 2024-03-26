import React from "react";

import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";

const Portfolio = () => {
    return (
        <div>
            <section className="portfolio section">
                <h2 className="section__title">
                    My <span>Portfolio</span>
                </h2>
            </section>

            <div className="portfolio__container container grid">
                {portfolio.map((item) => {
                    return <PortfolioItem key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default Portfolio;
