import React, { useContext } from 'react';
import { useEffect } from 'react';
import  Axios  from 'axios';
import {Form} from 'antd';
import {MyContext} from '../context/UserContext'

const Profil = () => {

    const { user, setUser } = useContext(MyContext);

    //Requette de recuperation des information de l'utilateur
    const seeProfil = () => {
        Axios
            .get(`http://localhost:8080/getUser/1`)
            .then((response) => setUser(response.data))
            .catch((error) => console.log("erreur => ",error))

    }

    useEffect(() => {
        seeProfil();
    }, []);

    return (
        <>
            <div className='titre'>
                <p>Profil</p>
            </div>

            <Form hoverable
                  style={
                      { marginLeft : "37%", width: '25%', padding:50 ,background:"#80808014", borderRadius: '10px'}
                  }>
                <p>id : {user.idUser}</p>
                <p>token : {user.token}</p>
                <p>login : {user.login}</p>

            </Form>
        </>
    )
}

export default Profil