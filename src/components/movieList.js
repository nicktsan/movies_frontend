import React from 'react';
import axios from 'axios';
//import 'dotenv/config'

export default class MovieList extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        const url = process.env.REACT_APP_URL
        //console.log("REACT_APP_URL:" + url)
        axios.get(url)
            .then(res => {
                const movies = res.data;
                this.setState({ movies });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.movies
                        .map(movie =>
                            <li key={[movie.year, movie.title]}>{movie.year}, {movie.title}, {movie.rentPrice}, {movie.buyPrice} </li>
                        )
                }
            </ul>
        )
    }
}