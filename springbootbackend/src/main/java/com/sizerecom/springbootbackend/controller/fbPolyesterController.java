package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.*;
import com.sizerecom.springbootbackend.repository.RegisterRepo;
import com.sizerecom.springbootbackend.repository.fbPolyesterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.stream.Collectors;

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



//This method iterates over the array of UK sizes and for each size,
// it retrieves the min and max chest width range using the getFbPolyester method.
// If the given cwRegister falls within the min and max range, it returns the corresponding UK size. If no matching UK size is found, it returns 0.
// Now, you can make a GET request to /pol/switch/{cwRegister} (replacing {cwRegister} with an actual chest width),
// and the getSwitch method will automatically return the fitted UK size

    //retrieves the chest width of coressponding username
@GetMapping("/pol/chestwidth/{username}")
public ResponseEntity<Double> getChestWidth(@PathVariable String username) {
    Register RegisterObjcw = RegisterRepoObj.findByUsername(username);
    if (RegisterObjcw != null) {
        return new ResponseEntity<>(RegisterObjcw.getChestwidth(), HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

    @GetMapping("/pol/recommend/{cw}")
    public int getRecommendedUkSize(@PathVariable double cw) {
        // Get all the feedback data
        List<fbPolyester> feedbackData = fbPolyesterRepoObj.findAll();

        // Group the feedback data by UK size
        Map<Integer, List<fbPolyester>> groupedByUkSize = feedbackData.stream()
                .collect(Collectors.groupingBy(fbPolyester::getUksize));

        // Calculate the min and max chest width for each UK size
        Map<Integer, DoubleSummaryStatistics> chestWidthStats = groupedByUkSize.entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        e -> e.getValue().stream().collect(Collectors.summarizingDouble(fbPolyester::getUsercw))
                ));

        // Find the UK size whose range includes the input chest width
        for (Map.Entry<Integer, DoubleSummaryStatistics> entry : chestWidthStats.entrySet()) {
            if (cw >= entry.getValue().getMin() && cw <= entry.getValue().getMax()) {
                return entry.getKey();
            }
        }

        // If no suitable UK size was found, return an error
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No suitable UK size found for this chest width");
    }
////    @GetMapping("/pol/recommend/{cwRegister}")
//    @GetMapping("/pol/recommend/{username}")
//    public ResponseEntity<Integer> recommendUkSize(@PathVariable String username) {
//        Register RegisterObjcw = RegisterRepoObj.findByUsername(username);
//        int[] Sizes = {6, 8, 10, 12, 14, 16}; // Add more sizes as needed
//        if (RegisterObjcw != null) {
//            double cwRegister= RegisterObjcw.getChestwidth();
//            for (int Uksize : Sizes) {
//                String range = getFbPolyester(Uksize);
//                String[] minMax = range.split(",");
//                String[] minParts = minMax[0].split(" ");
//                String[] maxParts = minMax[1].split(" ");
//                if (minParts.length > 4 && maxParts.length > 3) {
//                    double min = Double.parseDouble(minParts[4]);
//                    double max = Double.parseDouble(maxParts[3]);
//                    if (cwRegister >= min && cwRegister <= max) {
//                        return new ResponseEntity<>(Uksize, HttpStatus.OK);
//                    }
//                }
//            }
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//
//
//
//@GetMapping("/pol/{Uksize}")
//public String getFbPolyester(@PathVariable int Uksize) {
//    //after getting/ retrieving all the data as a list from the table
//    List<fbPolyester> fbPolyestersObj = fbPolyesterRepoObj.findByuksize(Uksize);
//    if (!fbPolyestersObj.isEmpty()) {
//        double min = fbPolyestersObj.get(0).getUsercw(); //find the minimum value for that uksize
//        double max = fbPolyestersObj.get(0).getUsercw();  //find the maximum value for that uksize
//        for (fbPolyester Usercwobj : fbPolyestersObj) {
//            double cw = Usercwobj.getUsercw();
//            if (cw < min) {
//                min = cw; //getting the min value
//            }
//            if (cw > max) {
//                max = cw;
//            }
//
//        }
//        return "for this uksize"+Uksize +"min is " + min + ",max is " + max;
//    } else {
//        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No data available for this UK size");
//    }
//}


}





