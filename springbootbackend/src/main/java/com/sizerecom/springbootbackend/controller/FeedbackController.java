package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.*;
import com.sizerecom.springbootbackend.repository.FeedbackRepo;
import com.sizerecom.springbootbackend.repository.fbCottonRepo;
import com.sizerecom.springbootbackend.repository.fbPolyesterRepo;
import com.sizerecom.springbootbackend.repository.fbSpandexRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("http://192.168.186.125:8081")
@RestController
public class FeedbackController {
    @Autowired
    private FeedbackRepo feedbackRepoObj;
    //responese entity is a class that where contains the full http req & create the response
    //but Request body- mostly uses in post annotation

//    Feedback userfeedback(@RequestBody Feedback userfeedback) {
//        return feedbackRepoObj.save(userfeedback); //obj.method //the save()- method is from the FeedbackRepo interface that contains Jpa framework/interface
//    }


    @Autowired
    private fbPolyesterRepo fbPolyesterRepoRepoObj;

    @Autowired
    private fbCottonRepo fbCottonRepoObj;

    @Autowired
    private fbSpandexRepo fbSpandexRepoObj;


    @PostMapping("/saveMaterialData")

    public ResponseEntity<?> saveMaterialData(@RequestBody Feedback FeedbackObj) { //use feedback page data as an argumrnt
        //save all feedback to the feedback table
        feedbackRepoObj.save(FeedbackObj);

        // Assuming you have different repositories for each material
        if ("polyester".equals(FeedbackObj.getMaterial())) {
            fbPolyester fbPolyesterObj = new fbPolyester();
            //getting the user inserted Uksize from the feedback (FeedbackObj.getUkSizefb(), then
            //set or pass that value to the fbPolyester table to categorize them
            fbPolyesterObj.setUsercw(FeedbackObj.getChestWidthfb());
            fbPolyesterObj.setUksize(FeedbackObj.getUkSizefb());

            //posting a new record with uksize n cw to the fbPolyester table.
            fbPolyesterRepoRepoObj.save(fbPolyesterObj);

        } else if ("cotton".equals(FeedbackObj.getMaterial())) {
            fbCotton fbCottonObj = new fbCotton();
            fbCottonObj.setUsercw(FeedbackObj.getChestWidthfb());
            fbCottonObj.setUksize(FeedbackObj.getUkSizefb());

            fbCottonRepoObj.save(fbCottonObj);

        } else if ("spandexblend".equals(FeedbackObj.getMaterial())) {
            fbSpandex fbSpandexObj = new fbSpandex();
            fbSpandexObj.setUsercw(FeedbackObj.getChestWidthfb());
            fbSpandexObj.setUksize(FeedbackObj.getUkSizefb());
            fbSpandexRepoObj.save(fbSpandexObj);
        }

        return ResponseEntity.ok().build();
    }
}
