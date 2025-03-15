import Card1 from "../../assets/debit_card.png";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#0b061f] mt-[-40px] justify-center px-12 py-20 text-white ">
      {/* bg-[radial-gradient(circle,#3b0764,#2d0b49,#0b061f,#2d0b49,#2d0b49,#2d0b49,#2d0b49)] */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-7xl">
        {/* Left Section - Text and Button */}
        <div className="space-y-6">
          <h1 className="text-7xl font-bold leading-tight">
            The Ultimate <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Online Payment
            </span>
            <br />
            Solution
          </h1>
          <p className="mt-4 text-gray-400 text-lg text-justify w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
          <button className="mt-4 px-6 py-3 border border-purple-400 rounded-full text-white font-semibold shadow-lg hover:bg-purple-600 hover:border-transparent transition-all">
            Get Started
          </button>

          {/* Reviews Section */}
          <div className="flex flex-col items-start gap-2 mt-14">
            <p className="text-gray-300 text-lg mt-4 mb-2">
              Over 5,000+ Reviews
            </p>
            <div className="flex items-center">
              <img
                src="/path-to-avatar1.png"
                alt="Avatar 1"
                className="w-14 h-14 rounded-full border-2 border-purple-500 -ml-2"
              />
              <img
                src="/path-to-avatar2.png"
                alt="Avatar 2"
                className="w-14 h-14 rounded-full border-2 border-purple-500 -ml-2"
              />
              <img
                src="/path-to-avatar3.png"
                alt="Avatar 3"
                className="w-14 h-14 rounded-full border-2 border-purple-500 -ml-2"
              />
              <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center font-bold border-2 border-purple-500 -ml-2">
                5K+
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section - Adjusted to Top */}
        <div className="flex flex-col space-y-10 text-right mr-12 mt-[-150px]">
          <div>
            <h2 className="text-6xl font-bold">93k+</h2>
            <p className="text-gray-400 text-lg mr-8 mt-3">Satisfied Users</p>
          </div>
          <div>
            <h2 className="text-6xl font-bold">4.9/5</h2>
            <p className="text-gray-400 text-lg mr-9 mt-3">Client Rating</p>
          </div>
          <div>
            <h2 className="text-6xl font-bold mr-4">99%</h2>
            <p className="text-gray-400 text-lg  mt-3">Secure Payments</p>
          </div>
        </div>

        {/* Card Section - Adjusted to Bottom */}
        <div className="w-full flex justify-end ml-96 mb-48  ">
          <img
            // from-[#3b0764] via-[#2d0b49] to-[#0b061f] p-[12px]
            src={Card1}
            alt="Card 1"
            className="absolute object-cover top-32 w-[500px] bg-gradient-to-br   z-10 transform rotate-0 translate-y-0 opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
