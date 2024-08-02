import { Component } from "react";

export class LifecycleMethods extends Component {
  render() {
    return (
      <>
        <section>
          <div className="border-2 px-2 py-2 h-[100vh] flex-col">
            <h2 className="text-[30px] my-2">Lifecycle Methods</h2>
            <div className="flex flex-col px-2 py-2 text-[22px] border-2 mb-6">
              <a href="/lifecycle-mounting" className="border-2 px-2 py-2 mb-2">Mouting</a>
              <a href="/lifecycle-updating" className="border-2 px-2 py-2 mb-2" >Updating</a>
              <a href="lifecycle-unmounting" className="border-2 px-2 py-2 mb-2">UnMouting</a>
              <a href="/error-handling" className="border-2 px-2 py-2 mb-2">Error Handling</a>
            </div>
          <a href="/advanced-concepts" className="px-4 py-2 mt-[20px] bg-black text-white rounded-[10px]">Back to Advanced Concepts</a>
          </div>
        </section>
      </>
    );
  }
}

export default LifecycleMethods;
