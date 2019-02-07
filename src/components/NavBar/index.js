import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img alt="" src="/img/teddy-bear.png" />
            <strong>Jumping Bears</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? "is-active" : ""}`}
            data-target="navMenu"
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
          id="navMenu"
        >
          <div className="navbar-end">
            {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
            <Link className="navbar-item" to="/about">
              Services
            </Link>
            <Link className="navbar-item" to="/pricing">
              Pricing
            </Link>
            {/* <Link className="navbar-item" to="/blog">
              Blog
            </Link> */}
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="/contact">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
