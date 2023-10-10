import { useEffect, useState } from "react"
import { Compiler } from "./Compiler"
import { Api } from "./logic/Api"
import { Apiresponse } from "../types/Tendencies"

export const PathRequests = ()=>{
    const [mostVoted, setMostVoted] = useState<Apiresponse |  null>(null)
    const [movie_popular, setMoviePopular] = useState<Apiresponse |  null>(null)
    const [recent, setRecent] = useState<Apiresponse |  null>(null)
    
   async function api() {
       await Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc"})
        .then(e=>setMoviePopular(e)) 
        await Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc"})
        .then(e=>setMoviePopular(e)) 
        await Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc"})
        .then(e=>setRecent(e)) 
    }
    
    useEffect(()=>{
        api()
    }, [])
   
    return(
        <div>
                {recent !== null && 
                    <Compiler api={recent} title="Mais Recentes" />
                }
                {movie_popular !== null &&
                    <Compiler api={movie_popular} title="filmes polulares" />
                }
                {mostVoted !== null && 
                    <Compiler api={mostVoted} title="Mais votados" />
                }             
        </div>
    )
}
const res = Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc"})
res.then((e)=>{
 return e
})