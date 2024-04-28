package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.*;
import com.sizerecom.springbootbackend.repository.RegisterRepo;
import com.sizerecom.springbootbackend.repository.fbPolyesterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.nio.file.Files.find;
import com.sizerecom.springbootbackend.model.Login;
import com.sizerecom.springbootbackend.model.Register;

@RestController
public class fbPolyesterController {
    @Autowired
    private fbPolyesterRepo fbPolyesterRepoObj;
    public fbPolyester fbPolyesterObj;

    @Autowired
    private RegisterRepo RegisterRepoObj;
//    private Register RegisterObj;

//    double min = Double.parseDouble(minMax[0].split(" ")[4]);
//    double max = Double.parseDouble(minMax[1].split(" ")[3]);




///////////////

//    @GetMapping("/pol/switch/{Uksize}")
//    public String getSwitch(@PathVariable int Uksize) {
//        switch (Uksize) {
//            //so in here created method in below is called here.
//            case 6:  //so like when its uk size 6, and
//                return getFbPolyester(6); //return the ethod with its parameter.
//            // like we are saying for this uk size find the min and max
//            case 8:
//                return getFbPolyester(8); // return the getPolyesr function when the uksize is 8.
//            case 10:
//                return getFbPolyester(10);
//            case 12:
//                return getFbPolyester(12);
//            case 14:
//                return getFbPolyester(14);
//            case 16:
//                return getFbPolyester(16);
//            // Add more cases as needed for other marks categories
//            default:
//                return "Invalid size category.";
//        }
//    }
//This method iterates over the array of UK sizes and for each size,
// it retrieves the min and max chest width range using the getFbPolyester method.
// If the given cwRegister falls within the min and max range, it returns the corresponding UK size. If no matching UK size is found, it returns 0.
// Now, you can make a GET request to /pol/switch/{cwRegister} (replacing {cwRegister} with an actual chest width),
// and the getSwitch method will automatically return the fitted UK size

@GetMapping("/pol/chestwidth/{username}")
public double getChestWidth(@PathVariable Login loginuser) {
    Register existingUser = RegisterRepoObj.findByUsername(loginuser.getLoginusername());

    if (existingUser != null) {
        return existingUser.getChestwidth();
    } else {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }
}
//@GetMapping("/pol/chestwidth/{username}")
//public Map<String, Object> getChestWidth(@PathVariable String username) {
//    Register RegisterObj = RegisterRepoObj.findByUsername(username);
//    if (RegisterObj != null) {
//        Map<String, Object> result = new HashMap<>();
//        result.put("username", RegisterObj.getUsername());
//        result.put("chestWidth", RegisterObj.getChestwidth());
//        return result;
//    } else {
//        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
//    }
//}
@GetMapping("/pol/recommend/{cwRegister}")
public int recommendUkSize(@PathVariable double cwRegister) {
    int[] Sizes = {6, 8, 10, 12, 14, 16}; // Add more sizes as needed
    for (int Uksize : Sizes) {
        String range = getFbPolyester(Uksize);
        String[] minMax = range.split(",");
        String[] minParts = minMax[0].split(" ");
        String[] maxParts = minMax[1].split(" ");
        if (minParts.length > 4 && maxParts.length > 3) {
            double min = Double.parseDouble(minParts[4]);
            double max = Double.parseDouble(maxParts[3]);
            if (cwRegister >= min && cwRegister <= max) {
                return Uksize;
            }
        }
    }
    return 0; // Return 0 if no matching UK size is found
}

    /////
    @GetMapping("/pol/{Uksize}")
public String getFbPolyester(@PathVariable int Uksize) {
    //after getting/ rerieving all the data as a list from the table
    List<fbPolyester> fbPolyestersObj = fbPolyesterRepoObj.findByuksize(Uksize);

    if (!fbPolyestersObj.isEmpty()) {
        double min = fbPolyestersObj.get(0).getUsercw(); //find the minimum value for that uksize
        double max = fbPolyestersObj.get(0).getUsercw();  //find the maximum value for that uksize
        for (fbPolyester Usercwobj : fbPolyestersObj) {
            double cw = Usercwobj.getUsercw();
            if (cw < min) {
                min = cw; //getting the min value
            }
            if (cw > max) {
                max = cw;
            }

        }
        return "for this uksize"+Uksize +"min is " + min + ",max is " + max;
    } else {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No data available for this UK size");
    }
}



//    @GetMapping("/pol/{cwRegister}")
//    public double getSizeRecommd(@PathVariable double cwRegister) {
//        List<Register> RegisterObj = RegisterRepoObj.findByChestwidth(cwRegister);
//
//        if (cwRegister >= min && cwRegister <= max) {
////                String Matchingsize=getSwitch(Uksize);
//////                return "User's cw (" + cwRegister + ") falls within the range for " + Matchingsize + " Uksize.";
////                return Uksize;
//            return getEuroSizeForBust(cwRegister);
//        } else {
////                return "User's cw (" + cwRegister + ") does not fall within the range .";
//            return 0;
//        }
////        } else {
////            return cwRegister; // No data available or invalid marks category
////        }
//    }


//    @GetMapping("/feedbackPolyester/getuksize")
//@GetMapping("/pol/{cwRegister}")
//    public double getSizeRecommd(@PathVariable double cwRegister) {
//        Register RegisterObj = RegisterRepoObj.findByChestwidth(cwRegister);
////        String cwRange = getFbPolyester();
////        if (cwRange.startsWith("For ")) {
////            String[] parts = cwRange.split(" uksize, the cw range is: ")[1].split("-");
////            min = Integer.parseInt(parts[0]);
////            max = Integer.parseInt(parts[1]);
//        if (cwRegister >= min && cwRegister <= max) {
////                String Matchingsize=getSwitch(Uksize);
//////                return "User's cw (" + cwRegister + ") falls within the range for " + Matchingsize + " Uksize.";
////                return Uksize;
//            return getEuroSizeForBust(cwRegister);
//        } else {
////                return "User's cw (" + cwRegister + ") does not fall within the range .";
//            return 0;
//        }
////        } else {
////            return cwRegister; // No data available or invalid marks category
////        }
//    }

    ////////////////////////////////
//    @GetMapping("/fit/uksize/{cwRegister}")
//    public int getEuroSizeForBust(double cwRegister) {
//        int[] Sizes = {6, 8, 10, 12, 14, 16}; // Add more sizes as needed
//        for (int Uksize : Sizes) {
//            String range = getFbPolyester(Uksize);
//            String[] minMax = range.split(",");
//            double min = Double.parseDouble(minMax[0].split(" ")[2]);
//            double max = Double.parseDouble(minMax[1].split(" ")[3]);
//            if (cwRegister >= min && cwRegister <= max) {
//                return Uksize;
//            }
//        }
//        return 0; // Return 0 if no matching euro size is found
//    }
    ////////////////////////////////
    //marks=uksize  //age==cw
    //enteredCw=registercwObj.getChestwidth()

}





