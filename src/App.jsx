import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar/MenuBar';
import MainBody from './components/MainBody/MainBody';
import SideBar from './components/SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <MenuBar></MenuBar>

      <div className="mainBody row">
        <div className="bodyContainer col-md-8">
          <MainBody></MainBody>
        </div>

        <div className="sideBar card col-md-4">
          <SideBar></SideBar>
        </div>
        
      </div>
      {/* <div><FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} /></div> */}
      
    </div>
  )
}

export default App
