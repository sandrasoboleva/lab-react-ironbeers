import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Beers = () => {
  const [beers, setBeers] = useState([])
  const [searchBeer, setSearchBeer] = useState('')
  const [searchBeerArr, setSearchBeerArr] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://ih-beers-api2.herokuapp.com/beers"
    })
    .then(res => {
      setBeers(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const search = e => {
    e.preventDefault();
    axios({
      method: "GET",
      url: `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`
    })
    .then(res => {
      setBeers(res.data)
    })
    .catch(err => console.log("ERROR SEARCHING:::", err))
  }

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <form>
          <input placeholder="Seach for Beer" value={searchBeer} onChange={e => setSearchBeer(e.target.value)}/>
          <button type="submit" onClick={search}>Search</button>
        </form>
        {
          beers.map((beer, i) => {
            return (
              <div key={i} style={{
                border: '1px solid grey', 
                width: '350px', 
                padding: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center'
              }}>
                <img  src={beer.image_url} style={{height: '90px'}}/>
                <div>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
                </div>
              </div>
            )
          })
        }
      </header>
    </div>
  )
}


export default Beers;