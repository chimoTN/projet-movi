package com.example.demo.Modele;

import jakarta.persistence.*;
import org.springframework.lang.NonNull;

@Entity
@Table(name="T_MOVIE_LIST")
public class MovieList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idListMovie;

    @ManyToOne(targetEntity = User.class,fetch=FetchType.EAGER)
    @JoinColumn(name = "fk_id_user", referencedColumnName = "idUser")
    private User user;

    @ManyToOne(targetEntity = Movie.class,fetch=FetchType.EAGER)
    @JoinColumn(name = "fk_id_movie", referencedColumnName = "idMovie")
    private Movie movie;

    @Column(columnDefinition = "int", length = 1000)
    private int viewCount;

    @Column(columnDefinition = "int", length = 1000)
    private int note;

    public int getIdListMovie() {
        return idListMovie;
    }

    public void setIdListMovie(int idListMovie) {
        this.idListMovie = idListMovie;
    }


    public int getViewCount() {
        return viewCount;
    }

    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }

    public int getNote() {
        return note;
    }

    public void setNote(int note) {
        this.note = note;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
