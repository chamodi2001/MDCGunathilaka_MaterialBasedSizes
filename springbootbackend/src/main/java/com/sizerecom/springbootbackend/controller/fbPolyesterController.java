package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.ImageCotton;
import com.sizerecom.springbootbackend.model.Login;
import com.sizerecom.springbootbackend.model.Register;
import com.sizerecom.springbootbackend.model.fbPolyester;
import com.sizerecom.springbootbackend.repository.fbPolyesterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.nio.file.Files.find;

@RestController
public class fbPolyesterController {
    @Autowired
    private fbPolyesterRepo fbPolyesterRepoObj;
    public fbPolyester obj;


//    @PostMapping("/feedbackPolyester/put")
//    fbPolyester newFeedbcak(@RequestBody fbPolyester newFeedbcak) {
//        return fbPolyesterRepoObj.save(newFeedbcak); //obj.method //the save()- method is from the RegisterRepo interface that contains Jpa framework/interface
//    }
    private double max;
    private double min;

//    @GetMapping("/feedbackPolyester/get")
    //better to pu the model name for the function
//    public fbPolyester getFbPolyester(@PathVariable long id) {
//        fbPolyesterRepoObj.findByid(id);

    @GetMapping("/feedbackPolyester/{UserUksize}")
    public String getSwitch(@PathVariable int Uksize) {
        switch (Uksize) {
            case 6:
                return getFbPolyester(6);
            case 8:
                return getFbPolyester(8);
            case 10:
                return getFbPolyester(10);
            case 12:
                return getFbPolyester(12);
            case 14:
                return getFbPolyester(14);
            case 16:
                return getFbPolyester(16);
            // Add more cases as needed for other marks categories
            default:
                return "Invalid uksize category.";
        }
    }
    public String getFbPolyester(int Uksize) {
        List<fbPolyester> fbPolyestersObj = fbPolyesterRepoObj.findByuksize(Uksize);
        if (!fbPolyestersObj.isEmpty()) {
            min = fbPolyestersObj.get(0).getUsercw();
            max = fbPolyestersObj.get(0).getUsercw();
            for (fbPolyester Usercwobj : fbPolyestersObj) {
                double cw = Usercwobj.getUsercw();
                if (cw < min) {
                    min = cw;
                }
                if (cw > max) {
                    max = cw;
                }
//            }return min +max;
            }return "min is"+min+ "max is " +max;
        }else {
            return "No data available " ;
        }
        /////////
    }

    //after finding the max and min, can put this in a swich statement
//    private double size6;
//    @GetMapping("/feedbackPolyester/{cw}")
//
//    public ResponseEntity<String> method(@RequestBody fbPolyester uksize) {
//
//        fbPolyester UserUksize = fbPolyesterRepoObj.findByUserUksize(uksize.getUserUksize());
//        switch(UserUksize){
//            //make it in a range
//                case 6: find(min);
//        }
//    }


}

//first look
////////////////////////
//        double Usercw=obj.getUsercw();
//    double UserUksize=obj.getUserUksize();
////    return new fbPolyester(Usercw,UserUksize);
//
//        for (int i = 0; i < 6; i++) {
//            switch(UserUksize){
//                case 6:if(Usercw[i]>max){
//                    max=Usercw[i];
//                }
//            }
//        }




