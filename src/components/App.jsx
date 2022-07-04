import react from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
    return (
        <>
            <NavBar />

            <div className="screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App;