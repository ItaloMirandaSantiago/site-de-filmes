import React, { useState } from 'react';
import "./index.css"
import { Menu } from './components/Menu';
import { SpinnerCarousel } from './components/ImageShadow';
import { Compiler } from './components/Compiler';
import { Api } from './components/logic/Api';
import { PathRequests } from './components/PathRequests';
import { Apiresponse } from './types/Tendencies';

function App() {

  const [api, setapi] = useState<Apiresponse | null>(null)

 function vai() {
  console.log('rod')
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjAxNGZlNmMwOGRiNWIwZDNhYTQ0OWUzYzk3M2ZlOSIsInN1YiI6IjY1MTQ4M2RkYTEwNzRiMDBhZDQ4YmM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rb2Whl68tAdBxc0lSFWz2eTnfu2IcXWFwEKDcWUehjw'
    }
  };
    fetch('https://api.themoviedb.org/3/search/movie', options)
    .then(response => response.json())
    .then((response: Apiresponse) =>{
      console.log(response)
    }).catch(err => console.error(err));
 }

  return (
    <div className="bg-colorFund">
      <button onClick={vai}>foi</button>
      <div className='App box-border bg-gradient-to-r bg-cover bg-no-repeat '>
        <Menu></Menu>
        <SpinnerCarousel />
      </div>
      <PathRequests />
    </div>
  );
}

export default App;