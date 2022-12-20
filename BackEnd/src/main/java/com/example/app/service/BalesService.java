package com.example.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.app.entity.Bales;

import com.example.app.repository.BalesRepo;


@Service
public class BalesService {

	@Autowired
	BalesRepo repo;

	public Bales saveBales(Bales bales) {

		return repo.save(bales);
	}


	public Bales ginnerbyuuid(String uuid) {
		// TODO Auto-generated method stub
		Bales b = repo.findbyuuid(uuid);
		System.out.println("Bales getbyuuid in service data is :---"+b);
		 return b;
	}

	public List<Bales> getall() {
		// TODO Auto-generated method stub
		return repo.findAll();

	}
}
