package com.sizerecom.springbootbackend.controller;

//import com.sizerecom.springbootbackend.exception.UserNotFoundExceptioncls;
import com.sizerecom.springbootbackend.model.Register;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sizerecom.springbootbackend.repository.RegisterRepo;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:8081")
public class RegisterController {
   @Autowired

    private RegisterRepo registerRepo;

   //post mapping- annotation for mapping HTTP POST req- for postman api
   @PostMapping("/user")
   //create a new user(REgister)
   Register newUser(@RequestBody Register newUser) {
       return registerRepo.save(newUser);
   }

   //get mapping annotation
    @GetMapping("/allusers")
    //to get all the users
    List<Register> getAllusers() {
        return registerRepo.findAll();
    }

//    @GetMapping("/user/{username}") //GET THE USER INFO USING ID
//    Register getUserById(@PathVariable String username) { //for the specific user
//        return registerRepo.findById(Long.valueOf(username)).orElseThrow(() -> new UserNotFoundExceptioncls(username));
//    }

    @PostMapping("/userlogin")
    public ResponseEntity<String> userLogin(@RequestParam String username, @RequestParam String password) {
        Register user = registerRepo.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }
    }

    
}


