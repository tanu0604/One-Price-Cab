package com.cab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CabUser {
	@Id
	private String emailId;

	private String username;
	private String phoneNumber;
	private String vehicleName;
	private String pickupLoc;
	private String dropLoc;
	private String timeOfPickup;
	private String dateOfPickup;
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getVehicleName() {
		return vehicleName;
	}
	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}
	public String getPickupLoc() {
		return pickupLoc;
	}
	public void setPickupLoc(String pickupLoc) {
		this.pickupLoc = pickupLoc;
	}
	public String getDropLoc() {
		return dropLoc;
	}
	public void setDropLoc(String dropLoc) {
		this.dropLoc = dropLoc;
	}
	public String getTimeOfPickup() {
		return timeOfPickup;
	}
	public void setTimeOfPickup(String timeOfPickup) {
		this.timeOfPickup = timeOfPickup;
	}
	public String getDateOfPickup() {
		return dateOfPickup;
	}
	public void setDateOfPickup(String dateOfPickup) {
		this.dateOfPickup = dateOfPickup;
	}
	public CabUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CabUser(String emailId, String username, String phoneNumber, String vehicleName, String pickupLoc,
			String dropLoc, String timeOfPickup, String dateOfPickup) {
		super();
		this.emailId = emailId;
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.vehicleName = vehicleName;
		this.pickupLoc = pickupLoc;
		this.dropLoc = dropLoc;
		this.timeOfPickup = timeOfPickup;
		this.dateOfPickup = dateOfPickup;
	}
	
	
}
