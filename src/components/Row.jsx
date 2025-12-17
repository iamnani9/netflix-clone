import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import axios from "../services/axios";
import TrailerModal from "./TrailerModal";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    try {
      const url = await movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ""
      );
      const params = new URLSearchParams(new URL(url).search);
      setTrailerId(params.get("v"));
    } catch {
      console.log("Trailer not found");
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/w300${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      <TrailerModal
        videoId={trailerId}
        onClose={() => setTrailerId(null)}
      />
    </div>
  );
}

export default Row;
