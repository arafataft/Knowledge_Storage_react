import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <MenuBar></MenuBar>
      <img src="https://unsplash.com/photos/3FckJXNa6dc" alt="" />
      
    </div>
  )
}

export default App
