package com.example.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.entity.BalesTracking;
import com.example.app.service.BalesUpdateService;



@RestController
@CrossOrigin()
@RequestMapping("/BalesStatusUpdate")
public class BalesUpdateController {
	
	@Autowired
	BalesUpdateService serv;
	
	@PostMapping("/saveStatusUpdate")
	@PreAuthorize("hasRole('User')")
	public BalesTracking saveUpdate(@RequestBody BalesTracking bales) {
		System.out.println("In bales tracking controller the received object is :----"+ bales);
		return serv.saveBales(bales);
		
	}
	@GetMapping("/getTrackingData/{uuid}")
	@PreAuthorize("hasRole('User')")
	public List<BalesTracking> getTrackingDataByUuid(@PathVariable String uuid){
		 List<BalesTracking>list = serv.getTrackingDataByUuid(uuid);
		System.out.println("In getTrackingDataByUuid controller data is :--"+list);
		return list;
	}
	
	@GetMapping("/test")
	@PreAuthorize("hasRole('User')")
	public String test()
	{
		return "hi test works";
	}

}
