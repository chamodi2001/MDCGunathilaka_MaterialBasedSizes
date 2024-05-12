package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepo extends JpaRepository <Image, Long> {
    Image findByItemid(long id);
    //in the image mode/entity find the Item id property, then
    //the id parameter would be passed to the controller
    Image findByStock(int stock);
}
