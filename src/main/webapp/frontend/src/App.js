import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBooksComponent from './components/ListBooksComponent';
import CreateBookComponent from './components/CreateBookComponent';
import UpdateBookComponent from './components/UpdateBookComponent.js';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path='/' exact element={<ListBooksComponent />}></Route>
            <Route path='/books' element={<ListBooksComponent />}></Route>
            <Route path='/add-book' element={<CreateBookComponent />}></Route>
            <Route path='/update-book/:id' element={<UpdateBookComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
