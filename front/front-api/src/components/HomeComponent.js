import React from "react";
import { Link } from 'react-router-dom';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash, FaCaretSquareRight } from 'react-icons/fa'

class HomeComponenent extends React.Component {
    render() {
        return (
            <>
                <div className='titre'>
                    <p>BIENVENUE SUR LIBRARY MOVIES</p>
                </div>
                <Link to='getAllMovies' className="homeBoutton1 homeButton"> <FaCaretSquareRight /> Parcourir Films</Link>
                <Link to='getMyList' className="homeBoutton2 homeButton"> <FaListAlt /> Consulter Ma Liste </Link>

            </>
        )
    }


}

export default HomeComponenent