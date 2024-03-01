package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo extends JpaRepository<Login, Long> {
    Login findByLoginusername(String loginusername);
}
