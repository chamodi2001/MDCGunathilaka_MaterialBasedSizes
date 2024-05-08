package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Register;
import com.sizerecom.springbootbackend.model.fbCotton;
import com.sizerecom.springbootbackend.model.fbSpandex;
import com.sizerecom.springbootbackend.repository.RegisterRepo;
import com.sizerecom.springbootbackend.repository.fbCottonRepo;
import com.sizerecom.springbootbackend.repository.fbSpandexRepo;
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
public class fbSpandexController {
    @Autowired
    private fbSpandexRepo fbSpandexRepoObj;
    public fbSpandex fbSpandexObj;

    @Autowired
    private RegisterRepo RegisterRepoObj;

    // it retrieves the min and max chest width range using the getFbSpandex method.
// If the given cwRegister falls within the min and max range, it returns the corresponding UK size. If no matching UK size is found, iT RETURNS AN ERROR.

    //retrieves the chest width of coressponding username
    @GetMapping("/spandexblend/chestwidth/{username}")
    public ResponseEntity<Double> getLoggedUsercw(@PathVariable String username) {
        Register RegisterObjcw = RegisterRepoObj.findByUsername(username);
        if (RegisterObjcw != null) {
            return new ResponseEntity<>(RegisterObjcw.getChestwidth(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/spandexblend/recommend/{cw}")
    public int getFittingUkSize(@PathVariable double cw) { // the logged-in user's chestwith is called cw
        // find all the spandex material feedback data from fbSpandex model/ table
        List<fbSpandex> fbSpaDataObj = fbSpandexRepoObj.findAll();

        // Group the feedback data by UK size
        Map<Integer, List<fbSpandex>> groupedByUkSize = fbSpaDataObj.stream()
                .collect(Collectors.groupingBy(fbSpandex::getUksize));  //this groups/ seperate the data by uk Size using 'Collectors.groupingBy' method.

        // Calculate the min and max chest width for each UK size
        Map<Integer, DoubleSummaryStatistics> chestWidthStats = groupedByUkSize.entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        e -> e.getValue().stream().collect(Collectors.summarizingDouble(fbSpandex::getUsercw)) //gettinh the fbSpandex table column Usercw
                        //using this 'Collectors.summarizingDouble' method it can allocate the min and max for each uksize.
                ));

        //////////////////
        List<Integer> fittingUkSizes = new ArrayList<>();
        for (Map.Entry<Integer, DoubleSummaryStatistics> entry : chestWidthStats.entrySet()) {
            if (cw >= entry.getValue().getMin() && cw <= entry.getValue().getMax()) {
                fittingUkSizes.add(entry.getKey());
            }
        }
        if (fittingUkSizes.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No fitting UK size found for this chest width");
        }

        Map<Integer, Long> ukSizeCounts = fittingUkSizes.stream()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        return Collections.max(ukSizeCounts.entrySet(), Map.Entry.comparingByValue()).getKey();

        //////////////////////////////
    }
}
