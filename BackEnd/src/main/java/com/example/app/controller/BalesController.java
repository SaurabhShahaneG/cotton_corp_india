package com.example.app.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.entity.Bales;

import com.example.app.service.BalesService;

import io.swagger.v3.oas.annotations.headers.Header;

@RestController
@CrossOrigin()
@RequestMapping("/Bales")
public class BalesController {

	@Autowired
	BalesService serv;

	@GetMapping({ "/forAdmin" })
	@PreAuthorize("hasRole('Admin')")
	public String forAdmin() {
		return "This URL is only accessible to the admin";
	}

	@GetMapping({ "/forUser" })
	@PreAuthorize("hasRole('User')")
	public String forUser() {
		return "This URL is only accessible to the user";
	}

	@PostMapping("/save")
	public Bales SaveBales(@RequestBody Bales bales) {
		UUID uuid = UUID.randomUUID();
		bales.setUuid(uuid.toString());
		return serv.saveBales(bales);
	}
	@GetMapping("/getbyuuid/{uuid}")
	@PreAuthorize("hasRole('User')")
	
	public Bales getbyuuid(@PathVariable("uuid") String uuid) {
		System.out.println(uuid);
		Bales b = serv.ginnerbyuuid(uuid);
		System.out.println("Bales getbyuuid in controller data is :---"+b);
		return b;
	}

	@GetMapping("/getalluuid")
	@PreAuthorize("hasRole('User')")
	public List<Bales> getbyuuid() {

		return serv.getall();
	}

}
