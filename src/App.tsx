import "./App.css";
import { Login } from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./Components/Registration";
import { Home } from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>} /> {/* Route for login */}
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/" element={<Login/>} /> {/* Route for login */}
        {/* Route for registration */}
      </Routes>
    </Router>
  );
}

export default App;
