package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.ImageCotton;
import com.sizerecom.springbootbackend.model.Login;
import com.sizerecom.springbootbackend.model.Register;
import com.sizerecom.springbootbackend.model.fbPolyester;
import com.sizerecom.springbootbackend.repository.RegisterRepo;
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

    /*public RegisterRepo registerRepoObj;

    public Register getcw(@PathVariable double chestwidth) {
        return registerRepoObj.findByChestwidth(chestwidth);
    }*/

    public Register registercwObj;
//    @PostMapping("/feedbackPolyester/put")
//    fbPolyester newFeedbcak(@RequestBody fbPolyester newFeedbcak) {
//        return fbPolyesterRepoObj.save(newFeedbcak); //obj.method //the save()- method is from the RegisterRepo interface that contains Jpa framework/interface
//    }
    private double max;
    private double min;
    private double enteredCw;


    @GetMapping("/feedbackPolyester/{Uksize}")
    //first read the getPolyster
    //after that,
    public double getSwitch(@PathVariable int Uksize) {
        switch (Uksize) {
            //so in here created method in below is called here.
            case 6:  //so like when its uk size 6, and
                return getFbPolyester(6); //return the ethod with its parameter.
        // like we are saying for this uk size find the min and max
            case 8:
                return getFbPolyester(8); // return the getPolyesr function when the uksize is 8.
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
                return 0;
        }
    }
    //in this method it would use uksize as a parameter
    public double getFbPolyester(int Uksize) {
        //after getting/ rerieving all the data as a list from the table
        List<fbPolyester> fbPolyestersObj = fbPolyesterRepoObj.findByuksize(Uksize);

        if (!fbPolyestersObj.isEmpty()) {
            min = fbPolyestersObj.get(0).getUsercw(); //find the minimum value for that uksize
            max = fbPolyestersObj.get(0).getUsercw();  //find the maximum value for that uksize
            for (fbPolyester Usercwobj : fbPolyestersObj) {
                double cw = Usercwobj.getUsercw();
                if (cw < min) {
                    min = cw; //getting the min value
                }
                if (cw > max) {
                    max = cw;
                }
                ////

            }//calling the Register class usewr entered 'chestwidth'.
            Register registercwObj=new Register();
            enteredCw=registercwObj.getChestwidth();
            if(enteredCw>=min && enteredCw<=max){
                return Uksize;
            }
            else {
                return 0 ; //error
            }
            //return "min is "+min+ ",max is " +max;
        }
        /////////


        //putting the calculated chest with range and its uk size in another table.
        return 0;
    }

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




