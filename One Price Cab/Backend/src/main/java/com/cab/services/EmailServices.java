package com.cab.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.cab.entity.CabUser;

@Service
public class EmailServices {

	@Autowired
	private JavaMailSender javaMailSender;
	
	public void sendBookingEmail(CabUser details)
	{
		String subject="New booking from "+details.getUsername();
		
		String body="The details of the user is "+"\n"+
		"Name: "+ details.getUsername()+"\n"+
		"Email: "+ details.getEmailId()+"\n"+
		"Phone Number: "+ details.getPhoneNumber()+"\n"+
		"Pickup Location: "+ details.getPickupLoc()+"\n"+
		"Drop Location: "+ details.getDropLoc()+"\n"+
		"Vehicle Name: "+ details.getVehicleName()+"\n"+
		"Pickup date: "+ details.getDateOfPickup()+"\n"+
		"Pickup Time: " +details.getTimeOfPickup();
		
		SimpleMailMessage message=new SimpleMailMessage();
		message.setTo("opcab7778@gmail.com");
		message.setReplyTo(details.getEmailId());
		message.setSubject(subject);
		message.setText(body);
		
		javaMailSender.send(message);
	}
}
