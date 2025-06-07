import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/0 text-white px-8 py-4 flex justify-between items-center">
      <nav className="ml-23">
        <Link to="/">
          <img
            src="./logo.png"
            className="w-[40px] ml-10 h-[35px] rounded-full"
            alt="logo"
          />
        </Link>
      </nav>
      <div className="text-white text-sm flex items-center">
        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <Link
                className="transition-colors duration-500 hover:text-[#FF520E]"
                to="/process">
                Process
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-500 hover:text-[#FF520E]"
                to="/work">
                Work
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-500 hover:text-[#FF520E]"
                to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-500 hover:text-[#FF520E]"
                to="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-500 hover:text-[#FF520E]"
                to="/faqs">
                FAQs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mr-30">
        <a href="https://calendly.com/" target="_blank">
          <Button
            className="text-white"
            variant="outline"
            color="#FF520E"
            size="lg"
            radius="lg">
            Book a call
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
