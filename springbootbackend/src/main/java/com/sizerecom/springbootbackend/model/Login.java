package com.sizerecom.springbootbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Login {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @GeneratedValue //to auto generate
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String loginusername;
    private String loginpassword;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLoginusername() {
        return loginusername;
    }

    public void setLoginusername(String loginusername) {
        this.loginusername = loginusername;
    }

    public String getLoginpassword() {
        return loginpassword;
    }

    public void setLoginpassword(String loginpassword) {
        this.loginpassword = loginpassword;
    }
}
