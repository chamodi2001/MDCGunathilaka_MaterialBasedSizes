package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepo extends JpaRepository <Image, Long> {
    Image findByItemid(long id);
}
