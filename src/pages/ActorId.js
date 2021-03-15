import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from '../components/MovieCard'

// import "./pages.scss";

const ActorId = ({ match }) => {
  const [actorMovie, setActorMovie] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${match.params.id}/movie_credits`,
        {
          params: {
            api_key: "d2a8ca5d342a4ac27541b9319d594c83",
          },
        }
      )
      .then(function (response) {
        setActorMovie({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setActorMovie({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
      });
  }, []);

  return (
 
      <div className="container">
          {
              actorMovie.isFetched ? (
                <div className="movie-list">
                    {
                        actorMovie.data.cast.map((movie, index) => (
                            <MovieCard
                              id={movie.id}
                              title={movie.title}
                              imgLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              rating={movie.vote_average}
                              releaseDate={movie.release_date}
                              key={index}
                            />
                        ))
                    }
                </div>
              ) : (
                  <p>Loading...</p>
              )
          }         
      </div>
  );
};

export default ActorId;