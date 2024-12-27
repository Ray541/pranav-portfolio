import PropTypes from "prop-types";

const Main = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Main;
