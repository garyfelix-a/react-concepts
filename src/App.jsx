import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';

// CORE CONCEPTS IMPORTS
import { Composition } from './concepts/Core Concepts/Composition vs Inheritance/Composition'
import { LiftingStateUp } from './concepts/Core Concepts/Lifting state up/LiftingStateUp'

//ADVANCED CONCEPTS IMPORTS
import LifecycleMethods from './concepts/Advanced Concepts/Lifecycle Methods/LifecycleMethods';
import CoreConcepts from './components/CoreConcepts';
import AdvancedConcepts from './components/AdvancedConcepts';
import RoutingConcepts from './components/RoutingConcepts';

import LifecycleA from './concepts/Advanced Concepts/Lifecycle Methods/Mounting/LifecycleA'
import UpdatingPhase from './concepts/Advanced Concepts/Lifecycle Methods/Updating/UpdatingPhase';
import UnmountingPhase from './concepts/Advanced Concepts/Lifecycle Methods/Unmounting/UnmountingPhase';

function App() {

  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/core-concepts' element={<CoreConcepts />}/>
            <Route path='/advanced-concepts' element={<AdvancedConcepts />}/>
            <Route path='/routing-concepts' element={<RoutingConcepts />}/>
            

            {/* basic concepts */}
            <Route path='/lifting-state-up' element={<LiftingStateUp />}/>
            <Route path='/composition-vs-inheritance' element={<Composition />}/>

            {/* advanced concepts */}
            <Route path='/lifecycle-methods' element={<LifecycleMethods />}/>
            <Route path='/lifecycle-mounting' element={<LifecycleA />}/>
            <Route path='/lifecycle-updating' element={<UpdatingPhase />}/>
            <Route path='/lifecycle-unmounting' element={<UnmountingPhase />}/>
            {/* <Route path='/lifecycle-errorhandling' element={<ErrorHandling />}/> */}
         </Routes>
      </Router>
    </>
  )
}

export default App
