import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../../assets/headingImgs/road.jpeg";

function Booking() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    phoneNumber: "", 
    vehicleName: "",
    dateOfPickup: "", 
    timeOfPickup: "",
    pickupLoc: "",
    dropLoc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/cab/booking",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Form Data Before Submit: ", formData);
        toast.success("Booking successful! 🎉", { position: "top-right" });
        setFormData({
          username: "",
          emailId: "",
          phoneNumber: "",
          vehicleName: "",
          dateOfPickup: "",
          timeOfPickup: "",
          pickupLoc: "",
          dropLoc: "",
        });
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error: ", error.response.data);
        toast.error("Booking failed: " + error.response.data.message, {
          position: "top-right",
        });
      } else if (error.request) {
        console.error("Network Error: ", error.request);
        toast.error("Booking failed: No response from server.", {
          position: "top-right",
        });
      } else {
        console.error("Error: ", error.message);
        toast.error("Booking failed: " + error.message, {
          position: "top-right",
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className="relative w-full h-fit p-6 flex justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="book"
      >
        <div
          className="bg-black bg-opacity-80 text-white p-6 rounded-2xl shadow-lg w-full max-w-md"
          data-aos="fade-up"
        >
          <h1 className="text-2xl font-bold text-center mb-4 text-yellow-500">
            Book Your Ride, Anytime! 🚖
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              placeholder="Enter your Email Id"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <select
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            >
              <option value="" disabled>
                Select Vehicle
              </option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
            </select>

            <input
              name="dateOfPickup" 
              value={formData.dateOfPickup}
              onChange={handleChange}
              type="date"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              name="timeOfPickup"
              value={formData.timeOfPickup}
              onChange={handleChange}
              type="time"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              name="pickupLoc"
              value={formData.pickupLoc}
              onChange={handleChange}
              type="text"
              placeholder="From Location"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              name="dropLoc" 
              value={formData.dropLoc}
              onChange={handleChange}
              type="text"
              placeholder="To Location"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold p-2 rounded-md transition duration-300 hover:bg-yellow-600 hover:scale-105"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Booking;
 