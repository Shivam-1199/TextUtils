import React, { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import {
  BrowserRouter,
  Routes,  //Switch has changed to routes
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <> 
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert Alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>  
  );
}

export default App;
