import { useEffect } from "react"
import {useParams} from "react-router-dom"
import { Movie } from "../types/Tendencies"

export const ViewContent = ()=>{
    const {slug} = useParams<string>()
    if (slug) {
        const movie: Movie = JSON.parse((decodeURIComponent(slug)))
        console.log(movie)
        return(
            <div className="text-white text-center">
                <h1 className="text-3xl">{movie.title}</h1>
                <div className="flex flex-row justify-around mx-2">
                    <img className="w-2/4 h-2/4" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <div >
                        <h2>Classificação indicativa: {movie.adult? "18+" : "Livre"}</h2>
                        <h2>Data de Lançamento: {movie.release_date}</h2>
                        <h2>Popularidade: {movie.popularity}</h2>
                        <h2>Classificação dos público (0 a 10): {movie.vote_average}</h2>
                        <h2>Total de avaliações: {movie.vote_count}</h2>
                    </div>
                </div>
                <div>
                    Sinopse: {movie.overview}
                </div>
            </div>
        )        
    }
    return(<div>
        <h2>Algo deu erado, feche a página e tente novamente</h2>
    </div>)

}
