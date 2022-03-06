import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NewBeer(props) {
  const [newBeer, setNewBeer] = useState({name: '', tagline: '', description: '', first_brewed: '', brewers_tips: '', attenuation_level: '', contributed_by: ''})

  const create = e => {
    e.preventDefault();
      axios({
        method: 'post',
        url: 'https://ih-beers-api2.herokuapp.com/beers/new',
        data: newBeer
      })
      .then(res => console.log("response", res))
    console.log(newBeer)
    console.log(props.allBeers)
  }

  return (
    <div>
    <Link to='/'>Home</Link><br></br>
      <form>
        <input placeholder="name" onChange={e => setNewBeer({...newBeer,['name']: e.target.value})}/>
        <input placeholder="tagline" onChange={e => setNewBeer({...newBeer,['tagline']: e.target.value})}/>
        <input placeholder="description" onChange={e => setNewBeer({...newBeer,['description']: e.target.value})}/>
        <input placeholder="first_brewed" onChange={e => setNewBeer({...newBeer,['first_brewed']: e.target.value})}/>
        <input placeholder="brewers_tips" onChange={e => setNewBeer({...newBeer,['brewers_tips']: e.target.value})}/>
        <input placeholder="attenuation_level" type="number" onChange={e => setNewBeer({...newBeer,['attenuation_level']: e.target.value})}/>
        <input placeholder="contributed_by" onChange={e => setNewBeer({...newBeer,['contributed_by']: e.target.value})}/>
        <button type="submit" onClick={e => create(e)}>Create</button>
      </form>
    </div>
  )
}

export default NewBeer;