import React from "react";
import { NavLink } from 'react-router-dom';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash, FaCaretSquareRight } from 'react-icons/fa'

class HomeComponenent extends React.Component {
    render() {
        return (
            <>
                <div className='titre'>
                    <p>BIENVENUE SUR LIBRARY MOVIES</p>
                </div>
                <button className="homeBoutton1 homeButton"> <FaCaretSquareRight /> Parcourir Films</button>
                <button className="homeBoutton2 homeButton"> <FaListAlt /> Consulter Ma Liste </button>


            </>
        )
    }


}

export default HomeComponenent