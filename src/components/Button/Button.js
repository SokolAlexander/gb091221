import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

export const Button = ({ title, onButtonClick }) => {
  // const title = props.title;
  // const { title } = props;
  return (
    <button
      onClick={() => onButtonClick("hello again")}
      style={{ backgroundColor: "white", padding: 15 }}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

// margin-right
// marginRight

export class ButtonClass extends React.Component {
  state = {
    buttonName: "button",
  };

  componentDidMount() {
    console.log(" button did mount ");
  }

  componentDidUpdate() {
    console.log(" button did update ");
  }

  componentWillUnmount() {
    console.log(" button will unmount ");
  }

  handleBtnClick = () => {
    this.setState({ buttonName: "new name " });
    this.props.onButtonClick();
  };

  render() {
    return (
      <button className="my-btn" onClick={this.handleBtnClick}>
        {this.state.buttonName}: {this.props.title}
      </button>
    );
  }
}
