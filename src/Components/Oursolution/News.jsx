import { useState } from "react";
import blog1 from "../../assets/blog_img1.webp";

import blog3 from "../../assets/blog_img2.webp";
import blog2 from "../../assets/blog_img3.webp";

const News = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-[#0b061f] text-white py-12 px-6">
      {/* Title */}
      <div className="text-center mb-12 space-y-8">
        <h2 className="text-6xl font-sans font-bold">Latest news & Events</h2>
        <p className="text-gray-300 max-w-2xl font-sans mx-auto mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto max-w-6xl mx-auto">
        {/* Row 1 - Left Card */}
        <div className="border border-purple-500 hover:border-blue-800 w-[450px] h-[250px] md:h-[360px] rounded-lg overflow-hidden bg-[#12002b] flex">
          <img
            src={blog1}
            alt="news"
            className="w-64 h-full object-cover rounded-r-2xl"
          />

          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-sans font-bold hover:text-purple-600 text-white">
              Online Banking for Small Businesses
            </h3>
            <p className="text-gray-300 text-sm mt-2 leading-relaxed max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white font-semibold mt-4 px-5 py-2 border border-purple-500 rounded-full hover:bg-purple-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Row 1 - Middle Card */}
        <div className="border ml-20 border-purple-500 hover:border-blue-800 w-[287px] h-[250px] md:h-[360px] rounded-lg overflow-hidden bg-[#12002b]">
          <div className="relative p-6">
            <h3 className="text-xl font-sans text-md font-bold text-white mt-6">
              Online Banking for Small Businesses
            </h3>
            <p className="text-gray-100 font-sans text-md mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white font-sans text-start font-semibold mt-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Row 1 - Last Card (Full Height) */}
        <div className="border border-purple-500 w-[300px] hover:border-blue-800 rounded-lg overflow-hidden bg-[#12002b] md:row-span-2">
          <img
            src={blog2}
            alt="news"
            className="w-full h-96 object-cover top-0 left-0 right-0 rounded-b-2xl"
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-sans text-md font-bold text-white">
              Online Banking for Small Businesses
            </h3>
            <p className="text-gray-100 font-sans text-md mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white font-sans text-start font-semibold mt-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Row 2 - Left Card (Spans 2 Columns) */}
        <div className="md:col-span-2 h-[250px] md:h-[300px] border border-purple-500 hover:border-blue-800 rounded-lg overflow-hidden bg-[#12002b] flex">
          <img
            src={blog3}
            alt="news"
            className="w-2/4 h-full object-cover rounded-r-2xl"
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-sans text-md font-bold text-white">
              Online Banking for Small Businesses
            </h3>
            <p className="text-gray-100 font-sans text-md mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white font-sans text-start font-semibold mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#0b061f] min-h-screen flex items-center justify-center px-6 lg:px-20 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* FAQ Text Section */}
        <div>
          <h2 className="text-5xl font-bold text-white">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>

          {/* FAQ List */}
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-lg"
              >
                {/* Question */}
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-white font-semibold">{faq.question}</p>
                  <span className="text-white text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Smooth Collapsible Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 p-4"
                      : "max-h-0 opacity-0 p-0"
                  } bg-[#0b061f] text-gray-300 rounded-b-lg`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Image (Properly Positioned on Right Side) */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://source.unsplash.com/500x400/?woman,laptop"
            alt="FAQ Image"
            className="rounded-lg shadow-lg w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
    </div>
 
  );
};

export default News;
