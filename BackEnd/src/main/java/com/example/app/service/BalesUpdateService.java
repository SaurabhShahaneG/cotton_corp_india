package com.example.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.app.entity.BalesTracking;
import com.example.app.repository.BalesUpdateRepo;

@Service
public class BalesUpdateService {

	@Autowired
	BalesUpdateRepo repo;
	
	public BalesTracking saveBales(BalesTracking update) {
		// TODO Auto-generated method stub
		BalesTracking b = repo.save(update);
		System.out.println("In bales tracking service the object received back from db after persistance is : "+b);
		return b;
	}
	
	public List<BalesTracking> getTrackingDataByUuid(String uuid){
		
		List<BalesTracking> list = repo.getByUuid(uuid);
		System.out.println("In getTrackingDataByUuid service data is :--"+list);
		return list;
	}
	

}
