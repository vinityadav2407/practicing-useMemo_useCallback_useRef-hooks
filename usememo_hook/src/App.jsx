import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='parents'>

      <nav className='navTab'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      </nav>
    

       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
       </Routes>

       <div className="container">
          <h1 style={{textAlign:'center'}}>app</h1>
       </div>
     
    </div>
  )
}

export default App
