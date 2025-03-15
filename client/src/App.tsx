import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/marketing/home/Home";
import Login from "./pages/marketing/login/Login";
import Register from "./pages/marketing/register/Register";
import Dashboard from "./pages/marketing/dashboard/Dashboard";
import Streams from "./pages/app/streams/Streams";
import Stream from "./pages/app/stream/Stream";
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
