package com.example.demo.Service;

import com.example.demo.Repository.MovieListRepository;
import com.example.demo.Repository.MovieRepository;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class MovieListService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    MovieListRepository movieListRepository;

}
