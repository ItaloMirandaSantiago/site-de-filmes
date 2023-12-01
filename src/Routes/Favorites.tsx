import { useContext, useEffect, useState } from "react"
import { Movie } from "../types/Tendencies"
import { Compiler } from "../components/Compiler"
import { Api } from "../components/request/ApiMovies"
import { TokenContext } from "../Contexts/TokenUser"
import { UserApi } from "../components/request/UserApi"
import { Loading } from "../components/Loading"
import { AlertContext } from "../Contexts/AlertContext"

export const Favorites = ()=>{
    const [items, setItems] = useState<Movie[] | null> (null)
    const save = localStorage.getItem('save')
    const tokenContext = useContext(TokenContext)
    const [IdMoviesUser, setIdMoviesUser] = useState<number[] | null>(null)
    const [MoviesUser, setMoviesUser] = useState<Movie[]>([])
    const alertContext = useContext(AlertContext)
    
    let OneUseEffect = true

    useEffect(()=>{
        if (save) {
            let ve = JSON.parse(save)
            if (Array.isArray(ve)) {
                setItems(ve)
            }else{
                setItems([ve])
            }
        }
    },[save])

    useEffect(()=>{
        const RequestMoviesSaveDB = async ()=>{
            if (tokenContext?.token) {
                if (OneUseEffect) {
                       
                    OneUseEffect = false
                    try{
                        let res: {sucess: boolean, movies: number[]} = await UserApi({Params: "addMovies", method: "get", token: tokenContext.token}).then(response => {
                            return response
                        })
                        setIdMoviesUser(res.movies)
                        let movies = [...MoviesUser]
                        for (let i = 0; i < res.movies.length; i++) {
                            let responseApiMovies: Movie = await Api({Params: `movie/${res.movies[i]}`}) 
                            if (responseApiMovies.id) {
                                movies.push(responseApiMovies) 
                                
                            }  
                        }
                        console.log('foi')
                        setMoviesUser(movies)
                    }catch(err){
                        alertContext?.setAlert('Verifique sua internet e/ou volte mais tarde')
                    }
                }
            }else{
                alertContext?.setAlert("conecte em sua conta ou crie uma")
            }

        }
        RequestMoviesSaveDB()
    }, [])

    return(
        <div className="text-white mt-3 text-center">
            <h2 className="text-3xl text-center">Organize seus filmes da forma mais confortavel para você!</h2>
            {items?.length ? 
                <Compiler api={items} title='Salvos' favorite={true} />
                :
                <div className="bg-red-500 py-3 my-3">
                    <h2>Nenhum filme salvo no momento</h2>
                </div>
            }
            {IdMoviesUser?.length ? 
                MoviesUser?.length ?
                    <Compiler api={MoviesUser} title='Salvos em sua conta' favorite={true} />
                    :
                    <Loading />
                :
                <>
                </>
            }
        </div>
    )
}