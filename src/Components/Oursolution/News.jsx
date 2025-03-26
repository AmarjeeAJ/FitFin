import blog1 from "../../assets/blog_img1.webp";
import blog3 from "../../assets/blog_img2.webp";
import blog2 from "../../assets/blog_img3.webp";

const News = () => {
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
            <p className="text-gray-300 text-sm mt-2  leading-relaxed max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white font-semibold mt-4 px-5 py-2 border border-purple-500 rounded-full hover:bg-purple-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Row 1 - Middle Card */}
        <div className="border ml-20 border-purple-500  hover:border-blue-800 w-[287px] h-[250px] md:h-[360px] rounded-lg overflow-hidden bg-[#12002b]">
          <div className="relative p-6">
            <h3 className="text-xl  font-sans  text-md font-bold text-white mt-6">
              Online Banking for Small Businesses
            </h3>
            <p className="text-gray-100 font-sans  text-md mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white  font-sans text-start font-semibold mt-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Row 1 - Last Card (Full Height) */}
        <div className="border border-purple-500 w-[300px]  hover:border-blue-800 rounded-lg overflow-hidden bg-[#12002b] md:row-span-2">
          <img
            src={blog2}
            alt="news"
            className="w-full h-96 object-cover top-0 left-0 right-0 rounded-b-2xl"
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-sans  text-md font-bold text-white">
              Online Banking for Small Businesses
            </h3>
            <p className="text-gray-100 font-sans  text-md mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white font-sans text-start font-semibold mt-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Row 2 - Left Card (Spans 2 Columns) */}
        <div className="md:col-span-2 h-[250px] md:h-[300px] border border-purple-500  hover:border-blue-800 rounded-lg overflow-hidden bg-[#12002b] flex">
          <img
            src={blog3}
            alt="news"
            className="w-2/4 h-full object-cover rounded-r-2xl"
          />
          <div className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-sans  text-md font-bold text-white">
              Online Banking for Small Businesses
            </h3>
            <p className="text-gray-100 font-sans  text-md mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <button className="text-white font-sans text-start font-semibold mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
