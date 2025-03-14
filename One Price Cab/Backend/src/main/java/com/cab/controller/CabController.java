package com.cab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cab.entity.CabUser;
import com.cab.services.EmailServices;

@RestController
@RequestMapping("/cab")
@CrossOrigin("http://localhost:5173/")
public class CabController {
	
	@Autowired
	private EmailServices emailServices;
	
	@PostMapping("/booking")
	public String bookCab(@RequestBody CabUser details)
	{
		try
		{
			emailServices.sendBookingEmail(details);
			return "Booking is done successfully";
		}
		catch(Exception e)
		{
			return e.getMessage();
		}
	}
}
