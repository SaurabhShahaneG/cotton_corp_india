package com.example.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.app.entity.BalesTracking;


@Repository
public interface BalesUpdateRepo extends JpaRepository<BalesTracking, Integer> {

//	@Query(value="select * from bales_tracking where uuid=?",nativeQuery = true)
//	BalesTracking save(String uuid);
	List<BalesTracking> getByUuid(String uuid);
	
}
