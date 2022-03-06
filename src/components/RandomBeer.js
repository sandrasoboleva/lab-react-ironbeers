import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://ih-beers-api2.herokuapp.com/beers/random"
    })
    .then(res => {
      setRandomBeer(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Link to='/'>Home</Link><br></br>
      <div style={{padding: '20px'}}>
        <img src={randomBeer.image_url} style={{height: '200px'}}/>
        <h1>{randomBeer.name}</h1>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  )
}

export default RandomBeer;