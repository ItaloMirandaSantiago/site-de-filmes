import {useNavigate, useParams} from "react-router-dom"
import { Movie } from "../types/Tendencies"
import { UserApi } from "../components/request/UserApi"
import { TokenContext } from "../Contexts/TokenUser"
import { useContext } from "react"

export const ViewContent = ()=>{
    
    const navigate = useNavigate()
    const {slug, saveordelete} = useParams<string>()
    const changText = `${saveordelete}`
    const tokenContext = useContext(TokenContext)
    if (slug) {
        const movie: Movie = JSON.parse((decodeURIComponent(slug)))
        
        const VerificationSave = async ()=>{
            const save: string | null = localStorage.getItem('save')
            if (save) {
                let saveArray: Movie[] = JSON.parse(save)
                let itemSave = true
                for (let i = 0; i < saveArray.length; i++) {
                    if (saveArray[i].id === movie.id){
                        itemSave = false
                        if (saveordelete === 'true') {
                            saveArray.splice(i, 1)
                            localStorage.setItem('save', JSON.stringify(saveArray))
                            console.log('rodando')
                            if (tokenContext?.token) {

                               const res = await UserApi({Params: "removeMovies",  method: "delete", token: tokenContext?.token, data : {idmovie: saveArray[i].id ? `${saveArray[i].id}`: ""}})   
                               console.log(res)
                            }else{
                                alert('Você não está conectado a sua conta, então os filmes salvos ficarão salvos somente em seu aparelho')
                            }
                            navigate(-1)
                        }else{
                            const button  = document.getElementsByClassName('button')[0]
                            button.setAttribute('disabled', 'true')
                            button.classList.add("bg-red-600")
                            button.classList.remove('hover:bg-red-600')
                            button.innerHTML = 'este filme já foi salvo'
                        }
                        break
                    }
                }
                if (itemSave) {
                    if (tokenContext?.token) {

                               const res = await UserApi({Params: "addMovies",  method: "post", token: tokenContext?.token, data : {idmovie: movie.id ? `${movie.id}`: ""}})   
                               console.log(res)
                            }else{
                                alert('Você não está conectado a sua conta, então os filmes salvos ficarão salvos somente em seu aparelho')
                            }
                    saveArray.push(movie)
                        localStorage.setItem('save', JSON.stringify(saveArray))
                        const button  = document.getElementsByClassName('button')[0]
                        button.setAttribute('disabled', 'true')
                        button.classList.add("bg-green-600")
                        button.classList.remove('hover:bg-red-600')
                        button.innerHTML = 'sucesso'
                }
                          
            }else{
                if (tokenContext?.token) {
                    const res = await UserApi({Params: "addMovies",  method: "post", token: tokenContext?.token, data : {idmovie: movie.id ? `${movie.id}`: ""}})   
                    console.log(res)
                    localStorage.setItem('save', JSON.stringify([movie])) 
                }else{
                    alert('Você não está conectado a sua conta, então os filmes salvos ficarão salvos somente em seu aparelho')
                    localStorage.setItem('save', JSON.stringify([movie])) 
                }
            }
        }

        return(
            <div className="text-white text-center my-3 "> 
                <h1 className="text-3xl">{movie.title}</h1>
                <div className="flex flex-row justify-around mx-2"> 
                    <img className="w-2/4 h-2/4 shadow-md shadow-black rounded-md max-w-xs md:w-1/3 " 
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://portal.crea-sc.org.br/wp-content/uploads/2017/11/imagem-indisponivel-para-produtos-sem-imagem_15_5.jpg"}
                    alt="Imagem não encontrada"
                    />
                    <div className="flex flex-col justify-center items-center">
                        <h2>Classificação indicativa: {movie.adult? "18+" : "Livre"}</h2>
                        <h2>Data de Lançamento: {movie.release_date}</h2>
                        <h2>Popularidade: {movie.popularity}</h2>
                        <h2>Classificação dos público (0 a 10): {movie.vote_average}</h2>
                        <h2>Total de avaliações: {movie.vote_count}</h2>
                        <button onClick={VerificationSave} 
                        className="button mt-5 rounded text-1xl p-2 bg-blue-800 hover:bg-red-600">
                            {saveordelete === "true" || changText === 'true' ? 'Excluir' : 'Salvar'}
                        </button>
                    </div>
                </div>
                <div className="my-2  mx-2">
                    Sinopse: {movie.overview}
                </div>
                    <button className=" my-3 py-2 bg-red-600 rounded-md mb-3">Assistir gratuitamente</button>
            </div> 
        )        
    }else{
        return(<div>
            <h2>Algo deu errado, feche a página e tente novamente</h2>
        </div>)
    }
}
