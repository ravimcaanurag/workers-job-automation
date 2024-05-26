import "./App.css";
import { Login } from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./Components/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} /> {/* Route for login */}
        <Route path="/registration" element={<Registration/>} />
        {/* Route for registration */}
      </Routes>
    </Router>
  );
}

export default App;
