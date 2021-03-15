import {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './pages.scss';

import {Link} from 'react-router-dom'

const Latest = () => {

    const [movieList, setMovieList] = useState({
        isFetched: false,
        data:{},
        error: null
    });

    useEffect (() => {

        axios.get( `https://api.themoviedb.org/3/movie/now_playing`, {
            params: {
              api_key:'f98f570db46bc8502984a58a663f8a9a' 
            }
          })
          .then(function (response) {
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

    console.log(movieList.data);

    return(
        <>
            <div className="container">
                <div to="/tv-shows" className="list">
                    <Link to="/movies" className="pages-link">Popular</Link>
                    <Link to="/latest" className="pages-link">Latest</Link>
                    <Link to="/toprated" className="pages-link">Top-rated</Link>
                    <Link to="/upcoming" className="pages-link">Upcoming</Link>
                </div>
                {
                    movieList.isFetched ? ( 
                        <div className="movie-list">
                            {
                                movieList.data.results.map((movie, index) => (
                                    <MovieCard
                                        id = {movie.id}
                                        title = {movie.title}
                                        imgLink = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        rating = {movie.vote_average}
                                        releaseDate = {movie.release_date}
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

export default Latest;