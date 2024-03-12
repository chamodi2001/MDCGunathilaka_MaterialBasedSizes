package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Feedback;
import com.sizerecom.springbootbackend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepo extends JpaRepository <Feedback,Long> {
    //for find by - use the getMathod name in the model
        Feedback findBySelectedCW(String selectedCW);
        Feedback findByMaterial(String material);

}
