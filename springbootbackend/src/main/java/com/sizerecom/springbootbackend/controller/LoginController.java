package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Login;
import com.sizerecom.springbootbackend.model.Register;
import com.sizerecom.springbootbackend.repository.LoginRepo;
import com.sizerecom.springbootbackend.repository.RegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController //has controller and Responsebody annotation
// @controller=-can handle the req //@requestbody- return value translates to HTTP response body
@CrossOrigin("http://192.168.1.59:8081")

public class LoginController {
    @Autowired
//    private LoginRepo loginRepoObj;

//    @PostMapping("/login")
//    Login oldUser(@RequestBody Login oldUser){
//        return loginRepoObj.save(oldUser);
//    }

//    @PostMapping("/login")
//    public ResponseEntity<String> loginmethod(@RequestBody Login oldUser) {
//        Login existingUser = loginRepoObj.findByloginUsername(oldUser.getloginUsername());
//
//        if (existingUser != null && existingUser.getloginPassword().equals(oldUser.getloginPassword())) {
//            return new ResponseEntity<>("Login successful", HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
//        }
//    }
    private RegisterRepo registerRepoObj;
@PostMapping("/userlogin")
public ResponseEntity<String> loginmethod(@RequestBody Login oldUser) {
    Register existingUser = registerRepoObj.findByUsername(oldUser.getLoginusername());

    if (existingUser != null && existingUser.getPassword().equals(oldUser.getLoginpassword())) {
        return new ResponseEntity<>("Login Successful", HttpStatus.OK);
    } else {
        return new ResponseEntity<>("Wrong Password or Username", HttpStatus.UNAUTHORIZED);
    }
}

//    @PostMapping("/login")
//    //ResponseEntity idicades the entire HTTP response and <?> means-type of that response can be any
//    public ResponseEntity<?> varifyUser(@RequestBody Login olduser) {
//        return loginRepoObj.findByUsername(olduser);
//
//        //veryfies and authenticate the user
//        Optional<User> optionalUser = userRepository.findByUsername(Login.getUsername());
//        if (!optionalUser.isPresent()) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Username or Password");
//        }
//
//        User user = optionalUser.get();
//
//        // Validate password
//        if (!passwordEncoder.matches(Login.getPassword(), user.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Username or Password");
//        }
//
//        // If username and password are valid, return a success message
//        return ResponseEntity.ok("Login successful");
//    }
}
