import { Apiresponse } from "../types/Tendencies"

export const Compiler = ({api} : {api : Apiresponse}) =>{
    return(
        <div>
            <h2>Filmes em estreia</h2>
            <ul>
                {api.results.map(res =>{
                    return(
                    <li>
                        <h3>{res.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}/>
                    </li>
                    )  
                })}
            </ul>
        </div>
    )
}