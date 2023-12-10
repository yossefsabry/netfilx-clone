import { useState, useEffect } from "react";

const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original/"

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3${props.url}`)
            .then((response) => response.json())
            .then((data) => {
                let fetchedMovies = data.results;
                setMovies(fetchedMovies);
            });
    }, [props.url]);

    return (
        <div>
            <div className="row">
                <h2 className="title__row">{props.name}</h2>
                <div className="container__movies">
                    {movies.map((item) => (
                        <img key={item.id} src={`${BASE_URL_IMAGE}${props.isLargeRow ? item.poster_path : item.backdrop_path}`} alt={item.name} className={`Image__movie ${props.isLargeRow == false ? "large__row" : ""}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Row;
