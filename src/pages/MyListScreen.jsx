import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import './MyListScreen.css';
import { getMyList, removeFromMyList } from '../features/listHelper';
import TrailerModal from '../components/TrailerModal';
import movieTrailer from 'movie-trailer';

function MyListScreen() {
    const [myList, setMyList] = useState([]);
    const [trailerId, setTrailerId] = useState(null);

    useEffect(() => {
        setMyList(getMyList());
    }, []);

    const handleRemove = (id) => {
        const updated = removeFromMyList(id);
        setMyList(updated);
    };

    const handlePlay = async (movie) => {
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
        <div className="myListScreen">
            <Nav />
            <div className="myListScreen__body">
                <h1>My List</h1>
                {myList.length === 0 ? (
                    <div className="myListScreen__empty">
                        <p>You haven't added any movies to your list yet.</p>
                    </div>
                ) : (
                    <div className="myListScreen__grid">
                        {myList.map(movie => (
                            <div key={movie.id} className="myListScreen__card">
                                <img
                                    className="myListScreen__poster"
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.name}
                                    onClick={() => handlePlay(movie)}
                                />
                                <button 
                                    className="myListScreen__removeBtn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemove(movie.id);
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
             <TrailerModal
                videoId={trailerId}
                onClose={() => setTrailerId(null)}
            />
        </div>
    );
}

export default MyListScreen;
