import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    }, []);

    return (
        <div>
            <div className="row">
                <h2 className="title__row">{props.name}</h2>
                <div className="container__movies">
                    {movies.map((item) => (
                        <Link to={`${item.id}`} key={item.id}>
                            <img src={`${BASE_URL_IMAGE}${props.isLargeRow ? item.poster_path : item.backdrop_path}`} alt={item.name} className={`Image__movie ${props.isLargeRow == false ? "large__row" : ""}`} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Row;
