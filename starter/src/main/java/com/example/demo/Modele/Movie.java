package com.example.demo.Modele;

import jakarta.persistence.*;

@Entity
@Table(name="T_MOVIE")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idMovie;

    @Column(columnDefinition = "text", length = 1000)
    private String title;

    @Column(columnDefinition = "text", length = 1000)
    private String producer;

    @Column(columnDefinition = "text", length = 1000)
    private String description;

    @Column(columnDefinition = "text", length = 1000)
    private String image;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getIdMovie() {
        return idMovie;
    }

    public void setIdMovie(int idMovie) {
        this.idMovie = idMovie;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
