import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Comparison from "./pages/Comparison";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router basename="/stone-checker">
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<Login setAuth={setIsAuthenticated} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/comparison" element={<Comparison />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
