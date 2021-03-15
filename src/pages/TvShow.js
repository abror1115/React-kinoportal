import {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './pages.scss';

const Movies = () => {

    const [movieList, setMovieList] = useState({
        isFetched: false,
        data:{},
        error: null
    });

    useEffect (() => {

        axios.get( `https://api.themoviedb.org/3/tv/popular`, {
            params: {
              api_key:'f98f570db46bc8502984a58a663f8a9a' 
            }
          })
          .then(function (response) {
            console.log( 'tvshou',response.data);
            setMovieList({
                isFetched: true,
                data: response.data,
                error: false,
            })
          })
          .catch(function (error) {
            setMovieList({
                isFetched: true,
                data:[],
                error: error,
            })
          })  

    }, []);


    return(
        <>
            <div className="container">
                {
                    movieList.isFetched ? ( 
                        <div className="movie-list">
                            {
                                movieList.data.results.map((movie, index) => (
                                    <MovieCard
                                        id = {movie.id}
                                        title = {movie.name}
                                        imgLink = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        rating = {movie.vote_average}
                                        releaseDate = {movie.first_air_date}
                                        key = {index}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <h1>loading...</h1>
                    )
                
            
                }
            </div>
        </>
    )
}

export default Movies;