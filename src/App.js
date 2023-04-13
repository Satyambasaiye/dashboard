import React from "react";
import Nav from "./components/Admin/Navbar/Nav";
import Sidebar from "./components/Admin/Sidebar/Sidebar";
import Home from "./components/Admin/Home/Home";
import Addtrek from "./components/Admin/Add Trek/Addtrek";
import Pasttrek from "./components/Admin/Past Trek/Pasttrek";
import Ongoingtrek from "./components/Admin/Ongoing trek/Ongoingtrek";
import Addteam from "./components/Admin/Add Team/Addteam";
import Viewteam from "./components/Admin/View Team/Viewteam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="md:flex md:flex-row  ">
          <Sidebar />
          <div className="md:mt-28 md:w-full md:h-screen">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Addtrek" element={<Addtrek />} />
              <Route path="/Pasttrek" element={<Pasttrek />} />
              <Route path="/OngoingTrek" element={<Ongoingtrek />} />
              <Route path="/Addteam" element={<Addteam />} />
              <Route path="/Viewteam" element={<Viewteam />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
