import React from "react";
import './Button.css';


export const Button = ({ title, anyProp, onButtonClick }) => {
  // const title = props.title;
  // const { title } = props;
  return <button onClick={() => onButtonClick('hello again')} style={{ backgroundColor: "white", padding: 15 }}>{title}</button>;
};

// margin-right
// marginRight

export class ButtonClass extends React.Component {
  render() {
    return <button className="my-btn">{this.props.title}</button>;
  }
}