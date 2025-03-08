import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: Peace Stephen Isuaiko</p>
      <p>Email: peaceisuaiko2000@gmail.com</p>
      <Link to="/profile/details">View Details</Link> | 
      <Link to="/profile/settings">Settings</Link>
    </div>
  );
};

export default Profile;
