import React, { useState } from 'react';
import "./index.css"
import { Menu } from './components/Menu';
import { SpinnerCarousel } from './components/SpinnerCarousel';
import { Compiler } from './components/Conpiler';
import { Apiresponse } from './types/Tendencies';


function App() {
  const [api, setapi] = useState<Apiresponse | null>(null)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjAxNGZlNmMwOGRiNWIwZDNhYTQ0OWUzYzk3M2ZlOSIsInN1YiI6IjY1MTQ4M2RkYTEwNzRiMDBhZDQ4YmM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rb2Whl68tAdBxc0lSFWz2eTnfu2IcXWFwEKDcWUehjw'
    }
  };
  function Api() {
    fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(response => response.json())
    .then((response: Apiresponse) =>{
       console.log(response)
       setapi(response)})
    .catch(err => console.error(err));
  }

    const app = (event: string): void =>{
      let a = document.getElementsByClassName("App")[0]
      let b = a as HTMLElement
      b.style.backgroundImage = `url(${event})`
    }
  

  return (
    <div className="App box-border bg-gradient-to-r bg-cover bg-no-repeat min-w-max">
      <button onClick={Api}>Requisitar</button>
      <h1 className="text-3xl">
      <Menu></Menu>
      <SpinnerCarousel app = {app} />
      {api !== null && 
      <Compiler api={api} />
      }
    </h1>

    </div>
  );
}

export default App;