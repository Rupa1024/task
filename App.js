// import React from 'react';
// import {  Route ,Routes } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import ProfilePage from './pages/ProfilePage';
// import ErrorPage from './pages/ErrorPage';

// const App = () => {
//   return (
//     <>

//       <Routes>
//         <Route  path="/" element={<LandingPage/>} />
//         <Route path="/profile" element={<ProfilePage/>} />
//         <Route path="/error" element={<ErrorPage/>} />
//       </Routes>
   
//     </>
//   );
// };

// export default App;
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
// Components
import Navbar from './components/Navbar';
// Pages

import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <div>
   
      <Navbar/>

            
      <div className="cantainer">
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
        </Routes>
           
      </div>

   
    
    </div>
  );
}

export default App;