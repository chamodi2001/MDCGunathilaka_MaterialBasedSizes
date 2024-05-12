package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Image;
import com.sizerecom.springbootbackend.model.ImageCotton;
import com.sizerecom.springbootbackend.model.ImageSpandex;
import com.sizerecom.springbootbackend.repository.ImageRepo;
import com.sizerecom.springbootbackend.repository.ImageSpandexRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ImageSpandexController {
    @Autowired

    private ImageSpandexRepo ImageSpandexRepoObj;

    @GetMapping("imagesSpandex/listSpandex")
    public List<String> getImageSpandex() throws IOException {
        List<String> imagePaths = List.of(
                "/span1.JPG",
                "/span2.JPG"
        );

        return imagePaths.stream().map(imagePath -> {
            try {
                // Get the image as a stream from the classpath
                InputStream is = getClass().getResourceAsStream(imagePath);
                if (is == null) {
                    throw new FileNotFoundException("File not found on classpath: " + imagePath);
                }

                // Read the data from the stream
                byte[] bytes = is.readAllBytes();
                is.close();

                // Convert the byte array to a Base64 string
                return Base64.getEncoder().encodeToString(bytes);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }).collect(Collectors.toList());

    }

    @GetMapping("imagesSpandex/{id}") //getting the id of clothing materials.
    public ImageSpandex getImageSpandex(@PathVariable Long id) {
        return ImageSpandexRepoObj.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with id " + id));
    }

}
