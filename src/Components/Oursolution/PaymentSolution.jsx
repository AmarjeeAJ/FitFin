
import payment from "../../assets/benefitsMobile.webp";
import { GoCheckCircleFill } from "react-icons/go";

const PaymentSolution = () => {
  return (
    <div className="bg-[#12022d] min-h-screen text-white p-8">
      {/* Header Section */}

      {/* Payment Details */}
      <div className="flex justify-center items-center w-full gap-10 flex-wrap md:flex-nowrap">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-2/4 flex flex-col justify-center">
          <div className="text-center text-4xl font-bold mb-10 w-full">
            <h2 className="text-5xl  text-start font-bold text-white mb-6">
              You Can Send Money On Your
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Finger Tips
              </span>
            </h2>
          </div>
          <div className="bg-white w-full md:w-[73%] text-black p-6 shadow-lg rounded relative">
            {/* Sender Section */}
            <div className="mb-6 flex items-center justify-between w-full">
              <div className="w-[55%]">
                <p className="font-semibold text-purple-600 text-lg">
                  Matt Henry
                </p>
                <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg mt-2 w-full">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="John Smith"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-lg font-semibold text-gray-700">$466.5</p>
                </div>
              </div>
              <img
                src="https://flagcdn.com/w80/in.png"
                alt="India Flag"
                className="w-16 h-16 rounded-full"
              />
            </div>

            {/* Transaction Icon */}
            <div className="flex justify-center my-4 ml-12">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.999 17.67L9.7 21.083C10.06 21.083 10.22 20.917 10.4 20.75L12.601 18.791L16.44 21.354C17.18 21.75 17.68 21.562 17.88 20.668L21.88 3.41601L21.881 3.41501C22.121 2.31801 21.521 1.87201 20.821 2.14101L2.221 9.41501C1.161 9.84101 1.172 10.417 2.041 10.687L6.601 12.146L17.561 5.54101C18.041 5.24901 18.481 5.35401 18.101 5.68701L9.999 12.667V17.67Z" />
                </svg>
              </div>
            </div>

            {/* Receiver Section */}
            <div className="mb-6 flex items-center justify-between w-full">
              <div className="w-[55%]">
                <p className="font-semibold text-purple-600 text-lg">
                  Amarjeet Kumar
                </p>
                <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg mt-2 w-full">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="William"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-lg font-semibold text-gray-700">$466.5</p>
                </div>
              </div>
              <img
                src="https://flagcdn.com/w80/in.png"
                alt="India Flag"
                className="w-16 h-16 rounded-full"
              />
            </div>

            {/* Success Message */}
            <div className="absolute w-64 h-20 top-1/2 right-[-10%] md:right-[-35%] transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl px-3 py-3 flex items-center gap-3 shadow-lg">
              <GoCheckCircleFill className="w-44 h-10 ml-[-20px]  " />
              <p className="text-md leading-relaxed ml-[-20px] font-semibold">
                Your Payment has been successful
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/3  ml-6 flex justify-center">
          <img
            src={payment}
            alt="Payment Receipt"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Customer Feedback */}
      <div className="bg-[#12022d] text-white mt-24 py-16 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-start gap-12">
          {/* Left Section: Header + Stats */}
          <div className="w-1/2 mt-32">
            {/* Header Section */}
            <div>
              <h2 className="text-6xl  ml-12 font-bold">
                What Customers say{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Us
                </span>
              </h2>
              <p className="text-gray-400  ml-12 mt-4 max-w-md">
                Lorem ipsum dolor sit amet consectetur. Scelerisque tincidunt
                nibh molestie nisi egestas nulla massa nbzufhsuhd
                jhudsfhsnhujkjkfjujujfjuf, hsuifhbw
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-10 ml-12 flex flex-row items-center space-x-16">
              <div className="text-left">
                <h3 className="text-5xl font-bold">93k+</h3>
                <p className="text-gray-300">Satisfied Users</p>
              </div>
              <div className="text-left">
                <h3 className="text-5xl font-bold">4.9/5</h3>
                <p className="text-gray-300">Client Rating</p>
              </div>
              <div className="text-left">
                <h3 className="text-5xl font-bold">100k+</h3>
                <p className="text-gray-300">App Download</p>
              </div>
            </div>
          </div>

          {/* Right Section: Testimonials */}
          <div className="w-1/2 flex flex-col gap-6 ml-16 ">
            {/* Card 1 */}
            <div className="relative w-[80%] bg-gradient-to-br from-purple-500 to-purple-900 p-6 rounded-xl shadow-lg flex items-center gap-4">
              {/* Left - Image */}
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="John Smith"
                className="w-20 h-20 rounded-full "
              />

              {/* Right - Text Content */}
              <div>
                <h4 className="font-bold text-lg font-sans text-white">
                  John Smith
                </h4>
                <p className="text-md font-sans font-semibold text-gray-200">
                  Designer
                </p>
                <p className="text-gray-200 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            {/* card2 */}
            <div className="relative w-[80%] ml-12 bg-gradient-to-r from-gray-800 to-pink-400 p-6 rounded-xl shadow-lg flex items-center gap-4">
              {/* Left - Image */}
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="John Smith"
                className="w-20 h-20 rounded-full "
              />

              {/* Right - Text Content */}
              <div>
                <h4 className="font-bold text-lg font-sans text-white">
                  John Smith
                </h4>
                <p className="text-md font-sans font-semibold text-gray-200">
                  Designer
                </p>
                <p className="text-gray-200 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            {/* card3 */}
            <div className="relative w-[80%] bg-gradient-to-r from-blue-900 to-pink-400 p-6 rounded-xl shadow-lg flex items-center gap-4">
              {/* Left - Image */}
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="John Smith"
                className="w-20 h-20 rounded-full "
              />

              {/* Right - Text Content */}
              <div>
                <h4 className="font-bold text-lg font-sans text-white">
                  John Smith
                </h4>
                <p className="text-md font-sans font-semibold text-gray-200">
                  Designer
                </p>
                <p className="text-gray-200 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  bottom-[opx] left-0 w-full">
        <div className="h-[2px] bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500 w-full"></div>
      </div>
    </div>
  );
};

export default PaymentSolution;
