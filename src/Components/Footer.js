import React, { useState } from "react";
import ContactList from "../Pages/ContactList";

function Footer() {
  const [showContactList, setShowContactList] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSamClick = () => {
    setShowContactList(true);  // Show the password input field
  };

  const handlePasswordSubmit = () => {
    if (password === "Sam@123") { // Replace with your static password
      setIsAuthenticated(true);
      setShowContactList(false);
    } else {
      alert("Incorrect password.");
      setPassword(""); // Clear the password field on incorrect entry
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowContactList(false);
    setPassword(""); // Clear password on logout
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <button onClick={handleSamClick} className="font-medium text-blue-500">
          Sam
        </button>{" "}
        with
        <span className="text-gradient font-medium"> Love</span> &
        <span className="text-gradient font-medium"> Coffee</span>
      </p>

      {showContactList && !isAuthenticated && (
        <div className="password-modal bg-gray-100 p-4 rounded shadow-md mx-auto mt-4 max-w-xs text-center">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <button
            onClick={togglePasswordVisibility}
            className="ml-2 text-blue-500"
          >
            {isPasswordVisible ? "🙈 Hide" : "👁️ Show"}
          </button>
          <button
            onClick={handlePasswordSubmit}
            className="block bg-blue-600 text-white py-2 rounded-md font-semibold mt-4 w-full"
          >
            Submit
          </button>
        </div>
      )}

      {isAuthenticated && <ContactList onLogout={handleLogout} />}
    </footer>
  );
}

export default Footer;
