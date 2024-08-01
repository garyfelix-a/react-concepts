import PropTypes from "prop-types";

export const Composition = () => {
  // Reusable Button component
  function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
  }

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  // IconButton component using composition
  function IconButton({ icon, children, ...props }) {
    return (
      <Button {...props}>
        <span className="icon">{icon}</span>
        {children}
      </Button>
    );
  }

  IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <IconButton icon="⭐" onClick={() => alert("Clicked!")}>
      Star
    </IconButton>
  );
};
