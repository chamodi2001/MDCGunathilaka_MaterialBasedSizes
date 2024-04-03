package com.sizerecom.springbootbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ImageSpandex {
    @Id
//    @GeneratedValue //to auto generate
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private int itemid;
    private String nameOfproduct;
    private int stock;
    private double price;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getItemid() {
        return itemid;
    }

    public void setItemid(int itemid) {
        this.itemid = itemid;
    }

    public String getNameOfproduct() {
        return nameOfproduct;
    }

    public void setNameOfproduct(String nameOfproduct) {
        this.nameOfproduct = nameOfproduct;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
