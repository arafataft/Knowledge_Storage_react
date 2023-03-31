import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar/MenuBar';
import MainBody from './components/MainBody/MainBody';
import SideBar from './components/SideBar/SideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [time, setTime] = useState(0);
  const [titles, setTitle] = useState([]);
  const [count,setCount]=useState(0);

  const notify = () => toast("Already in Bookmark!");

  const handleSpentTime = (spentTime) => {
    setTime(time + spentTime);
  }

  const handleBookmark = (title) => {
    const newTitle = title;
    if(titles.find(cart=>cart===newTitle)){
      notify();
      return;
    }
    setCount(count+1);
    setTitle(prevArray => [...prevArray, newTitle]);
  }
  

  return (
    <div className='container'>
      <MenuBar></MenuBar>

      <div className="mainBody row">
        <div className="bodyContainer col-md-8">
          <MainBody handleSpentTime={handleSpentTime} handleBookmark={handleBookmark}></MainBody>
        </div>

        <div className="sideBar col-md-4">
          <div>
            <SideBar time={time} titles={titles} count={count}></SideBar>
          </div>
          {/* <div className='card'>
          <SideBar></SideBar>
          </div> */}
        </div>

      </div>
      <ToastContainer></ToastContainer>

    </div>
  )
}

export default App
