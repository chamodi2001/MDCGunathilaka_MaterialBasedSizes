package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Image;
import com.sizerecom.springbootbackend.model.ImageCotton;
import com.sizerecom.springbootbackend.repository.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
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
public List<String> getImageSpandex() throws IOException {
    List<String> imagePaths = List.of(
            "/pol1.JPG",
            "/pol2.JPG",
            "/pol3.JPG"
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

    @GetMapping("images/{id}")
    public Image getImage(@PathVariable Long id) {
        return ImageRepoObj.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with id " + id));
    }
    /////////
//    @PutMapping("/stockReduce")
//    public Image PutStockReduceP(@RequestBody Integer stock) {
//        //find the erlier stock
//        Image earlierStock = ImageRepoObj.findByStock(stock);
//
//        // from the earlier stock -1 to get the new stock, when user clicks buy
//        earlierStock.setStock(earlierStock.getStock() - 1);
//
//        // Save the updated stock
//        return ImageRepoObj.save(earlierStock);
//    }

    ////
//    @PostMapping("/cot/updatedStock/{id}")
//    public ImageCotton updateStock(@PathVariable Long id, @RequestBody Integer stock) {
//        ImageCotton imageCotton = ImageCottonRepoObj.findById(id)
//                .orElseThrow(() -> new RuntimeException("ImageCotton not found with id " + id));
//        imageCotton.setStock(stock);
//        return ImageCottonRepoObj.save(imageCotton);
//    }
    
}
