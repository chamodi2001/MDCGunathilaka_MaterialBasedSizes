package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Image;
import com.sizerecom.springbootbackend.model.ImageCotton;
import com.sizerecom.springbootbackend.model.ImageSpandex;
import com.sizerecom.springbootbackend.repository.ImageCottonRepo;
import com.sizerecom.springbootbackend.repository.ImageRepo;
import com.sizerecom.springbootbackend.repository.ImageSpandexRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ImageCottonController {
    @Autowired

    private ImageCottonRepo ImageCottonRepoObj;
    //new
    @GetMapping("imagesCotton/listCotton")
    public List<String> getImageCotton() throws IOException {
        //consider the file path is a String
        List<String> imagePaths = List.of("D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\Cottoncloths/one.jpg",
                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\Cottoncloths/three.jpg");

        //converts the file paths into Base64 string
        //map func would give a list,
        return imagePaths.stream().map(imagePath -> {
            try {
                //file claas is an i/o operation in java
                File fileobj = new File(imagePath);

                //from that file, read the data
                FileInputStream readfile = new FileInputStream(fileobj);
                byte[] bytes = new byte[(int) fileobj.length()];
                readfile.read(bytes);
                readfile.close();

                // converts the file path to byte array, then to a Base64 string
                return Base64.getEncoder().encodeToString(bytes);
            } catch (IOException e) { //if input output exception, then display a runtime error
                throw new RuntimeException(e);
            }
        }).collect(Collectors.toList());
    }

    @GetMapping("imagesCotton/{id}")
    public ImageCotton getImageCotton(@PathVariable Long id) {
        return ImageCottonRepoObj.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with id " + id));
    }
}
