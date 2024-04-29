package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Feedback;
import com.sizerecom.springbootbackend.model.Register;
import com.sizerecom.springbootbackend.repository.FeedbackRepo;
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
    @PostMapping("/userfeedback")
    //responese entity is a class that where contains the full http req & create the response
    //but Request body- mostly uses in post annotation

    Feedback userfeedback(@RequestBody Feedback userfeedback) {
        return feedbackRepoObj.save(userfeedback); //obj.method //the save()- method is from the FeedbackRepo interface that contains Jpa framework/interface
    }

}
