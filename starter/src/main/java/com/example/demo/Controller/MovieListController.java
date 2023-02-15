package com.example.demo.Controller;

import com.example.demo.Modele.MovieList;
import com.example.demo.Repository.MovieListRepository;
import com.example.demo.Service.MovieListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MovieListController {
    @Autowired
    MovieListService movieListService;
    MovieListRepository movieListRepository;

    /**
     * @param idUser : user's id to get his List of movies
     * @return List<MovieList> : return user's list
     */
    @GetMapping("/getMyList/{idUser}")
    public Iterable<MovieList> getMyList(@PathVariable Integer idUser) {
        return movieListService.getMyListByIdUser(idUser);
    }

    /**
     * @param idUser  : user's id
     * @param idMovie : movie's id
     * @return List<MovieList> : return movie's detail
     */
    @GetMapping("/getDetailMovie/{idUser}/{idMovie}")
    public List<MovieList> getDetailMovie(@PathVariable int idUser, @PathVariable int idMovie) {
        return movieListService.getDetailMovie(idUser, idMovie);
    }

    /**
     * @param idUser  : user's id
     * @param idMovie : movie's id
     * @return ResponseEntity : en fonction du résultat du service, envoie echec ou success
     */
    @PostMapping("/addMovieOnAList/{idUser}/{idMovie}")
    public ResponseEntity<String> addMovieOnUserList(@RequestBody MovieList movieOnList, @PathVariable int idUser, @PathVariable int idMovie){
        MovieList movieList = movieListService.addMovieOnUserList(movieOnList, idUser, idMovie);
        if (movieList != null) {
            return new ResponseEntity<>("Le film " + movieList.getMovie().getTitle() + " a été ajouté à votre liste.", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Le film est déjà présent dans votre liste !", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * On remove un movie de la playlist du user
     */
    @DeleteMapping ("/removePlayListUserMovie/{idMovieList}")
    public ResponseEntity<String> removeMoviePlaylist(@PathVariable int idMovieList) {

        try {
            //on supprime le movie
            movieListService.deleteMovie(idMovieList);
            return new ResponseEntity<String>("",HttpStatus.NO_CONTENT);
        }
        catch (Exception e ){
            return new ResponseEntity<String>("le film n'existe pas",HttpStatus.NOT_FOUND);
        }
    }

}