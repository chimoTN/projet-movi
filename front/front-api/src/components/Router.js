import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesComponent from './MovieComponent'
import HomeComponent from './HomeComponent'
import MyListComponent from './UserMovieListComponent';
import DetailMovieComponent from './DetailMovieComponent';
import HeaderComponent from './Header';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <br></br>
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/getAllMovies" element={<MoviesComponent />} />
                    <Route path="/getMyList/1" element={<MyListComponent />} />
                    <Route path="/getDetailMovie/:idUser/:idMovie" element={<DetailMovieComponent />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;