import { useEffect, useState } from "react"
import { Compiler } from "./Compiler"
import { Api } from "./request/ApiMovies"
import { Apiresponse } from "../types/Tendencies"
import { MostVoted, MoviePopular, Recent } from "../query/ResApi"


export const PathRequests = ()=>{
    const [mostVoted, setMostVoted] = useState<Apiresponse |  null>(null)
    const [movie_popular, setMoviePopular] = useState<Apiresponse |  null>(null)
    const [recent, setRecent] = useState<Apiresponse |  null>(null)

    const mostVotedQuery = MostVoted()
    const moviePopularQuery = MoviePopular()
    const recentQuery = Recent()

    useEffect(() => {
        if (!mostVotedQuery.isLoading && !mostVotedQuery.isError) {
          setMostVoted(mostVotedQuery.data)
        }
    
        if (!moviePopularQuery.isLoading && !moviePopularQuery.isError) {
          setMoviePopular(moviePopularQuery.data)
        }
    
        if (!recentQuery.isLoading && !recentQuery.isError) {
          setRecent(recentQuery.data)
        }
      }, [mostVotedQuery, moviePopularQuery, recentQuery])

    return(
        <div>
                <Compiler api={movie_popular && movie_popular?.results} title="filmes polulares" favorite={false} />
                
                <Compiler api={recent && recent?.results} title="Futuramente" favorite={false} />
                
                <Compiler api={mostVoted && mostVoted?.results} title="Mais votados" favorite={false} />               
        </div>
    )
}
const res = Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc"})
res.then((e)=>{
 return e
})
