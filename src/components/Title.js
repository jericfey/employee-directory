import PropTypes from "prop-types";


const Title = ({ title }) => {
 
  return (
    <title className="jumbotron">
      {/* Use this if you want to use inline CSS in JS referenced below*/}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      

    </title>
  );
};

//Set default value for title
Title.defaultProps = {
  title: "Employee Directory",
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Title;
