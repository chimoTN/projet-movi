import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesComponent from './MovieComponent'
import HomeComponenent from './HomeComponent'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponenent />} />
                <Route path="/allMovies" element={<MoviesComponent />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;