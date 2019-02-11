import React from "react";
import Helmet from "react-helmet";
import Offerings from "../Offerings";
import PropTypes from "prop-types";
import "./_homepage.scss";
import { FaInstagram } from "react-icons/fa";

const HomePageTemplate = ({
  title,
  subtitle,
  heading,
  description,
  offerings,
  meta_title,
  meta_description
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                <h1 className="subtitle">
                  Check us out on Instagram!{"  "}
                  <a
                    href="https://www.instagram.com/jumpingbearsaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="content">
              <div className="section">
                <h3 className="has-text-weight-semibold is-size-1">
                  {heading}
                </h3>
                <p className="is-size-4">{description}</p>
              </div>
              <Offerings gridItems={offerings.blurbs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

export default HomePageTemplate;
