import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../services/axios';
import requests from '../services/requests';
import './SearchScreen.css';
import Nav from '../components/Nav';
import TrailerModal from '../components/TrailerModal';
import movieTrailer from 'movie-trailer';

function SearchScreen() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");
    const [results, setResults] = useState([]);
    const [trailerId, setTrailerId] = useState(null);

    useEffect(() => {
        async function fetchSearchResults() {
            if (query) {
                const request = await axios.get(`${requests.fetchSearch}${query}`);
                // Filter out people, keep only tv and movies
                const filtered = request.data.results.filter(
                    item => item.media_type !== 'person' && item.poster_path
                );
                setResults(filtered);
            }
        }
        fetchSearchResults();
    }, [query]);

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
        <div className="searchScreen">
            <Nav />
            <div className="searchScreen__results">
                 <h2>Results for "{query}"</h2>
                 <div className="searchScreen__grid">
                    {results.map(movie => (
                        <img
                            key={movie.id}
                            className="searchScreen__poster"
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                    {results.length === 0 && query && (
                        <h3 className="searchScreen__noResults">No movies found.</h3>
                    )}
                 </div>
            </div>
             <TrailerModal
                videoId={trailerId}
                onClose={() => setTrailerId(null)}
            />
        </div>
    );
}

export default SearchScreen;
