package com.example.demo.Service;

import com.example.demo.Modele.User;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User getUser(int idUser){
        return userRepository.getReferenceById(idUser);
    }


}
