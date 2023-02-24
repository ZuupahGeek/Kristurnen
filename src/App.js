import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TourDates from './components/Tour-dates/TourDates';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <TourDates /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
