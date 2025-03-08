import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
   l   <Link to="/profile/settings">Go to Settings</Link>
    </div>
  );
};

export default Profile;
