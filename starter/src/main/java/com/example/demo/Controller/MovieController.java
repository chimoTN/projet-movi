package com.example.demo.Controller;

import com.example.demo.Modele.Movie;
import com.example.demo.Repository.MovieRepository;
import com.example.demo.Service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {

    @Autowired
    MovieService movieService;

    @GetMapping("/all")
    public Iterable<Movie> getAllMovies(){
        return movieService.getAllMovie();
    }

    @PostMapping("/addMovie")
    public Movie createMovie(@RequestBody Movie movie) {
        return movieService.saveMovie(movie);
    }

}
