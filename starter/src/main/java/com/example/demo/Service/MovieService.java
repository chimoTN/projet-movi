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
        return movieRepository.save(movie);
    }

    public Iterable<Movie> getAllMovie(){
        return movieRepository.findAll();
    }

    public Movie getMovie(int idMovie){
        return movieRepository.getReferenceById(idMovie);
    }

}
