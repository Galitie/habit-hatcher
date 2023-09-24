const Button = ({ color, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={className ? `btn ${className}` : "btn"}
    >
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: "steelblue",
};
