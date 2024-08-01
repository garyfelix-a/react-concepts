import { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gemini AI",
      type: "Language Model",
    };

    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps", {state}, {props});
    return null;
  }

  componentDidMount(){
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render()");
    return (
        <>
            <div>Lifecycle A Methods</div>
            <LifecycleB />
        </>
    )
  }
}

export default LifecycleA;
