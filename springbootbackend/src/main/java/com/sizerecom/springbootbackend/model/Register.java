package com.sizerecom.springbootbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity //generate the tables when connecting the java to sql
public class Register {
    //entity - fields/attibutes
    @Id
    @GeneratedValue //to auto generate
    private long id;
    private String username;
    private String password;
    private int age;
    private int chestwidth;

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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getChestwidth() {
        return chestwidth;
    }

    public void setChestwidth(int chestwidth) {
        this.chestwidth = chestwidth;
    }
}
