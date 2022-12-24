import React from 'react'
import MoviesService from '../services/MovieService'
import { FaPlusSquare } from 'react-icons/fa'


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

                {
                    this.state.movies.length === 0 ?
                        (
                            <h2 className='text-center no-data'>Aucun film enregistré</h2>
                        )
                        : (
                            <div className='MovieComponent'>
                                {
                                    this.state.movies.map(
                                        movie =>
                                            <div className='box' key={movie.idMovie}>
                                                <div className='boxTitle'>{movie.title}</div>
                                                <br />
                                                <div className='boxCorps'>
                                                    <b>Réalisateur : </b>{movie.producer} <br /><br />
                                                    <p><b>Description : </b></p>{movie.description}
                                                </div>
                                                <button className='boxButton'><FaPlusSquare /></button>
                                            </div>
                                    )
                                }
                            </div>

                        )
                }

            </>



        )
    }

}

export default MoviesComponent