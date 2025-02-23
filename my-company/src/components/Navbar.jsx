function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <h1>My Company</h1>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
