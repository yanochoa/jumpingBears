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
                <p className="is-size-5">
                  Free drop-off, set-up & drop-off included
                </p>
              </div>
            </div>
          </div>

          {/* item listing start */}

          {/* Bounce house */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__small-item"
                  alt="Bounce House"
                  src="/img/brinca1-left-noback.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__small-item__description is-size-2 has-text-weight-bold has-text-primary">
                $55
              </p>
              <p className="is-size-5">Bounce House</p>
              <p className="is-size-5">Dimensions : 10x10 Feet</p>
            </div>
          </div>

          {/* second catle */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__small-item"
                  alt="Crayola Castle"
                  src="/img/crayola.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__small-item__description is-size-2 has-text-weight-bold has-text-primary">
                $60
              </p>
              <p className="is-size-5">Crayola Castle</p>
              <p className="is-size-5">Dimensions : 11x11 Feet</p>
            </div>
          </div>

          {/* Night castle */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__small-item"
                  alt="Night Castle"
                  src="/img/night.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__small-item__description is-size-2 has-text-weight-bold has-text-primary">
                $65
              </p>
              <p className="is-size-5">Night Castle</p>
              <p className="is-size-5">Dimensions : 15x15 Feet</p>
            </div>
          </div>

          {/* Blue castle */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__small-item"
                  alt="Blue Castle"
                  src="/img/blue.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__small-item__description is-size-2 has-text-weight-bold has-text-primary">
                $65
              </p>
              <p className="is-size-5">Blue Cherry Castle</p>
              <p className="is-size-5">Dimensions : 15x15 Feet</p>
            </div>
          </div>

          {/* Castle with slide */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__small-item"
                  alt="Bounce Castle with slide"
                  src="/img/castlewithslide.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__small-item__description is-size-2 has-text-weight-bold has-text-primary">
                $100
              </p>
              <p className="is-size-5">Bounce Castle with Slide</p>
              <p className="is-size-5">Dimensions : 20x13 Feet</p>
            </div>
          </div>

          {/* castle with slide and pool */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
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
              <p className="pricing-page__castle2__description is-size-2 has-text-weight-bold has-text-primary">
                $150
              </p>
              <p className="is-size-5">
                Bounce Castle with Waterslide and Pool
              </p>
              <p className="is-size-5">Dimensions : 10x28 Feet</p>
              <p className="is-size-5">
                Pool area can be be turned into a plastic ball pit upon request
              </p>
            </div>
          </div>

          {/* third */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__small-item"
                  alt="foldable table"
                  src="/img/folding-table.jpeg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__small-item__description is-size-2 has-text-weight-bold has-text-primary">
                $7
              </p>
              <p className="is-size-5"> 6 Foot Foldable Plastic Table</p>
            </div>
          </div>

          {/* fourth */}

          <div
            className="columns pricing-page__a-la-carte-item"
            style={{ border: "1px solid #eaecee" }}
          >
            <div className="column is-half">
              <p>
                <img
                  className="pricing-page__small-item"
                  alt="foldable chair"
                  src="/img/plastic-chair.jpg"
                />
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="pricing-page__small-item__description is-size-2 has-text-weight-bold has-text-primary">
                $0.75
              </p>
              <p className="is-size-5"> Foldable Chair</p>
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
