// UserProvider.js
import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage on component mount
    const storedUser = JSON.parse(localStorage.getItem('userInformation'));
    if (storedUser) {
      // console.log("&&&&",storedUser)
      setUserInformation((storedUser));
    }
  }, []);

  useEffect(() => {
    // Update local storage when userInformation changes
    localStorage.setItem('userInformation', JSON.stringify(userInformation));
  }, [userInformation]);

  return (
    <UserContext.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;