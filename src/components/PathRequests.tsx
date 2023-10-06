import { Compiler } from "./Compiler"
import { Api } from "./logic/Api"

export const PathRequests = ()=>{
    const popular = Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc"})
    const movie_popularr = Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc"})
    const recent = Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc"})
    return(
        <div>
                {recent !== null && 
                    <Compiler api={recent} title="Mais Recentes" />
                }
                {movie_popularr !== null &&
                    <Compiler api={movie_popularr} title="filmes polulares" />
                }
                {popular !== null && 
                    <Compiler api={popular} title="Mais votados" />
                }             
        </div>
    )
}