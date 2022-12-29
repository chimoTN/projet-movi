package com.example.demo.Controller;

import com.example.demo.Modele.MovieList;
import com.example.demo.Service.MovieListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MovieListController {
    @Autowired
    MovieListService movieListService;

    /**
     * @param idUser : user's id to get his List of movies
     * @return List<MovieList> : return user's list
     * */
    @GetMapping("/getMyList/{idUser}")
    public Iterable<MovieList> getMyList(@PathVariable Integer idUser){
        return movieListService.getMyListByIdUser(idUser);
    }
    /**
     * @param idUser : user's id
     * @param idMovie : movie's id
     * @return List<MovieList> : return movie's detail
     * */
    @GetMapping("/getDetailMovie/{idUser}/{idMovie}")
    public List<MovieList> getDetailMovie(@PathVariable int idUser, @PathVariable int idMovie){
        return movieListService.getDetailMovie(idUser,idMovie);
    }
}
