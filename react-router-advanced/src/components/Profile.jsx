import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./profile/ProfileDetails";
import ProfileSettings from "./profile/ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: Peace Stephen Isuaiko</p>
      <p>Email: peaceisuaiko2000@gmail.com</p>

      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
