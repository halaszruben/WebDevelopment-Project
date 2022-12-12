import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBooks from './components/ListBooks';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path='/' element={<ListBooks />}></Route>
            <Route path='/books' element={<ListBooks />}></Route>

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
