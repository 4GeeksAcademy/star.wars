// Layout.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Navbar from "./component/navbar";
import { Home } from "./views/home";
import People from "./component/People";
import Planets from "./component/Planets";
import Vehicles from "./component/Vehicles";
import PersonDetail from "./component/PersonDetails";
import PlanetsDetail from "./component/PlanetDetails";
import VehiclesDetail from "./component/VehicleDetails";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/people/:id" element={<PersonDetail />} />
          <Route path="/planets/:id" element={<PlanetsDetail />} />
          <Route path="/vehicles/:id" element={<VehiclesDetail />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
