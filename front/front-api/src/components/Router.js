import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesComponent from './MovieComponent'
import HomeComponenent from './HomeComponent'
import MyListComponent from './UserMovieListComponent';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponenent />} />
                <Route path="/getAllMovies" element={<MoviesComponent />} />
                <Route path="/getMyList/1" element={<MyListComponent />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;