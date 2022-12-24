package com.example.demo.Modele;

import jakarta.persistence.*;

@Entity
@Table(name="T_USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUser;

    @Column(columnDefinition = "text", length = 1000)
    private String token;

    @Column(columnDefinition = "text", length = 1000)
    private String login;

    @Column(columnDefinition = "text", length = 1000)
    private String motDePasse;

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

}
