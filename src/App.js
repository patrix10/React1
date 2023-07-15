/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React,{ useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=> {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      },2000);
  }

  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode ==='light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title='Textutils' AboutText='About Us' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode}/>  
      </div>
      <div>
         <About/>
      </div>
    </>
  );
}

export default App;