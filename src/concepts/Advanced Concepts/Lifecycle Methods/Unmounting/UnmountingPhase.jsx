import { Component } from 'react'

export class UnmountingPhase extends Component {
  
    //Clean up resources before the component is removed from the DOM.
    componentWillUnmount(){
        console.log('ComponentWillUnmount: Component is about to be unmounted');
        // this will clean up the event listeners, timers, resources, etc.
    }
    render() {
    return (
      <>
            <h2 className='text-[40px]'>Unmounting Phase: </h2>
            <p className='mb-4'>This component will log a message when it is about to be unmounted.</p>
            <a href="/lifecycle-methods" className="px-4 py-2 mt-[20px] bg-black text-white rounded-[10px]">Back to Lifecycle methods</a>
      </>
    )
  }
}

export default UnmountingPhase