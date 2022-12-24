import React from 'react'
import MoviesService from '../services/MovieService'

class MoviesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        MoviesService.getUsers().then((response) => {
            this.setState({ movies: response.data })
        })
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Liste des Films</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Movies ID</td>
                            <td>Title</td>
                            <td>Réalisateur</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map(
                                movie =>
                                    <tr key={movie.idMovie}>
                                        <td>{movie.idMovie}</td>
                                        <td>{movie.title}</td>
                                        <td>{movie.producer}</td>
                                        <td>{movie.description}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </>



        )
    }

}

export default MoviesComponent