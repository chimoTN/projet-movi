package com.example.demo.Service;

import com.example.demo.Modele.Movie;
import com.example.demo.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    public Movie saveMovie(Movie movie){

        Movie saveMovie = movieRepository.save(movie);

        return saveMovie;
    }

    public Iterable<Movie> getAllMovie(){
        return movieRepository.findAll();
    }

}
