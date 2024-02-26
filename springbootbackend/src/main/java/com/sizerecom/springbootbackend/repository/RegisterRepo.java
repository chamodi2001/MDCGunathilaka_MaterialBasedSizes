package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Register;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
//mapping between Java objects and database tables

public interface RegisterRepo extends JpaRepository <Register, Long>{
    Register findByUsername(String username);
}
