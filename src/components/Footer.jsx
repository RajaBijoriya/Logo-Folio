import { Button } from '@mantine/core';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex justify-around " style={{
              background:
                "linear-gradient(20deg, rgba(255, 82, 14, 0.6) 0%, rgba(8, 5, 5, 0) 50%)",
            }} >
      <div  className='flex mt-40 mb-50 justify-around gap-50'>
        <div className="flex flex-col gap-10">
        <div className="flex justify-start items-center gap-3">
          <img
            className="w-[45px] h-[40px] rounded-full"
            src="./logo.png"
            alt=""
          />
          <span className="text-2xl ">LogoFolio.</span>
        </div>
        <Button
          className=""
          variant="filled"
          color="#FF520E"
          size="lg"
          radius="md">
          Book FREE discovery Call
        </Button>
      </div>
      <div className="flex gap-20 ">
        <ul className="flex flex-col gap-3 text-[15px]">
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>
            <Link to="/process">Process</Link>
          </li>
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>
            <Link to="/work">Work</Link>
          </li>
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>
            <Link to="/services">Services</Link>
          </li>
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>
            <Link to="/about">About</Link>
          </li>
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 text-[15px]">
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>X(Twitter)</li>
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>LinkedIn</li>
        </ul>
        <ul className="flex flex-col gap-3 text-[15px]">
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>Use this template</li>
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>Built in Framer</li>
          <li className='transition-colors duration-500 hover:text-[#FF520E]'>View more templates</li>
          <li className="flex items-center gap-2 transition-colors duration-500 hover:text-[#FF520E]">
            <img
              src="./raja.jpg"
              className="w-[20px] h-[20px] rounded-full"
              alt=""
            />{" "}
            <span className="text-lg transition-colors duration-500 hover:text-[#FF520E]">Created by Raja Bijoriya</span>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Footer
