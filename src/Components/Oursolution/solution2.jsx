import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import phoneimg from "../../assets/registration_mobile.webp";
import { BsCheckLg } from "react-icons/bs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Growth',
      data: [25, 40, 55, 60, 75, 90],
      backgroundColor: ['#A855F7', '#EC4899'],
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

const Solution2 = () => {
  return (
    <div className="min-h-screen bg-[#0b061f] text-white p-12 flex items-center ">
      {/* Left Section */}
      <div className="w-1/2 space-y-9 ml-10">
        <h2 className="text-7xl font-bold">
          Our Easy Steps For <span className="text-[#A855F7]">Registration</span>
        </h2>
        <p className="text-gray-400 mt-3 mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>

        <div className="grid grid-cols-2 gap-y-6">
          {[ 'Sign in with ID Card', 'User Configuration', 'Select Country Location', 'Enter the Transaction', 'Enjoy Full Access', 'Enter the Transaction', ].map((step, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <div className="bg-purple-600 p-1 rounded-full text-white"><BsCheckLg /></div>
              <p className="text-xl">{step}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white px-6 py-3 rounded-full">
            Register Now
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section - Mobile Design */}
      <div className="w-1/2 flex ml-10 relative">
        <img src={phoneimg} alt="Mobile Design" className="w-80 rounded-xl shadow-xl" />
        <div className="absolute top-8 right-[-40px] bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-purple-400">Incomes</p>
          <p className="font-bold">$2,750.5</p>
        </div>
        <div className="absolute top-28 right-[-40px] bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-pink-400">Expenses</p>
          <p className="font-bold">$1,240.8</p>
        </div>
        <div className="absolute bottom-[-40px] right-[-40px] bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-purple-400">Monthly Graph</p>
          <div className="mt-2 w-28 h-20">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution2;
