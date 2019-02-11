import React from "react";
import Helmet from "react-helmet";
import Pricing from "../Pricing";
import PropTypes from "prop-types";
import "./_pricing-page.scss";

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">{title}</h1>
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
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* individual pricing */}
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-full is-offset-1">
              <div className="content">
                <h2 className="has-text-weight-semibold is-size-2">
                  Individual Pricing
                </h2>
                <p className="is-size-5">Price per item</p>
              </div>
            </div>
          </div>

          {/* item listing start */}

          {/* first */}

          <div className="columns" style={{ border: "1px solid #eaecee" }}>
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__castle1"
                  alt="jumping castle"
                  src="/img/brinca1-left-noback.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className=" pricing-page__text-description is-size-4">$55</p>
              <p>10x10 feet</p>
            </div>
          </div>

          {/* second */}

          <div className="columns" style={{ border: "1px solid #eaecee" }}>
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__castle2"
                  alt="big castle"
                  src="/img/brinca2-main-noback.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__text-description is-size-4">$100</p>
              <p>10x28 feet</p>
              <p>can be either pool or plastic ball pit</p>
              {/* sillas .75
                tables 7
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
};

export default PricingPageTemplate;
