import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";

import { Button, MantineProvider } from "@mantine/core";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Faqs from "./components/Faqs";
import CustomCursor from "./components/CustomCursor"
import Companies from "./components/Companies";




function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <div className="bg-black text-white">
          <CustomCursor />
          
          <div
            style={{
              background:
                "linear-gradient(220deg, rgba(255, 82, 14, 0.6) 0%, rgba(8, 5, 5, 0) 50%)",
            }}>
            <Navbar />
            <Hero />
            <Companies/>
          </div>
          <Process />
          <Work />
          <Button
            className="left-245 bottom-1 fixed !rounded-2xl "
            style={{
              position: "fixed",
              top: "83%",
              left: "90%",
              transform: "translate(-50%, -50%)", // Center it perfectly
              zIndex: 9999,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
              backgroundColor: "rgba(0, 0, 0, 1)",
              color: "white",
              root: {
                backgroundColor: "#F1F1F1",
                "&:hover": {
                  backgroundColor: "#FF520E",
                },
              },
            }}
            variant="outline"
            color="rgba(0, 0, 0, 1)"
            radius="md"
            size="md">
            Get template for FREE
          </Button>
          <Button
            className="left-245 bottom-1 fixed"
            style={{
              position: "fixed",
              top: "92%",
              left: "92%",
              transform: "translate(-50%, -50%)", // Center it perfectly
              zIndex: 9999,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            variant="outline"
            color="rgba(0, 0, 0, 1)"
            radius="md"
            size="sm">
            Made in Framers
          </Button>

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/process" element={<Process />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
          {/* <Routes>
            <Route path="/hero" element={<Hero />} />
            <Route path="/process" element={<Process />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes> */}
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
