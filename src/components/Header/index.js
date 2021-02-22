import PropTypes from "prop-types";
import React from "react";
import "./style.css";


const Header = ({ title }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{title}</h1>
      <div>
        <p className="lead">
          {/* Click on column heading to sort results or use the sarch box to narrow
          your results. */}
        </p>
      </div>
    </div>
  );
};

//Set default value for title
Header.defaultProps = {
  title: "Employee Directory",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
