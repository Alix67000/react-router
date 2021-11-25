import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <h1>Nos services</h1>
      <nav>
        <Link to="/services/marketing">Service marketing</Link>
        <Link to="/services/development">Service developpement</Link>
      </nav>
      <Outlet />
    </div>
  );
}
