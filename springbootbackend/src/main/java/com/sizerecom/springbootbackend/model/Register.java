package com.sizerecom.springbootbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//a constructor
@Entity //generate the tables when connecting the java to sql
public class Register {
    //entity - fields/attibutes
    @Id
//    @GeneratedValue //to auto generate
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String username;
    private String password;
    private int age;
    private double chestwidth;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    //

    public double getChestwidth(){
        return chestwidth;
    }

    public void setChestwidth(double chestwidth){
        this.chestwidth= chestwidth;
    }

}
