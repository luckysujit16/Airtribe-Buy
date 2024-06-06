import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend API
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-muted mb-3">Profile</h3>
      {userData && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">User Information</h5>
            <p className="card-text">Email: {userData.email}</p>
            {/* Display other user details here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
