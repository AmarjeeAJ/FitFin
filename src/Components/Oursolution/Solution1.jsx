import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa6";

import { CreditCard, TrendingUp, Wallet } from "lucide-react"; // Icons added

const Solution1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  const logos = [
    { src: "/logo-placeholder.png", name: "Logoipsum 1" },
    { src: "/logo-placeholder.png", name: "Logoipsum 2" },
    { src: "/logo-placeholder.png", name: "Logoipsum 3" },
    { src: "/logo-placeholder.png", name: "Logoipsum 4" },
    { src: "/logo-placeholder.png", name: "Logoipsum 5" },
    { src: "/logo-placeholder.png", name: "Logoipsum 6" },
  ];

  return (
    <div className="min-h-screen bg-[#0b061f] text-white mt-[-200px] px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-white relative w-full flex items-center">
          <span className="flex-grow h-[2px] bg-gradient-to-r from-purple-500 to-orange-400"></span>
          <span className="mx-4">Our Solution Partners</span>
          <span className="flex-grow h-[2px] bg-gradient-to-r from-orange-400 to-purple-500"></span>
        </h2>

        {/* Updated Slider with Dynamic Logos */}
        <Slider {...settings} className="mt-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-4 w-full px-4"
            >
              <img src={logo.src} className="h-8 shrink-0" />
              <p className="text-white text-sm truncate">{logo.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 col-2 gap-6">
        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-6 ml-12">
          {[  
            { title: "Bank Account", color: "from-[#3b0764] to-[#2d0b49]", icon: <FaUser  size={60} className="text-white" /> },
            { title: "Easy Payment", color: "from-[#6b21a8] to-[#4a148c]", icon: <CreditCard size={30} className="text-white" /> },
            { title: "Investments", color: "from-[#9333ea] to-[#7e22ce]", icon: <TrendingUp size={30} className="text-white" /> },
            { title: "Funds Transfer", color: "from-[#ec4899] to-[#db2777]", icon: <Wallet size={30} className="text-white" /> },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl bg-gradient-to-r ${item.color} flex items-center gap-4`}
            >
              {item.icon}
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus,  leo.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-2 ml-5">
          <h1 className="text-6xl font-bold">
            Your Money, Your Way, {" "}
            <span className="text-[#A855F7]">Our Guarantee</span>
          </h1>
          <p className="my-6 text-start leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="relative group overflow-hidden border-2 border-black hover:border-blue-900 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-400 md:px-14 py-3 md:py-4 rounded-full text-md text-white font-semibold w-fit">
            <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-[600ms] ease-in-out"></span>
            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solution1;
