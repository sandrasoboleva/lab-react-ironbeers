import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from './components/Home';
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://ih-beers-api2.herokuapp.com/beers"
    })
    .then(res => {
      setAllBeers(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer allBeers={allBeers} setAllBeers={setAllBeers}/>} />
      </Routes>
    </div>
  );
}

export default App;