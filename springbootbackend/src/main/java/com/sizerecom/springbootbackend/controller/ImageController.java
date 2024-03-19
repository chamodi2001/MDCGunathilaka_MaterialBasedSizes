//package com.sizerecom.springbootbackend.controller;
//
//import com.sizerecom.springbootbackend.model.Image;
//import com.sizerecom.springbootbackend.model.Register;
//import com.sizerecom.springbootbackend.repository.ImageRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.IOException;
//import java.util.Base64;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@RestController
////@RequestMapping("/imageList")
//public class ImageController {
//    @GetMapping("/imageList") //sending the http req to the imageList url.
//
//    public List<String> getImage() throws IOException {
//        //consider the file path is a String
//        List<String> imagePaths = List.of("D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/1.jpg",
//                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/2.jpg",
//                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/3.jpg",
//                "D:\\desktop D\\3rd year\\PUSL3190_MDCGunathilaka\\newreactmobile\\public\\images\\poly/4.jpg");
//
//        //converts the file paths into Base64 string
//        //map func would give a list,
//        return imagePaths.stream().map(imagePath -> {
//            try {
//                //file claas is an i/o operation in java
//                File fileobj = new File(imagePath);
//
//                //from that file, read the data
//                FileInputStream readfile = new FileInputStream(fileobj);
//                byte[] bytes = new byte[(int) fileobj.length()];
//                readfile.read(bytes);
//                readfile.close();
//
//                // converts the file path to byte array, then to a Base64 string
//                return Base64.getEncoder().encodeToString(bytes);
//            } catch (IOException e) { //if input output exception, then display a runtime error
//                throw new RuntimeException(e);
//            }
//        }).collect(Collectors.toList());
//    }
//
//
////    @Autowired
////
////    private ImageRepo ImageRepoObj;
////
////////    craeting the method called 'selectedimg()'
//////    @PostMapping("/imageList")
//////    //creating the model so that, insert the image details.
//////    Image selectedimg(@RequestBody Image selectedimg){
//////        return ImageRepoObj.save(selectedimg);
//////    }
////
////
////    //retriving the data
////    @GetMapping("/{id}")
////    public Image getItemid(@PathVariable Long id) {
////        return ImageRepoObj.findById(id)
////        return ImageRepoObj.findById(id)
////                .orElseThrow(() -> new RuntimeException("Image not found with id " + id));
////    }
//    //////////////////////////////////////
//
//}
