import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Streams from "./pages/Streams";
import Stream from "./pages/Stream";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing website */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Application website */}
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/streams" element={<Streams />} />
        <Route path="/app/stream/:id" element={<Stream />} />
        <Route path="/app/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
