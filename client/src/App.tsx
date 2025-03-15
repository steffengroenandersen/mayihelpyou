import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Streams from "./pages/Streams";
import Stream from "./pages/Stream";
import Studio from "./pages/app/studio/Studio";
import Account from "./pages/app/account/Acconut";

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
        <Route path="/app/studio/:id" element={<Studio />} />
        <Route path="/app/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
