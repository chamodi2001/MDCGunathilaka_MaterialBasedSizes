package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.*;
import com.sizerecom.springbootbackend.repository.ImageCottonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ImageCottonController {
    @Autowired

    private ImageCottonRepo ImageCottonRepoObj;
//    private ImageCotton ImageCottonObj;
    //new
@GetMapping("imagesCotton/listCotton")
public List<String> getImageSpandex() throws IOException {
    List<String> imagePaths = List.of(
            "/cot1.JPG",
            "/cot2.JPG"
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

    @GetMapping("imagesCotton/{id}")
    public ImageCotton getImageCotton(@PathVariable Long id) {
        return ImageCottonRepoObj.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with id " + id));
    }
    ///////

}
