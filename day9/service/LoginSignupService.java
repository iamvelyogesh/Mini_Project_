package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LoginSignup;
import com.example.demo.repo.LoginSignuprepo;

@Service
public class LoginSignupService {
    private final LoginSignuprepo userRepository;

    @Autowired
    public LoginSignupService(LoginSignuprepo userRepository) {
        this.userRepository = userRepository;
    }

    public List<LoginSignup> getAllUsers() {
        return userRepository.findAll();
    }

    public LoginSignup getUserById(Long id) {
        Optional<LoginSignup> userOptional = userRepository.findById(id);
        return userOptional.orElse(null);
    }

    public LoginSignup createUser(String name, String email, String password) {
    	LoginSignup user = new LoginSignup(name, email, password);
        return userRepository.save(user);
    }

    public LoginSignup findUserByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public LoginSignup updateUser(Long id, LoginSignup user) {
        Optional<LoginSignup> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
        	LoginSignup existingUser = userOptional.get();
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
