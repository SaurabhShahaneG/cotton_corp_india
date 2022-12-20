package com.example.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.app.entity.Bales;

@Repository
public interface BalesRepo  extends JpaRepository<Bales, Integer>{
	@Query(value="select * from bales where uuid=?",nativeQuery = true)
	Bales findbyuuid(String uuid);

}
