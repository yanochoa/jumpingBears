import React from "react";
import PropTypes from "prop-types";
import "./_offerings.scss";

const Offerings = ({ gridItems }) => (
  <div className="offerings columns is-multiline">
    <div className="columns">
      <div className="column is-half">
        <p>
          <img alt="" src={gridItems[0].image} />
        </p>
      </div>
      <div className="column has-text-centered">
        <p className="offerings__text is-size-3">{gridItems[0].text}</p>
      </div>
    </div>

    <div className="column">
      <p className="offerings__text is-size-3">{gridItems[1].text}</p>
    </div>
    <div className="column is-three-fifths">
      <p>
        <img alt="" src={gridItems[1].image} />
      </p>
    </div>

    <div className="column is-half">
      <p>
        <img alt="" src={gridItems[2].image} />
      </p>
    </div>
    <div className="column">
      <p className="offerings__text is-size-3">{gridItems[2].text}</p>
    </div>
  </div>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Offerings;
