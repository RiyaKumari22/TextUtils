
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
}from "react-router-dom";
function App() {
  const [mode,setmode]=useState('light');//whether dark mode is enable or not
  const[alert,setAlert]=useState("This is alert")
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
  }, 2000);
  }
  // const removeBodyclass=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
    

  // }
  const togglemode=()=>{
    // removeBodyclass()
    
    // document.body.classList.add('bg-'+cls) 
if(mode==='light'){
setmode("dark")
document.body.style.backgroundColor='#343a40';
showAlert("Dark Mode Enabled!","success")
document.title="TextUtil - Dark Mode"
// setInterval(() => {
// document.title="TextUtil's amazing mode"
  
// }, 2000);
// setInterval(() => {
//   document.title="Install it now"
    
//   }, 1500);
}
else{
  setmode('light');
document.body.style.backgroundColor='white'
showAlert("Light Mode Enabled!","success")
document.title="TextUtil - Light Mode"



}
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" togglemode={togglemode} mode={mode} aboutText="About US "/ > 
<Alert alert={alert}/>

<div className="container mb-3">
<Routes>
<Route  path="/about" element={<About mode={mode}/>}>
          
          </Route>
          <Route  path="/" element={
            <TextForm showAlert={showAlert} heading="Try TextUtils- word and character counter,capitalizing text"mode={mode}/>
}>
          </Route>
        </Routes>
  
  </div>
  </Router>
    </>


  );
}

export default App;
