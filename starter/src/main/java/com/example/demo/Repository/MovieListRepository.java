package com.example.demo.Repository;

import com.example.demo.Modele.MovieList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieListRepository extends JpaRepository<MovieList, Integer> {
    /**
     * Request to get user's list by his ID
     * */
    @Query(value = "SELECT * FROM T_MOVIE_LIST m WHERE m.fk_id_user = ?1", nativeQuery = true)
    List<MovieList> getListUserById(int idUser);

    @Query(value = "SELECT * FROM T_MOVIE_LIST m WHERE m.fk_id_user = ?1 and m.fk_id_movie = ?2", nativeQuery = true)
    MovieList getDetailMovie(int idUSer, int idMovie);
}
