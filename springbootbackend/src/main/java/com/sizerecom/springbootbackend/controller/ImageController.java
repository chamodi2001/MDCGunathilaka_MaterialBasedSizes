package com.sizerecom.springbootbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ImageController {
    @GetMapping("/imageList") //sending the http req to the imageList url.

    public List<String> getImage() throws IOException {
        //consider the file path is a String
        List<String> imagePaths = List.of("D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/1.jpg",
                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/2.jpg",
                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/3.jpg",
                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/4.jpg");

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
}
