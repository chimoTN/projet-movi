package com.example.demo.Repository;

import com.example.demo.Modele.MovieList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieListRepository extends JpaRepository<MovieList, Integer> {
}
