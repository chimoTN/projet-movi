package com.example.demo.Service;

import com.example.demo.Modele.MovieList;
import com.example.demo.Repository.MovieListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieListService {

    @Autowired
    MovieListRepository movieListRepository;

    /**
     * @return : user's movies list
     * */
    public List<MovieList> getMyListByIdUser(int idUser){
        return movieListRepository.getListUserById(idUser);
    }

    public MovieList getDetailMovie(int idUser, int idMovie){
        return movieListRepository.getDetailMovie(idUser,idMovie);
    }

}
