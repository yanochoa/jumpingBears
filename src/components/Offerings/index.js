import React from "react";
import PropTypes from "prop-types";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="" style={{ borderRadius: "5px" }}>
        {/* <section className="section"> */}
        <div className="columns">
          <div className="column is-half">
            <p>
              <img alt="" src={item.image} />
            </p>
          </div>
          <div className="column">
            <p>{item.text}</p>
          </div>
        </div>
        {/* </section> */}
      </div>
    ))}
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
