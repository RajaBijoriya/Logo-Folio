import React from "react";

const About = () => {
  return (
    <div className=" mt-20">
      <div className="text-center">
        <h1 className="text-6xl">Our team.</h1>
        <p className="text-xl text-gray-400 mt-8">
          Meet our talented team proud in delivering your brand's logo.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-15">
        {/* Card 1 */}
        <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden group border border-gray-700 bg-gray-950">
          <img
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            src="./People/image2.png"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/60 to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300 rounded-2xl" />
          <div className="absolute top-[200px] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <p className="text-white text-center text-2xl font-semibold">
              Sarah Farine <br />
              <span className="text-xl text-gray-400 text-center">
                Founder of LogoFolio
              </span>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden group border border-gray-700 bg-gray-950">
          <img
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            src="./People/image1.png"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/60 to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300 rounded-2xl" />
          <div className="absolute top-[200px] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <p className="text-white text-center text-2xl font-semibold">
              Konrad Chenung <br />
              <span className="text-xl text-gray-400 text-center">
                Head of Design
              </span>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden group border border-gray-700 bg-gray-950">
          <img
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            src="./People/image3.png"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/60 to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300 rounded-2xl" />
          <div className="absolute top-[200px] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <p className="text-white text-center text-2xl font-semibold">
              Carla Lopez <br />
              <span className="text-xl text-gray-400 text-center">
                Head of Operations
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
