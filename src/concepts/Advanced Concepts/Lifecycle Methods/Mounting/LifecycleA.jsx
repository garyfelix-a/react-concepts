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
    console.log("LifecycleA getDerivedStateFromProps", { state }, { props });
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render()");
    return (
      <>
        <div className="mb-4 p-4">
          <div className="mb-4">
            Lifecycle A Methods
            <LifecycleB />
            <p className="border-2 mt-2 px-2 py-4 text-[20px]">Open log to check the mounting lifecycle about how it works.</p>
          </div>
          <a
            href="/lifecycle-methods"
            className="px-4 py-2 bg-black text-white rounded-[10px]"
          >
            Back to Lifecycle Methods
          </a>
        </div>
      </>
    );
  }
}

export default LifecycleA;
