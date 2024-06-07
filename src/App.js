import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BavariaHome from "./pages/BavariaHome";
import FDAHome from './pages/FDAHome';
import JHHome from "./pages/JHHome";

function App() {

  return (
    <HashRouter>
    <div className="App">
      <div className="content">
        <Routes>
          <Route exact path="/" element={<JHHome />}></Route>
          <Route exact path="/FDA" element={<FDAHome />}></Route>
          <Route exact path="/Bavaria" element={<BavariaHome />}></Route>
        </Routes>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
