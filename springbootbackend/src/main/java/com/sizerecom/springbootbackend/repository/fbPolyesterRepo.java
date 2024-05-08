package com.sizerecom.springbootbackend.repository;

import com.sizerecom.springbootbackend.model.Feedback;
import com.sizerecom.springbootbackend.model.Image;
import com.sizerecom.springbootbackend.model.fbPolyester;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface fbPolyesterRepo extends JpaRepository<fbPolyester,Long> {

    fbPolyester findByUsercw(double cw);

    fbPolyester findByid(long id);

     List<fbPolyester> findByuksize(int Uksize); //uksize in the findBy is the fild name. thius, Uksize is any name
}
