import React from 'react'
import MoviesService from '../services/UserMovieListService'
import { FaMinusSquare } from 'react-icons/fa'


class MyListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        MoviesService.getUserMovieList().then((response) => {
            this.setState({ movies: response.data })
        })
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Ma Liste</h1>

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
                                            <div className='box' key={movie.idListMovie}>
                                                <div className='boxTitle'>{movie.movie.title}</div>
                                                <div className='boxCorps'>
                                                    <b>Réalisateur : </b>{movie.movie.producer}
                                                    <p><b>Description : </b></p>{movie.movie.description}
                                                </div>
                                                <button className='boxButton'><FaMinusSquare /></button>
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

export default MyListComponent