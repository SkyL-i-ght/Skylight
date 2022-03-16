import React from 'react';
import './styles.css';
import { render } from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Mapview from "./routes/mapview.jsx";
import Dataview from "./routes/dataview.jsx";
import SignIn from"./routes/signin.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar.jsx';

render(
  
  <BrowserRouter> 
  <Navbar/>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='mapview' element={<Mapview />} />
        <Route path='dataview' element={<Dataview />} />
        <Route path='signin' element={<SignIn />} />
        
        </Routes>
       
  </BrowserRouter>,

  document.getElementById('root')
);