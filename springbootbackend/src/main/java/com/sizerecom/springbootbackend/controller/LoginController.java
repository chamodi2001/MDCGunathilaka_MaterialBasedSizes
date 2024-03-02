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

    private RegisterRepo registerRepoObj;
@PostMapping("/userlogin")
public ResponseEntity<String> loginmethod(@RequestBody Login oldUser) {
    //This line retrieves a Register object from the registerRepoObj repository using the username from the loginuser object.
    // The Register object represents a user that has already registered.
    //call the Register
    Register existingUser = registerRepoObj.findByUsername(oldUser.getLoginusername());

    if (existingUser != null && existingUser.getPassword().equals(oldUser.getLoginpassword())) {
        return new ResponseEntity<>("Login Successful", HttpStatus.OK);
    } else {
        return new ResponseEntity<>("Wrong Password or Username", HttpStatus.UNAUTHORIZED);
    }
}
}
