import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";
import debit from "../../assets/debitcards.webp";

const Solution3 = () => {
  return (
    <div className="min-h-screen bg-[#12022d] text-white flex flex-col lg:flex-row items-center p-12 relative">
      <div className="absolute top-0 left-0 w-full flex items-center">
        <div className="w-full border-t-2 border-gradient"></div>
      </div>

      <div className="w-full ml-[-20px] lg:w-1/2 flex justify-center relative">
        <img
          src={debit}
          alt="User with Card"
          className="w-auto h-auto rounded-xl shadow-xl"
        />
      </div>

      <div className="w-full lg:w-[60%] space-y-6 ml-4 mt-56">
        <h1 className="text-5xl md:text-6xl font-bold">
          Finteezy Is The Fastest Mobile <br />
          <span className="text-[#A855F7]">Banking Solution</span>
        </h1>
        <p className="text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry’s standard
          dummy text ever since the 1500s.
        </p>

        <div className="flex gap-4">
          <p className="font-bold mt-6 text-start ml-[-5px]">
            DOWNLOAD THE APP
          </p>
          <div className="bg-gradient-to-r from-[#3b1456] to-[#1a0b2e] p-0 rounded-lg">
            <img
              src={appstore}
              alt="App Store"
              className="h-16 invert white cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="bg-gradient-to-r from-[#3b1456] to-[#1a0b2e] p-0 r">
            <img
              src={playstore}
              alt="Google Play"
              className="h-16 invert white cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <div className="absolute  bottom-12 left-0 w-full">
        <div className="h-[2px] bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500 w-full"></div>
      </div>
    </div>
  );
};

export default Solution3;
