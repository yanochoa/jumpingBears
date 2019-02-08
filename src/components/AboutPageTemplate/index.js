import React from "react";
import Content from "../Content";
import PropTypes from "prop-types";

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
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

      {/* comment to separate body */}

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            {/* begginging of bounce house 1 */}
            <div className="column is-half">
              <p>
                <img alt="bounce castle" src="/img/brinca1-left.jpg" />
              </p>
            </div>
            {/* end of bounce house 1 */}
          </div>
        </div>
      </section>

      {/* comment to separate body end */}
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

export default AboutPageTemplate;
