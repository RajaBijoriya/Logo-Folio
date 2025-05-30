import React from 'react'

const Process = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-6xl">Our process.</h1>
        <p className="text-xl text-gray-400 mt-8">
          Reliable process for achieving distinctiveness.
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center mt-20">
        <div className="border border-gray-700  w-[470px] h-[300px] rounded-2xl">
          <div className="p-12 flex flex-col gap-5">
            <span className="text-red-600">01</span>
            <p className="text-xl">Discovery and Research.</p>
            <ul className="flex text-[17px] list-disc flex-col gap-5 px-4 text-gray-400">
              <li>Understand the client's values and audience.</li>
              <li>Conduct market research.</li>
              <li>Identify key design elements.</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-700  w-[470px] h-[300px] rounded-2xl">
          <div className="p-12 flex flex-col gap-5">
            <span className="text-red-600">02</span>
            <p className="text-xl">Design and Refinement.</p>
            <ul className="flex text-[17px] list-disc flex-col gap-5 px-4 text-gray-400">
              <li>Create digital versions of prioritised concepts.</li>
              <li>Refine the designs, ensuring clarity.</li>
              <li>Incorporate client feedback to fine-tuning.</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-700  w-[470px] h-[300px] rounded-2xl">
          <div className="p-12 flex flex-col gap-5">
            <span className="text-red-600">03</span>
            <p className="text-xl">Finalisation and Delivery.</p>
            <ul className="flex text-[17px] list-disc flex-col gap-5 px-4 text-gray-400">
              <li>Prepare the final logo in various formats.</li>
              <li>Provide a comprehensive brand guide.</li>
              <li>Deliver the final assets and suppport.</li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-700  w-[470px] h-[300px] rounded-2xl">
          <div className="p-12 flex flex-col gap-5">
            <span className="text-red-600">04</span>
            <p className="text-xl">Discovery and Research.</p>
            <ul className="flex text-[17px] list-disc flex-col gap-5 px-4 text-gray-400">
              <li>Understand the client's values and audience.</li>
              <li>Conduct market research.</li>
              <li>Identify key design elements.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process
