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
    private fbPolyesterRepo fbPolyesterRepoRepoObjf;

    @Autowired
    private fbCottonRepo fbCottonRepoObjf;

    @Autowired
    private fbSpandexRepo fbSpandexRepoObjf;


    @PostMapping("/userfeedback")
    public void enterFeedback(@RequestBody Feedback FeedbackObj) { //use feedback page data as an argumrnt
        if (FeedbackObj.getMaterial().equals("polyester")) { //if the value in feedback page equals to "polyester"
            //calling the fbpolyester table- has feedback data about polyester material
            fbPolyester fbPolyesterObj = new fbPolyester();
            //getting the user inserted Uksize from the feedback (FeedbackObj.getUkSizefb(), then
            //set or pass that value to the fbPolyester table to categorize them
            fbPolyesterObj.setUksize(FeedbackObj.getUkSizefb());
            fbPolyesterObj.setUsercw(FeedbackObj.getChestWidthfb());

            //using the save func save all the data that is coming from fbPolyester model.
            fbPolyesterRepoRepoObjf.save(fbPolyesterObj);
        }
        else if (FeedbackObj.getMaterial().equals("cotton")) {
            fbCotton fbCottonObj = new fbCotton();
            fbCottonObj.setUksize(FeedbackObj.getUkSizefb());
            fbCottonObj.setUsercw(FeedbackObj.getChestWidthfb());
            fbCottonRepoObjf.save(fbCottonObj);
        }
        else if (FeedbackObj.getMaterial().equals("spandexblend")) {
            fbSpandex fbSpandexObj = new fbSpandex();
            fbSpandexObj.setUksize(FeedbackObj.getUkSizefb());
            fbSpandexObj.setUsercw(FeedbackObj.getChestWidthfb());
            fbSpandexRepoObjf.save(fbSpandexObj);
        }

    }

}
