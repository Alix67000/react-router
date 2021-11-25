import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Profile from "./Profile/Profile";
import NotFound from "./components/404/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Marketing from "./components/Services/Marketing/Marketing";
import Development from "./components/Services/Development/Development";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/development" element={<Development />} />
        </Route>
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
