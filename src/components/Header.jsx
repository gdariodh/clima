import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <Fragment>
      <nav className='nav-wrapper light-blue darken-2 '>
        <a href='#!' className='brand-logo'>
          {title}
        </a>
      </nav>
    </Fragment>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
