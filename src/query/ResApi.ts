import { useQuery } from "@tanstack/react-query";
import { Api } from "../components/logic/Api";

export const MostVoted = ()=>{
    return useQuery({queryKey: ['MostVoted'], 
    queryFn: ()=> { 
        return Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc"})
    }, 
    staleTime: 1000 * 1000
    })
}

export const MoviePopular = ()=>{
    return useQuery({queryKey: ['MoviePopular'], 
        queryFn: ()=> { 
            return Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc"})
        }, 
        staleTime: 1000 * 1000
    })
}

export const Recent = ()=>{
    return useQuery({
        queryKey: ['Recent'], 
        queryFn: ()=> { 
            return Api({Params: "/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc"})
        }, 
        staleTime: 1000 * 1000
    }) 
}

