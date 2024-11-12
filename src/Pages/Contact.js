import React, { useState } from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters long.";
    }

    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters long.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5001/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
          setErrors({});
        } else {
          alert("There was an error sending your message.");
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("Network error: Unable to reach the server.");
      }
    } else {
      alert("Please fix the errors in the form before submitting.");
    }
  };

  return (
    <main className="container mx-auto max-width section" style={{paddingTop:1}}>

<h6 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6" style={{fontSize:35}}>
        <a href={`mailto:${email}`}>{email}</a>
      </h6>
      <span className="text-center text-content text-xl font-light block">or</span>
      <h6 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6" style={{fontSize:35}}>
        <a href={`tel:${phone}`}>{phone}</a>
      </h6>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
    

      <h1 className="text-center text-3xl md:text-4xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Contact Us
      </h1>
      <p className="text-center text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-2">
        Please fill this form in a decent manner
      </p>
    

     
      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md mx-auto">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-lg font-medium">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-lg font-medium">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            className="p-2 border border-gray-300 rounded-md"
            rows="4"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold">
          Submit
        </button>
      </form>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />
    </main>
  );
}

export default Contact;
