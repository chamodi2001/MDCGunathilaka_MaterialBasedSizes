package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Image;
import com.sizerecom.springbootbackend.repository.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
//@RequestMapping("/images")
//@CrossOrigin("http://192.168.1.59:8081")
public class ImageSaveController {
    @Autowired

    private ImageRepo ImageRepoObj;
//new
    @GetMapping("images/list")
    public List<String> getImage() throws IOException {
        //consider the file path is a String
        List<String> imagePaths = List.of("D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/1.jpg",
                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/2.jpg",
                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/3.jpg");

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

    @GetMapping("images/{id}")
    public Image getImage(@PathVariable Long id) {
        return ImageRepoObj.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with id " + id));
    }
    
}
