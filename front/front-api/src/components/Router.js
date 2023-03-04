import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesComponent from './MovieComponent'
import HomeComponent from './HomeComponent'
import MyListComponent from './UserMovieListComponent';
import DetailMovieComponent from './DetailMovieComponent';
import HeaderComponent from './Header';
import Profil from './Profil';
import UserContext from '../context/UserContext';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <UserContext>
                    <HeaderComponent />
                    <br></br>
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/getAllMovies" element={<MoviesComponent />} />
                        <Route path="/getMyList/1" element={<MyListComponent />} />
                        <Route path="/getDetailMovie/:idUser/:idMovie" element={<DetailMovieComponent />} />
                        <Route path="/getMyProfil" element={<Profil />} />
                    </Routes>
                </UserContext>
            </BrowserRouter>
        </>
    );
};

export default Router;