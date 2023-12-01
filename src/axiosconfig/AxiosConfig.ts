import axios from "axios";

export const confingaxios = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers : {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjAxNGZlNmMwOGRiNWIwZDNhYTQ0OWUzYzk3M2ZlOSIsInN1YiI6IjY1MTQ4M2RkYTEwNzRiMDBhZDQ4YmM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rb2Whl68tAdBxc0lSFWz2eTnfu2IcXWFwEKDcWUehjw'
    }
  })

  export const ConfigApiUSER = axios.create({
    baseURL: "https://localhost/4000",
    headers : {
      accept: 'application/x-www-form-urlencoded',
    }
  })
