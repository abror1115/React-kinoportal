import {useEffect, useState} from 'react';

import axios from 'axios';
import MovieCard from '../components/MovieCard';
import {Link} from 'react-router-dom';

const Search = ({match}) => {

    const [movieList, setMovieList] = useState({

        isFetched: false,
        data: [],
        error: null
    });

    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${match.params.searchQuery}`, {
            params: {
                api_key: 'f98f570db46bc8502984a58a663f8a9a'
            }
        })

        .then(function(response) {
            console.log('Natija', response.data.results);
            setMovieList({
                
                isFetched: true,
                data: response.data.results,
                error: false
            })
        })
        .catch(function(error) {
            setMovieList({
                isFetched: true,
                data: [],
                error: error
            })

        })
        .then(function(){

        });

    }, [match.params.searchQuery])

    return(
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
                        movieList.data.length !==0 ?(
                            movieList.data.map((movie, index) => (
                                <MovieCard
                                    id = {movie.id}
                                    title = {movie.title}
                                    imgLink = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    rating = {movie.vote_average}
                                    releaseDate = {movie.release_date}
                                    key = {index}
                                />
                            ))
                        ):(
                            <h1>No Result</h1>
                        )

                    }
                </div>
            ) : (
                <h1>loading...</h1>
            )
        
    
        }
    </div>
    )
}

export default Search;