import React from 'react'
import { useGetAllNowPlayingMoviesQuery } from '../service/api';
import style from "./NowPlayingMovie.module.css"

// const NowPlayingMovie = () => {

    const NowPlayingMovie = () =>{
        const {data,isLoading,isError} = useGetAllNowPlayingMoviesQuery();
        console.log(data)

        if(isLoading){
            return <div><h1>Loading ...</h1></div>
        };
        if(isError){
            return <div><h1> An Error occured</h1></div>
        }
        return(
            <div className = {style.mainWrapper}>
                <div className = {style.container}>
                {data?.results?.map((movie)=>(
                    <div>
                        <h1>{movie.title}</h1>
                        <p> {movie.overview}</p>
                        <p> {movie.release_data}</p>
                        </div>
                ))}
            </div>
            </div>
        )

    }
        //     const res = useGetAllNowPlayingMoviesQuery();
        //     console.log(res)
        // return (
        //     <div>NowPlayingMovie</div>
        // )
    // }
export default NowPlayingMovie