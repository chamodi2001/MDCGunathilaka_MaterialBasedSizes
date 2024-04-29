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



// it retrieves the min and max chest width range using the getFbPolyester method.
// If the given cwRegister falls within the min and max range, it returns the corresponding UK size. If no matching UK size is found, iT RETURNS AN ERROR.


    //retrieves the chest width of coressponding username
@GetMapping("/polyester/chestwidth/{username}")
//
public ResponseEntity<Double> getLoggedUsercw(@PathVariable String username) {
    Register RegisterObjcw = RegisterRepoObj.findByUsername(username);
    if (RegisterObjcw != null) {
        return new ResponseEntity<>(RegisterObjcw.getChestwidth(), HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

    @GetMapping("/polyester/recommend/{cw}")
    public int getFittingUkSize(@PathVariable double cw) { // the logged-in user's chestwith is called cw
        // find all the polyester material feedback data from fbPolyester model/ table
        List<fbPolyester> fbpolDataObj = fbPolyesterRepoObj.findAll();

        // Group the feedback data by UK size
        Map<Integer, List<fbPolyester>> groupedByUkSize = fbpolDataObj.stream()
                .collect(Collectors.groupingBy(fbPolyester::getUksize));  //this groups/ seperate the data by uk Size using 'Collectors.groupingBy' method.

        // Calculate the min and max chest width for each UK size
        Map<Integer, DoubleSummaryStatistics> chestWidthStats = groupedByUkSize.entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        e -> e.getValue().stream().collect(Collectors.summarizingDouble(fbPolyester::getUsercw)) //gettinh the fbPolyester table column Usercw
                        //using this 'Collectors.summarizingDouble' method it can allocate the min and max for each uksize.
                ));

        // finding if the logged in user's cw is in any chest width ranges of min and max usercw(fbPolyester table
        for (Map.Entry<Integer, DoubleSummaryStatistics> entry : chestWidthStats.entrySet()) {
            if (cw >= entry.getValue().getMin() && cw <= entry.getValue().getMax()) {
                return entry.getKey();
            }
        }

        // if a matching uk size is not found,
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No fitting UK size found for this chest width");
    }

}





