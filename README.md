# 🚖 Cab Booking System

A simple **cab booking system** with a **React frontend** and a **Spring Boot backend**. Users can book a cab through a form, and an email notification is sent to the owner upon successful booking.

## 🛠 Tech Stack

### **Frontend (React)**
- React.js
- React Router (for navigation)
- Tailwind CSS / CSS (for styling)

### **Backend (Spring Boot)**
- Spring Boot
- Spring Web
- JavaMailSender (for email notifications)
- Maven (build tool)

## 🌟 Features

✅ **Home Page** – Overview of the cab service.  
✅ **About Page** – Information about the company/service.  
✅ **Pricing Page** – Details on fare calculation.  
✅ **Booking Form** – Users fill out ride details (pickup, drop, time, etc.).  
✅ **Contact Us Page** – For customer inquiries.  
✅ **Email Notification** – JavaMailSender automatically sends booking details to the owner.

## 🚀 Installation & Setup

### **Frontend Setup (React)**
```sh
cd frontend  # Navigate to frontend folder
npm install  # Install dependencies
npm start    # Start the React app
```

### **Backend Setup (Spring Boot)**
1. Clone the repository and navigate to the backend folder:
```sh
cd backend
```
2. Configure `application.properties` for email service:
```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-email-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```
3. Run the backend server:
```sh
mvn spring-boot:run
```

## 📧 How Email Notification Works
- When a user submits the booking form, the backend captures the details.
- JavaMailSender sends an email to the owner with booking info.
- No database is required unless storing bookings is needed.

## 📷 Screenshots 
![image](https://github.com/user-attachments/assets/40100a92-f224-4ab3-b02c-74c7740ecfea)
![image](https://github.com/user-attachments/assets/3b0f9758-4f3b-4f79-a603-e863aa43a96c)
![image](https://github.com/user-attachments/assets/e85e445b-7b27-4c6a-9cc1-9ab064b87da8)
![image](https://github.com/user-attachments/assets/f85fe958-d7d5-44c6-9ab8-626c31a30198)
![image](https://github.com/user-attachments/assets/b4e45b1a-f206-4075-a098-39820403c302)


## ✨ Future Enhancements
- Add authentication (optional)
- Store bookings in a database
- Integrate Google Maps API for ride tracking

---
### 💡 **Contributions & Feedback**
Feel free to contribute or suggest improvements!

🚀 **Happy Coding!** 🎉
