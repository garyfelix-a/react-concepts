import React from "react";
import PropTypes from "prop-types";

export const Inheritance = () => {
  // Base Button class component
  class Button extends React.Component {
    render() {
      return <button>{this.props.children}</button>;
    }
  }

  Button.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // IconButton class component using inheritance
  class IconButton extends Button {
    render() {
      return (
        <button>
          <span className="icon">{this.props.icon}</span>
          {this.props.children}
        </button>
      );
    }
  }

  // Usage
  <IconButton icon="⭐">Star</IconButton>;
};
