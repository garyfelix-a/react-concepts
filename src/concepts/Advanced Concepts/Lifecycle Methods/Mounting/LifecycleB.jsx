import { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gemini AI",
      type: "Language Model",
    };

    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps", {state}, {props});
    return null;
  }

  componentDidMount(){
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB render()");
    return (
        <>
            <div>Lifecycle B Methods</div>
        </>
    )
  }
}

export default LifecycleB;
