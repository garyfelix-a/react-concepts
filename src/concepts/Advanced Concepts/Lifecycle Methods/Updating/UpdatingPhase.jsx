import { Component } from "react";

export class UpdatingPhase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //Adjust state based on props or state changes.
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      "getDerivedStateFromProps: New props received or state is about to change",
      { nextProps },
      { nextState }
    );
    //returning null indicates no state updates
    return null;
  }

  //Decide whether to re-render the component.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should the component update?");
    // return true - update || false - prevent it from update
    return nextState.count !== this.state.count;
  }

  //Capture some information before the DOM is updated.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate: Capture snapshot before update",
      { prevProps },
      { prevState }
    );
    //Return value to be passed to componentDidUpdate
    return null;
  }

  // /Execute code after the DOM has been updated.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate: Component updated",
      { prevProps },
      { prevState },
      { snapshot }
    );
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div className="p-10">
          <div className="mb-4">
            <h2 className="text-[40px] mb-2">Updating Phase</h2>
            <p className="text-[22px]">Count: {this.state.count}</p>
            <button
              onClick={this.increment}
              className="border-2 py-2 px-4 mt-2 bg-black text-white rounded-[10px] hover:pointer "
            >
              Increment
            </button>
          </div>
          <a
            href="/lifecycle-methods"
            className="px-4 py-2 mt-[20px] bg-black text-white rounded-[10px]"
          >
            Back to Lifecycle methods
          </a>
        </div>
      </>
    );
  }
}

export default UpdatingPhase;
