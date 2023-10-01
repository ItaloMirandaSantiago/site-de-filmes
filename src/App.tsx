import React, { useState } from 'react';
import "./index.css"
import { Menu } from './components/Menu';
import { SpinnerCarousel } from './components/SpinnerCarousel';
import { Compiler } from './components/Compiler';
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
       setapi(response)})
    .catch(err => console.error(err));
  }

    const app = (event: string): void =>{
      let a = document.getElementsByClassName("App")[0]
      let b = a as HTMLElement
      b.style.backgroundImage = `url(${event})`
    }
  

  return (
    <div className="">
      <div className='App box-border bg-gradient-to-r bg-cover bg-no-repeat '>
        <Menu></Menu>
        <SpinnerCarousel app = {app} />
      </div>
      {api !== null && 
      <Compiler api={api} />
      }

       {api !== null && 
      <Compiler api={api} />
      }

       {api !== null && 
      <Compiler api={api} />
      }
            <button className='bg-black block py-2 rounded-sm text-violet-800' onClick={Api}>Requisitar</button>
    </div>
  );
}

export default App;