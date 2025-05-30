import { Button } from '@mantine/core';
import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="mr-42 ml-42  flex flex-col ">
      <h1 className="text-white text-7xl mt-40">
        Elevate your brand with a timeless minimal logo.
      </h1>
      <p className="mt-5 text-xl text-gray-400">
        Design agency crafting minimal brand identities that speaks volumes.
      </p>
      <div className="mt-9 flex gap-4">
        <Link to="/process">
          <Button
            className="!text-white "
            variant="filled"
            color="#FF520E"
            size="lg"
            radius="lg">
            View plans
          </Button>
        </Link>
        <Link to="/services">
          <Button
            className="text-white"
            variant="outline"
            color="#FF520E"
            size="lg"
            radius="lg">
            Learn more
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center mb-20 mt-20">
        <h1 className="text-white text-center text-5xl">
          We specialise in crafting minimal logos that embody the essence of
          your brand.
        </h1>
        <p className=" mt-5 text-xl text-center text-gray-400">
          First impressions matter. That's why our mission is to create clean,
          enduring designs that elevate your brand with simplicity and elegance.
          Captivate your audience with your timeless presence.{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero
