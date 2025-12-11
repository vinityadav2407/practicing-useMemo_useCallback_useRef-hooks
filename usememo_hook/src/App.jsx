import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import Use_Memo from './components/Use_Memo'
import Use_Callback from './components/Use_Callback'
import Use_Ref from './components/Use_Ref'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='parents'>

      <nav className='navTab'>
      <Link to='/'>Home</Link>
      <Link to='/usememo'>useMemo-Hook</Link>
      <Link to='/usecallback'>useCallback-Hook</Link>
      <Link to='/useref'>useRef-Hook</Link>
      </nav>
    

       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/usememo' element={<Use_Memo/>} />
         <Route path='/usecallback' element={<Use_Callback/>} />
          <Route path='/useref' element={<Use_Ref/>} />
       </Routes>

       {/* <div className="container">
          <h1 style={{textAlign:'center'}}>app</h1>
       </div> */}
     
    </div>
  )
}

export default App
