import React from 'react';
import './styles.css';
import { render } from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mapview from "./routes/mapview.jsx";
import Dataview from "./routes/dataview.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

render(
  <BrowserRouter> 
    <Routes>
        <Route path='/' element={<App />}>
        <Route path='mapview' element={<Mapview />} />
        <Route path='dataview' element={<Dataview />}/>
        </Route> 
        {/* not sure if we need this closing route element */}
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);