package com.example.demo.Controller;

import com.example.demo.Modele.MovieList;
import com.example.demo.Modele.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getUser/{idUser}")
    public User getUser(@PathVariable int idUser){
        return userService.getUser(idUser);
    }

}
