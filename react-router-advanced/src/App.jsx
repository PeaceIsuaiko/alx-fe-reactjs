import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./componenets/Home.jsx";
import About from "./componenets/About.jsx";
import Profile from "./componenets/Profile.jsx";



function App() {
 

  return (
    <Router>
      <nav>
        <Link to= "/" Home></Link>
        <Link to= "/" About></Link>
        <Link to= "/" Profile></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/*" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
