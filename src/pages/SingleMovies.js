import {useState, useEffect} from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard';

import ActorCard from '../components/ActorCard';

import {Link} from "react-router-dom"

const SingleMovies = ({match}) => {


        const [movieInfo, setMovieInfo] = useState({
            isFetched: false,
            data:{},
            error: null
        });
    
        useEffect (() => {
    
            axios.get( `https://api.themoviedb.org/3/movie/${match.params.id}`, {
                params: {
                  api_key:'f98f570db46bc8502984a58a663f8a9a' 
                }
              })
              .then(function (response) {
                // console.log(response.data);
                setMovieInfo({
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
              })
              .catch(function (error) {
                setMovieInfo({
                    isFetched: true,
                    data:[],
                    error: error,
                })
              })  
    
        }, []);


        const [movieInfoRec, setMovieInfoRec] = useState({
            isFetched: false,
            data:{},
            error: null
        });
        // console.log(movieInfo.data.title);
    
        useEffect (() => {
    
            axios.get( `https://api.themoviedb.org/3/movie/${match.params.id}/recommendations`, {
                params: {
                  api_key:'f98f570db46bc8502984a58a663f8a9a' 
                }
              })
              .then(function (response) {
                // console.log(response.data);
                setMovieInfoRec({
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
              })
              .catch(function (error) {
                setMovieInfoRec({
                    isFetched: true,
                    data:[],
                    error: error,
                })
              })  
    
        }, []);
        const [actorsList, setactorsList] = useState({
            isFetched: false,
            data:{},
            error: null
        });

        
    
        useEffect (() => {
    
            axios.get( `https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
                params: {
                  api_key:'f98f570db46bc8502984a58a663f8a9a' 
                }
              })
              .then(function (response) {
                // console.log(response.data);
                setactorsList({
                    isFetched: true,
                    data: response.data,
                    error: false,
                })
              })
              .catch(function (error) {
                setactorsList({
                    isFetched: true,
                    data:[],
                    error: error,
                })
              })  
        }, []);
    
        
    
        const movieInfoData = movieInfo.data;
         const movieCastActors = actorsList.data.cast;
        //  console.log(movieCastActors.data);
        // console.log(actorsList.data.cast);

    return(
       <>
            <div className="container">
                <div  className="list">
                    <Link to="/movies" className="pages-link">Popular</Link>
                    <Link to="/latest" className="pages-link">Latest</Link>
                    <Link to="/toprated" className="pages-link">Top-rated</Link>
                    <Link to="/upcoming" className="pages-link">Upcoming</Link>
                </div>
                {
                    movieInfo.isFetched?(
                        <>
                       
                            <div className='wrap'>
                                
                                    <div className="wrap-left">
                                         <h1 className='title'>{movieInfo.data.title}</h1>
                                            <MovieCard
                                            
                                                imgLink = {`https://image.tmdb.org/t/p/w500${movieInfo.data.poster_path}`}
                                                
                                            />
                                    </div>
                                    <div className="wrap-right">
                                    </div>

                                    <div className="wrap-bottom">
                                        
                                    <div className="front-info">
                                        <h1>{movieInfoData.title}</h1>
                                        <h2>{movieInfoData.original_title}</h2>
                                        <p>{movieInfoData.overview}</p>
                                        <h4>
                                        Release date: <span>{movieInfoData.release_date}</span>
                                        </h4>
                                        <h4>Runtime: {movieInfoData.runtime}</h4>

                                        {movieInfoData.genres.map((genre, index) => (
                                        <button key={index}>{genre.name}</button>
                                        ))}
                                        <h2>Actors:</h2>
                                        {
                                        actorsList.isFetched ? (
                                            <div className="actors-list">
                                            {
                                                
                                                movieCastActors.map((actor, index) => (
                                                    
                                                    <>
                                                        <ActorCard
                                                        id={actor.id} 
                                                        key={index}
                                                        name={actor.name}
                                                        charName={actor.character}
                                                        
                                                        imgLink={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                                    />
                                                    <h1 className='title'>{movieCastActors.name}</h1>
                                                    </>
                                                ))
                                            }
                                            </div>
                                        ) : (
                                            <h2>
                                            Loading ...
                                            </h2>
                                        )
                                        }
                                    </div>
                                    </div>
                                
                            </div>

                            <div className="recom">
                            <h1>Recommended to watch</h1>
                             {
                                movieInfoRec.isFetched ? ( 
                                    <div className="rec-movie-list">
                                        
                                        {
                                            movieInfoRec.data.results.slice(0, 8).map((movie, index) => (
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
                    ):(
                        <h1>Loading...</h1>
                    )
                }
              
            </div>
            
       </>
    )
}

export default SingleMovies;