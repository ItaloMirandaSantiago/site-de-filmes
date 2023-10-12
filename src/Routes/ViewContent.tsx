import {useParams} from "react-router-dom"
import { Movie } from "../types/Tendencies"

export const ViewContent = ()=>{
    const {slug} = useParams<string>()
    if (slug) {
        const movie: Movie = JSON.parse((decodeURIComponent(slug)))
        console.log(movie)
        return(
            <div className="text-white text-center w-screen h-screen ">
                <h1 className="text-3xl">{movie.title}</h1>
                <div className="flex flex-row justify-around mx-2"> 
                    <img className="w-2/4 h-2/4 shadow-md shadow-black rounded-md max-w-xs md:w-1/3 " src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://portal.crea-sc.org.br/wp-content/uploads/2017/11/imagem-indisponivel-para-produtos-sem-imagem_15_5.jpg"}/>
                    <div >
                        <h2>Classificação indicativa: {movie.adult? "18+" : "Livre"}</h2>
                        <h2>Data de Lançamento: {movie.release_date}</h2>
                        <h2>Popularidade: {movie.popularity}</h2>
                        <h2>Classificação dos público (0 a 10): {movie.vote_average}</h2>
                        <h2>Total de avaliações: {movie.vote_count}</h2>
                    </div>
                </div>
                <div className="my-2  mx-2">
                    Sinopse: {movie.overview}
                </div>
                <div>
                    <button className="py-2 bg-red-600 rounded-md mb-3">Assistir gratuitamente</button>
                </div>
                <div className="bg-orange-400 py-4">
                    <p>desenvolvido por: Italo. Desenvolvedor Front-end </p>
                </div>
            </div>
        )        
    }
    return(<div>
        <h2>Algo deu erado, feche a página e tente novamente</h2>
    </div>)

}
