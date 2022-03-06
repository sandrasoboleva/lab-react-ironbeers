import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <Link to="/beers">All Beers</Link><br></br>
      <Link to="/random-beer">Random Beer</Link><br></br>
      <Link to="/new-beer">New Beer</Link>
    </div>
  )
}



export default Home;