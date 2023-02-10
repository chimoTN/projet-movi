package com.example.demo.Service;

import com.example.demo.Modele.Movie;
import com.example.demo.Modele.MovieList;
import com.example.demo.Modele.User;
import com.example.demo.Repository.MovieListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieListService {

    @Autowired
    MovieListRepository movieListRepository;

    @Autowired
    MovieService movieService;

    @Autowired
    UserService userService;

    /**
     * @return : user's movies list
     * */
    public List<MovieList> getMyListByIdUser(int idUser){
        return movieListRepository.getListUserById(idUser);
    }

    /**
     * @return : movie's detail
     * */
    public List<MovieList> getDetailMovie(int idUser, int idMovie){
        return movieListRepository.getDetailMovie(idUser,idMovie);
    }

    /**
     * Cette méthode ajoute un film dans la liste du user
     * Vérifie avant si ce film n'est pas déjà présent dans sa liste
     * Si oui return null
     * Sinon la création de l'objet MovieList
     * */
    public MovieList addMovieOnUserList(MovieList movieOnList, int idUser, int idMovie){
        List<MovieList> movieList = movieListRepository.getDetailMovie(idUser,idMovie);
        if(movieList.size()==0){
            Movie movie = movieService.getMovie(idMovie);
            User user = userService.getUser(idUser);
            movieOnList.setMovie(movie);
            movieOnList.setUser(user);
            return movieListRepository.save(movieOnList);
        }else {
            return null;
        }
    }


    /**
     * @param idMovieList : user's id
     * @param movieList : le champ note et viewCount
     * */
    public int updateMovieList(int idMovieList, MovieList movieList){
        return movieListRepository.updateDetailMovieList(idMovieList,movieList.getNote(),movieList.getViewCount());

    }
}
