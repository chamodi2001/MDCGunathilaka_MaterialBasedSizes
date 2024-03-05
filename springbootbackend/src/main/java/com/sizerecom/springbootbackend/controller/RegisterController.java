package com.sizerecom.springbootbackend.controller;

//import com.sizerecom.springbootbackend.exception.UserNotFoundExceptioncls;
import com.sizerecom.springbootbackend.model.Register;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sizerecom.springbootbackend.repository.RegisterRepo;

import java.util.List;


@RestController
@CrossOrigin("http://192.168.186.125:8081")
//@RequestMapping("/api")
public class RegisterController {
   @Autowired //instance or object of the RegisterRepo can be used in the RegisterController(this class)
   //since Register repo is an interface , cannot simply create an instance/object of that interface or call that interface
   //if we do not use autowired annotation, we have to first get the methods thgat are in the RegisterRepo,
   // public class RegisterRepoImpl implements RegisterRepo {//write the methods of RegisterRepo here//}

     //then after getting the required methods we have to create the specific controller,
     //public class RegisterController {
   //    private RegisterRepo registerRepo = new RegisterRepoImpl();
   //    ///other controller codes///}

   private RegisterRepo registerRepoObj; //interface and object //in here we call this to import the save method from RegisterRepo interface, jpa framework


   //post mapping- annotation for mapping HTTP POST req- for postman api
   @PostMapping("/user")
   //create a new user(REgister)
   Register newUser(@RequestBody Register newUser) {
       return registerRepoObj.save(newUser); //obj.method //the save()- method is from the RegisterRepo interface that contains Jpa framework/interface
   }

   //get mapping annotation
    @GetMapping("/allusers")
    //to get all the users
    List<Register> getAllusers() {
        return registerRepoObj.findAll();
    }
    //////////////////////////////////////



    }

    



