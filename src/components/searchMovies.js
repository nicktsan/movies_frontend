import React, { useState } from 'react';
import axios from 'axios';

function SearchMovies() {
    const [movieSearch, setMovieSearch] = useState("");
    const [movie, setMovie] = useState([])

    function handleChange(event) {
        setMovieSearch(event.target.value);
    }

    function handleSubmit(event) {
        if (movieSearch.trim() !== "") {
            console.log("movie before set:")
            console.log(movie)
            event.preventDefault();
            console.log("movieSEarch from handleSubmit: " + movieSearch)
            const url = process.env.REACT_APP_SCAN_URL + "titles/" + movieSearch
            console.log("url: " + url)
            axios.get(url)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setMovie(movie => movie = res.data);
                    console.log("movie after set:")
                    console.log(movie);
                })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search for movies:
                    <input type="text" moviesearch="movieSearch" onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
            <ul>
                {
                    Array.from(movie)
                        .map(movie =>
                            <li key={[movie.year, movie.title]}>{movie.year}, {movie.title}, Rent Price: {movie.rentPrice} Buy Price: {movie.buyPrice} </li>
                        )
                }
            </ul>
        </div>
    )
}
export { SearchMovies }