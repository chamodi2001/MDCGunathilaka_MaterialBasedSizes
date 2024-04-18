package com.sizerecom.springbootbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class fbPolyester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private long id;
    private double usercw; //its better to give the field names starting from simple letters, or else it would get confused in the get methods.
    private int  uksize;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    ///////
    // creating a constructor to return the able columns
//    public fbPolyester(double Usercw, int UserUksize) {
//        this.Usercw = Usercw;
//        this.UserUksize = UserUksize;
//    }
    ////////


    public double getUsercw() {
        return usercw;
    }

    public void setUsercw(double usercw) {
        this.usercw = usercw;
    }

    public int getUksize() {
        return uksize;
    }

    public void setUksize(int uksize) {
        this.uksize = uksize;
    }
}
