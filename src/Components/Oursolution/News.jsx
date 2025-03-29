import { useState } from "react";
import blog1 from "../../assets/blog_img1.webp";

import blog3 from "../../assets/blog_img2.webp";
import blog2 from "../../assets/blog_img3.webp";
import faqsgirl from "../../assets/faqsGirl.webp";

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
    <div className="bg-[#12022d] text-white  py-12 px-6">
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
      <div className="bg-[#12022d] min-h-screen flex items-center justify-center px-6 lg:px-20 mt-24">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* FAQ Text Section */}
          <div className="flex flex-col justify-center space-y-8 h-full">
            <h2 className="text-6xl font-bold text-white">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>

            {/* FAQ List */}
            <div className="mt-8 space-y-11 ">
              {faqs.map((faq, index) => (
                <div key={index} className="p-1 rounded-lg ">
                  {/* Question */}
                  <div
                    className={`bg-gradient-to-r  from-blue-900 via-purple-500 to-pink-400 p-4 cursor-pointer flex justify-between items-center 
    ${openIndex === index ? "rounded-t-lg" : "rounded-lg"}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-white font-semibold">{faq.question}</p>
                    <span className="text-white text-xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* Collapsible Answer Section with Border */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#12022d] text-gray-300 rounded-b-lg border border-purple-500 ${
                      openIndex === index
                        ? "max-h-40 opacity-100 p-4 border-t"
                        : "max-h-0 opacity-0 p-0 border-t-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Image (Fix Stretching Issue) */}
          <div className="flex justify-center lg:justify-end self-start">
            <img
              src={faqsgirl}
              alt="FAQ Image"
              className="rounded-lg shadow-lg w-full max-w-sm lg:max-w-md object-cover flex-grow-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-12 bg-[#0b061f]bg-[#090717] mt-14">
        <h2 className="text-5xl md:text-5xl font-bold text-white text-center mb-6">
          Get Latest Updates
        </h2>

        <div className="flex items-center gap-4 max-w-3xl w-full">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-transparent text-white placeholder-gray-400 px-12 py-6 outline-none border border-purple-500 rounded-lg"
          />

          <button className="relative group overflow-hidden border border-purple-600 px-12 py-6 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-900 via-purple-500 to-pink-400">
            <span className="absolute inset-0 bg-[#0b061f] w-0 right-full group-hover:left-0 group-hover:w-full transition-all duration-[500ms] ease-in-out"></span>

            <span className="relative z-10 text-center">Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
