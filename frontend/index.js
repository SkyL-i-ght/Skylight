import React from 'react';
import './styles.css';
import { render } from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mapview from "./routes/mapview.jsx";
import Dataview from "./routes/dataview.jsx";

render(
  <BrowserRouter> 
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='mapview' element={<Mapview />} />
        <Route path='dataview' element={<Dataview />}/>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);