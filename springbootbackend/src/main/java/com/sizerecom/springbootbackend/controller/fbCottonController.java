package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Register;
import com.sizerecom.springbootbackend.model.fbCotton;
import com.sizerecom.springbootbackend.model.fbPolyester;
import com.sizerecom.springbootbackend.model.fbSpandex;
import com.sizerecom.springbootbackend.repository.RegisterRepo;
import com.sizerecom.springbootbackend.repository.fbCottonRepo;
import com.sizerecom.springbootbackend.repository.fbPolyesterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
public class fbCottonController {
    @Autowired
    private fbCottonRepo fbCottonRepoObj;
    public fbCotton fbCottonObj;

    @Autowired
    private RegisterRepo RegisterRepoObj;

    // it retrieves the min and max chest width range using the getFbCotton method.
// If the given cwRegister falls within the min and max range, it returns the corresponding UK size. If no matching UK size is found, iT RETURNS AN ERROR.

    //retrieves the chest width of coressponding username
    @GetMapping("/cotton/chestwidth/{username}")
//
    public ResponseEntity<Double> getLoggedUsercw(@PathVariable String username) {
        Register RegisterObj = RegisterRepoObj.findByUsername(username);
        if (RegisterObj != null) {
            return new ResponseEntity<>(RegisterObj.getChestwidth(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/cotton/recommend/{cw}")
    public int getSizeRecommend(@PathVariable double cw) { // the logged-in user's chestwith is called cw
        // find all the cotton material feedback data from fbCottron model/ table
        List<fbCotton> fbCotDataObj = fbCottonRepoObj.findAll();

        //should group by the Uk sizes
        Map<Integer, List<fbCotton>> groupedByUkSize = fbCotDataObj.stream()
                .collect(Collectors.groupingBy(fbCotton::getUksize));  //this groups/ seperate the data by uk Size using 'Collectors.groupingBy' method.

        //getting the most appeared chest width size for each uk sizes
        Map<Integer, List<Double>> mostFrequentChestWidthsByUkSize = new HashMap<>();
        for (Map.Entry<Integer, List<fbCotton>> entry : groupedByUkSize.entrySet()) {
            Map<Double, Long> chestWidthCounts = entry.getValue().stream()
                    .collect(Collectors.groupingBy(fbCotton::getUsercw, Collectors.counting()));
            //getting specific cw and its count
            List<Double> mostFrequentChestWidths = chestWidthCounts.entrySet().stream()
                    //filter the maximum count of cw ranges/find the cw that apears the most
                    .filter(e -> e.getValue().equals(Collections.max(chestWidthCounts.values())))
                    .map(Map.Entry::getKey)
                    //make a list of the mostly appeared cws
                    .collect(Collectors.toList());
            //stored in the bellow varible- the uk size and its most frequently appeared cw
            mostFrequentChestWidthsByUkSize.put(entry.getKey(), mostFrequentChestWidths);
        }//the entery key is where it stores the uk size and its most frequently ocurring chest widths
        Map<Integer, DoubleSummaryStatistics> chestWidthStats = mostFrequentChestWidthsByUkSize.entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        e -> e.getValue().stream().collect(Collectors.summarizingDouble(Double::doubleValue))
                ));

        //Calculate the min and max cw range for each uk size
        List<Integer> fittingUkSizes = new ArrayList<>(); //list the fiiting uk sizes for logged in user
        for (Map.Entry<Integer, DoubleSummaryStatistics> entry : chestWidthStats.entrySet()) { //have the chestwidths that assosiated with that uk size
            if (cw >= entry.getValue().getMin() && cw <= entry.getValue().getMax()) { //getting the min and max cw range
                fittingUkSizes.add(entry.getKey());
                //if a fiiting uk size is found for the user logged in cw, then add that to the fittingUksize list
            }
        }

        //Check if the user's chest width falls within the min and max range of any UK size.
        //if the user entered cw is in a range of uk size, get/ return that uk size or else response error
        if (fittingUkSizes.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No matching uk size data for this cw ");
        }
        //returning the fiiting uk size.
        return fittingUkSizes.get(0); //rturn te first element of the list, from the many uk sizes
    }

}
