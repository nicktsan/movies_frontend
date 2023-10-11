import React from 'react';
import axios from 'axios';
//import 'dotenv/config'

export default class MovieList extends React.Component {
    state = {
        movie: []
    }

    componentDidMount() {
        const url = process.env.REACT_APP_SCAN_URL + "items"
        //console.log("REACT_APP_SCAN_URL:" + url)
        axios.get(url)
            .then(res => {
                const movie = res.data;
                this.setState({ movie });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.movie
                        .map(movie =>
                            <li key={[movie.year, movie.title]}>{movie.year}, {movie.title}, {movie.rentPrice}, {movie.buyPrice} </li>
                        )
                }
            </ul>
        )
    }
}