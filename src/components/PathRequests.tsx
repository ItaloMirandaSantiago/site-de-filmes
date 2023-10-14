import { useEffect, useState } from "react"
import { Compiler } from "./Compiler"
import { Api } from "./logic/Api"
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
                <Compiler api={recent} title="Mais Recentes" />
                
                <Compiler api={movie_popular} title="filmes polulares" />

                <Compiler api={mostVoted} title="Mais votados" />               
        </div>
    )
}
const res = Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc"})
res.then((e)=>{
 return e
})
