import {useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';

function BeerDetails() {
  const { id } = useParams();
  const [chosenBeer, setChosenBeer] = useState({})

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://ih-beers-api2.herokuapp.com/beers/${id}`
    })
    .then(res => {
      setChosenBeer(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Link to='/'>Home</Link><br></br>
      <Link to="/beers">Go Back to All Beers</Link><br></br>
      <div style={{padding: '20px'}}>
        <img src={chosenBeer.image_url} style={{height: '200px'}}/>
        <h1>{chosenBeer.name}</h1>
        <p>{chosenBeer.tagline}</p>
        <p>{chosenBeer.first_brewed}</p>
        <p>{chosenBeer.attenuation_level}</p>
        <p>{chosenBeer.description}</p>
        <p>{chosenBeer.contributed_by}</p>
      </div>
    </div>
  )
}

export default BeerDetails;