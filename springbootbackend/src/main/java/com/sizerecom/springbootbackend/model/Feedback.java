package com.sizerecom.springbootbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

//getting the user feedbacks every fedback.
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;
    private int ukSizefb; //the uk size
    private double chestWidthfb; //the chest width

    private String material; //the user select material


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getUkSizefb() {
        return ukSizefb;
    }

    public void setUkSizefb(int ukSizefb) {
        this.ukSizefb = ukSizefb;
    }

    public double getChestWidthfb() {
        return chestWidthfb;
    }

    public void setChestWidthfb(double chestWidthfb) {
        this.chestWidthfb = chestWidthfb;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    ///////

}
