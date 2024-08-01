import './App.css'

// React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CORE CONCEPTS IMPORTS
import { Composition } from './concepts/Core Concepts/Composition vs Inheritance/Composition'
import { LiftingStateUp } from './concepts/Core Concepts/Lifting state up/LiftingStateUp'

//ADVANCED CONCEPTS IMPORTS
import LifecycleA from './concepts/Advanced Concepts/Lifecycle Methods/Mounting/LifecycleA'
import Home from './Home';


function App() {

  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<Home />}/>
            {/* basic concepts */}
            <Route path='/lifting-state-up' element={<LiftingStateUp />}/>
            <Route path='/composition-vs-inheritance' element={<Composition />}/>

            {/* advanced concepts */}
            <Route path='/lifecycle-methods/mounting' element={<LifecycleA />}/>
         </Routes>
      </Router>
    </>
  )
}

export default App
