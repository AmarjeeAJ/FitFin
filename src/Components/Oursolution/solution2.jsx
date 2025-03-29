import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import phoneimg from "../../assets/registration_mobile.webp";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Incomes',
      data: [20, 30, 50, 65, 80, 95, 100],
      borderColor: '#A855F7',
      backgroundColor: '#A855F7',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: '#444' } },
  },
};


const Solution2 = () => {
  return (
    <div className="min-h-screen bg-[#12022d] text-white p-12 flex flex-col lg:flex-row items-center">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-9 mb-10 lg:mb-0">
        <h2 className="text-5xl md:text-7xl font-bold">
          Our Easy Steps For <span className="text-[#A855F7]">Registration</span>
        </h2>
        <p className="text-gray-400 mt-3 mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s.
        </p>

        <div className="grid grid-cols-2 gap-y-6">
          {[
            'Sign in with ID Card',
            'User Configuration',
            'Select Country Location',
            'Enter the Transaction',
            'Enjoy Full Access',
            'Enter the Transaction',
          ].map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="bg-purple-600 p-1 rounded-full text-white">
                <BsCheckLg />
              </div>
              <p className="text-xl">{step}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white px-10 py-3 rounded-full">
            Register Now
          </button>
          <button className="border border-white text-white px-10  py-3 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section - Mobile Design */}
      <div className="w-full lg:w-1/2 flex justify-start ml-4 relative">
        <img src={phoneimg} alt="Mobile Design" className="w-60 md:w-80 rounded-xl shadow-xl" />

        <div className="absolute top-6 right-[30px] w-48 h-20 md:right-[40px] bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 text-purple-400">
            <BsArrowUpRight />
            <p>Incomes</p>
          </div>
          <p className="font-bold">$2,750.5</p>
        </div>

        <div className="absolute top-24 mt-8 right-[40px] w-48 h-20 bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 text-pink-400">
            <BsArrowDownLeft />
            <p>Expenses</p>
          </div>
          <p className="font-bold">$1,240.8</p>
        </div>

         <div className="absolute mt-72 right-2  bg-gray-800 p-4 rounded-lg shadow-md w-[260px]">
          <div className="flex justify-between items-center">
            <p className="text-purple-400">Monthly Graph</p>
            <span className="bg-purple-400 text-white px-2 py-1 text-xs rounded-md">Incomes</span>
          </div>
          <div className="mt-2 w-full h-24">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution2;
