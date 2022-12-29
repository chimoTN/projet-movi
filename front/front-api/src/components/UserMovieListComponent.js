import React from 'react'
import MoviesService from '../services/UserMovieListService'
import { FaMinusSquare, FaEye } from 'react-icons/fa'
import { Form, Input, Button, Space } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'


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
                                                <div className='divButton'>
                                                    <Link to={`/getDetailMovie/${movie.user.idUser}/${movie.movie.idMovie}`}>
                                                        <Button type="primary" block>
                                                            Détail
                                                        </Button>
                                                    </Link>

                                                    <Button type="primary" block>
                                                        Supprimer
                                                    </Button>
                                                </div>
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