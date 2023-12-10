import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../data/data';
import YouTube from 'react-youtube';


const Product = () => {
    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original/";
    const { userId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${userId}?api_key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);


    // youtube
    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
        setShowVideo(!showVideo);
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div>
            <div className="container__movie">
                <div className='Image__movie__container'>
                    {movie.poster_path && <img key={movie.id} src={`${BASE_URL_IMAGE}${movie.poster_path}`} alt={movie.name} className='image__movie' />}
                </div>
                <div className='content__movie'>
                    <h1>Title: {movie.title || movie.name || movie.original_name}</h1>
                    <p>Description: <span>{movie.overview}</span></p>
                    <p>Original language: <span>{movie.original_language}</span></p>
                    <p>Genres: {movie.genres?.map(item => (<span key={item.id}>{item.name}, </span>))}</p>
                    <p>Release date: <span>{movie.release_date}</span></p>
                    <p>Status: <span>{movie.status}</span></p>
                    <p>Tagline: <span>{movie.tagline}</span></p>
                    <p>Adult: <span>{movie.adult ? "for everyone" : "+18"}</span></p>
                    <p>Production countries: <span>{movie.production_countries?.map((item) => (<span key={item.iso_3166_1}>{item.name}, </span>))}</span></p>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={toggleVideo} style={{ cursor: 'pointer' }}> {showVideo ? 'hide' : 'play'} video </button>
                        <button>My List</button>
                    </div>
                </div>

            </div>
            {showVideo && (
                <YouTube videoId={"I2Id_6OTHkI"} opts={opts} />
            )}
        </div>
    );
};

export default Product;
