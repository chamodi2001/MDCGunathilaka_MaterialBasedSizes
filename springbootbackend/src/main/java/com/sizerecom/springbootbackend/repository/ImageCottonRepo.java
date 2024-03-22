package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Image;
import com.sizerecom.springbootbackend.model.ImageCotton;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageCottonRepo extends JpaRepository<ImageCotton, Long> {
    ImageCotton findByItemid(long id);
}
