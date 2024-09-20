import React from 'react'
import { useGetAllPopularMoviesQuery } from '../service/api';
import style from "../components/Popular.module.css"

const img = process.env.REACT_APP_MOVIE_IMAGES

    const PopularMovie = () =>{
        const {data,isLoading,isError} = useGetAllPopularMoviesQuery()
        console.log(data)

        if(isLoading){
            return <div><h1>Loading ...</h1></div>
        };
        if(isError){
            return <div><h1> An Error occured</h1></div>
        }
        return(
            <>
            <h1>POPULAR</h1>
            <div className = {style.mainWrapper}>
                <div className = {style.container}>
                    {data?.results?.map((movie)=>(
                        <div className={style.movie} key={movie.id}> 
                            <img className={style.img} src={`${img}${movie.poster_path}`} alt={movie.overview} />
                            <h1>{movie.title}</h1>
                            <p> {movie.overview}</p>
                            <p> {movie.release_data}</p>
                        </div>
                    ))}
                </div>
            </div>
            </>
            
        )

    }


export default PopularMovie;