import React from "react";
import PropTypes from "prop-types";
import { FaInstagram } from "react-icons/fa";

const Contact = ({ email, description }) => {
  return (
    <div
      className="content"
      style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
    >
      <p className="is-size-5">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>{description}</p>

      <div>
        <a
          href="https://www.instagram.com/jumpingbearsaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram /> Check us out on Instagram!
        </a>
      </div>
    </div>
  );
};

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Contact;
