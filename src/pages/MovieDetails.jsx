import axios from "axios";
import { useParams } from "react-router-dom";
import './MovieDetails.css'

import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  const fetchDetails = async () => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${id}&plot=full&apikey=57d29f21`
      );
      setMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchDetails();
}, [id]);


  if (!movie) return <p>Loading...</p>;

  return (
   <div className="movie-details">
  <img
  src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
  alt={movie.Title}
/>


  <div className="movie-info">
    <h1>{movie.Title}</h1>
    <p>{movie.Plot}</p>
    <p>⭐ {movie.imdbRating}</p>

    <button>Watch Trailer</button>
  </div>
</div>

  );
};

export default MovieDetails;