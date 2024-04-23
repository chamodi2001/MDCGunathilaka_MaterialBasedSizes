package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Register;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
//mapping between Java objects and database tables

public interface RegisterRepo extends JpaRepository <Register, Long>{//these interfaces are connect to the Register entity and,
    // that entity(table)'s primary key data type is long

    //Jpa repository is an interface that is provided by Spring Data JPA framework.
    //jpa  provides crud operation methods such as, findbyID(),find all(),existsById(),save(),deleteById() and other.

    Register findByUsername(String username);
    Register findByChestwidth(double cwRegister);
}
