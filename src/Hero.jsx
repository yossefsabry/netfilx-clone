import React, { useEffect, useState } from 'react'
import { API_KEY } from './data';

const Hero = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                let fetchedMovies = data.results;
                setMovies(fetchedMovies[
                    Math.floor(Math.random() * fetchedMovies.length - 1)
                ]);
                // console.log(movies)
            });
    }, []);
    return (
        <div className='container__hero' style={{background: `url(https://image.tmdb.org/t/p/original/${movies.poster_path})`}}>
            <h1>{movies.title || movies.name || movies.original_name}</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <button>Play</button>
                <button>My List</button>
            </div>
            <p>{movies.overview}</p>
            <div className='banner__fadebottom'></div>
        </div>
    )
}

export default Hero
