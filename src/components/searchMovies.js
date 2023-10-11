import React from 'react';
import axios from 'axios';
//import 'dotenv/config'

export default class SearchMovies extends React.Component {
    state = {
        moviesearch: '',
        movie: []
    }

    handleChange = event => {
        this.setState({ moviesearch: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            moviesearch: this.state.moviesearch
        };
        const url = process.env.REACT_APP_SCAN_URL + "titles/" + user.moviesearch
        console.log("url: " + url)
        axios.get(url/*, { user }*/)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const movie = res.data;
                this.setState({ movie });
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search for movies:
                        <input type="text" moviesearch="moviesearch" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {
                        this.state.movie
                            .map(movie =>
                                <li key={[movie.year, movie.title]}>{movie.year}, {movie.title}, Rent Price: {movie.rentPrice} Buy Price: {movie.buyPrice} </li>
                            )
                    }
                </ul>
            </div>
        )
    }
}