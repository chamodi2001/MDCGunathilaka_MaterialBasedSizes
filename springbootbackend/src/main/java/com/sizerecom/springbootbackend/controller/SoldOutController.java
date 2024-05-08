package com.sizerecom.springbootbackend.controller;

import com.sizerecom.springbootbackend.model.Register;
import com.sizerecom.springbootbackend.repository.RegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SoldOutController {
    @Autowired

    @PutMapping("/stockReduce")
    public ResponseEntity<?> reduceStock(@RequestBody Map<String, Integer> payload) {
        Integer newStock = payload.get("stock");
        if (newStock != null) {
            // Assuming you have a service to handle the business logic
            stockService.reduceStock(newStock);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
