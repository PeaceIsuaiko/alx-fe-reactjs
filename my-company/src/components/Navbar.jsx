
import { Link } from "react-router-dom"; 

function Navbar() {
  return (n (
    <nav style={{ backgroundColor: "#333", display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <h1>My Company</h1>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

















