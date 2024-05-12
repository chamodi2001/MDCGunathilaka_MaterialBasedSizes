package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Image;
import com.sizerecom.springbootbackend.model.ImageSpandex;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageSpandexRepo extends JpaRepository<ImageSpandex, Long> {
    ImageSpandex findByItemid(long id);
    ImageSpandex findByStock(int stock);

}
