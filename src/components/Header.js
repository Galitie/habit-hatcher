import Button from "./Button";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add task" />
    </header>
  );
};

export default Header;

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
};
