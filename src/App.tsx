import React, { useState } from 'react';
import "./index.css"
import { PathRequests } from './components/PathRequests';
import { Apiresponse } from './types/Tendencies';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Routes/Home';
import { ViewContent } from './Routes/ViewContent';
import { Login } from './Routes/Login';
import { ResultsSearch } from './Routes/ResultsSearch';

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
    fetch('https://api.themoviedb.org/3/search/movie?query=naruto', options)
    .then(response => response.json())
    .then((response: Apiresponse) =>{
      console.log(response)
    }).catch(err => console.error(err));
 }

  return (
    <div className="bg-colorFund"> 
    <button onClick={vai}>FOi</button>
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path='/view/:slug' element={<ViewContent />} />
          <Route path='/login/' element={<Login/>}/>
          <Route path='/search/:slug' element={<ResultsSearch />} />
        </Routes>
    </div>
  );
}

export default App;