package com.example.demo.Repository;

import com.example.demo.Modele.MovieList;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieListRepository extends JpaRepository<MovieList, Integer> {
    /**
     * Request to get user's list by his ID
     * */
    @Query(value = "SELECT * FROM T_MOVIE_LIST m WHERE m.fk_id_user = ?1", nativeQuery = true)
    List<MovieList> getListUserById(int idUser);

    /**
     * Request to get movie's detail
     * */
    @Query(value = "SELECT * FROM T_MOVIE_LIST m WHERE m.fk_id_user = ?1 and m.fk_id_movie = ?2", nativeQuery = true)
    List<MovieList> getDetailMovie(int idUSer, int idMovie);

    @Transactional
    @Modifying
    @Query(value = "UPDATE T_MOVIE_LIST SET view_count = ?3, note = ?2 WHERE id_list_movie = ?1", nativeQuery = true)
    int updateDetailMovieList(int idMovieList, int note, int viewCount);
}
