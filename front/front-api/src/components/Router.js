import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesComponent from './MovieComponent'
import HomeComponenent from './HomeComponent'
import MyListComponent from './UserMovieListComponent';
import DetailMovieComponent from './DetailMovieComponent';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponenent />} />
                <Route path="/getAllMovies" element={<MoviesComponent />} />
                <Route path="/getMyList/1" element={<MyListComponent />} />
                <Route path="/getDetailMovie/:idUser/:idMovie" element={<DetailMovieComponent />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;