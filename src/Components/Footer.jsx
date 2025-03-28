import ftz from "../assets/fitz.png";
import AppStoreSVG from "../assets/apple.svg";
import PlayStoreSVG from "../assets/playstore.svg";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#12022d] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
        {/* Left Section - Brand Info */}
        <div className="space-y-4  text-start md:text-left">
          <img
            src={ftz}
            alt="Finteezy Logo"
            className="w-52 h-auto mx-auto md:mx-0"
          />
          <p className="text-gray-300 ml-3 text-sm text-start leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 ml-2 mt-4">
            {[
              { icon: faFacebookF, link: "#" },
              { icon: faTwitter, link: "#" },
              { icon: faInstagram, link: "#" },
              { icon: faLinkedinIn, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6b1ca1] hover:bg-[#9433cc] transition duration-300 shadow-lg"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-white text-xl"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="text-center ml-2">
          <h3 className="text-lg font-semibold uppercase text-start tracking-wide">
            Contact Us
          </h3>
          <p className="text-purple-300 mt-2 text-start text-sm">
            120 Genève NR21, West Lancashire, England
          </p>
          <p className="text-sm text-gray-400 text-start mt-2">Need help? Call us</p>
          <p className="text-lg font-semibold text-start mt-2">
            <span className="text-blue-400">(+122)</span>
            <span className="text-white"> 34 5678</span>
            <span className="text-orange-400"> 9100</span>
          </p>
          <p className="text-gray-400 text-sm text-start mt-1">support@example.com</p>
        </div>

        {/* Right Section - Download App */}
        <div className="text-center space-y-8">
          <h3 className="font-bold text-lg uppercase text-start tracking-wide text-white">
            DOWNLOAD THE APP
          </h3>
          <p className="text-gray-400 text-sm text-start w-2/3 mt-2">
            We suggest connecting to the apps you use for work
          </p>

          <div className="flex justify-center  gap-4 mt-4">
            {/* App Store Button */}
            <a
              href="#"
              className="group flex items-center justify-center gap-2 w-56 h-20 border border-purple-500 rounded-lg bg-gradient-to-r from-purple-950 via-purple-800 to-pink-300 transition duration-100 hover:from-[#12022d] hover:via-[#12022d] hover:to-[#12022d]"
            >
              <img src={AppStoreSVG} alt="App Store" className="h-8 " />
              <div className="text-left">
                <p className="text-xs text-gray-300">Download on the</p>
                <p className="text-lg font-semibold text-white">App Store</p>
              </div>
            </a>

            {/* Play Store Button */}
            <a
              href="#"
              className="group flex items-center justify-center gap-2 w-56 h-20 border border-purple-500 rounded-lg bg-gradient-to-r from-purple-950 via-purple-800 to-pink-300 transition duration-300 hover:from-[#12022d] hover:via-[#12022d] hover:to-[#12022d]"
            >
              <img src={PlayStoreSVG} alt="Play Store" className="h-8 " />
              <div className="text-left">
                <p className="text-xs text-gray-300">GET IT ON</p>
                <p className="text-lg font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        Copyright © 2025 Finteezy By Evonicmedia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
