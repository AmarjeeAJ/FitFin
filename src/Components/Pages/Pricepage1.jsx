import Pricingcard from "../../assets/pricing_card.webp";

const PricePlanpage = () => {
  return (
    <div className="w-full bg-[#12022d] px-8 py-16 flex flex-col items-center relative">
      {/* Top Section: Image & Text */}
      <div className="w-full flex justify-center items-center gap-12">
        {/* Image */}
        <div className="w-1/2 flex justify-center">
          <img src={Pricingcard} alt="User with Card" className="w-[70%] object-cover" />
        </div>

        {/* Text Section */}
        <div className="w-1/2 text-white max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold">Our Pricing Plan</h1>
          <p className="text-lg leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
          </p>
          <p className="text-lg leading-relaxed">
            Lorem ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {["Personal", "Basic", "Pro", "Enterprise"].map((plan, index) => (
          <div key={index} className="h-[450px] rounded-xl border border-purple-500 hover:border-blue-700 flex flex-col items-center justify-center p-6 space-y-4">
            <div className="mx-8 space-y-8 mt-[-40px]">
              <h1 className="text-white text-4xl font-semibold">{plan}</h1>
              <p className="text-white text-lg font-sans">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit voluptas iusto accusantium atque dicta ducimus libero! Facere, quod incidunt.
              </p>
              <h1 className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-400 text-5xl font-bold bg-clip-text text-transparent">
                  $15
                </span>
                <span className="text-white text-md text-center">
                  Per user per month billed annually
                </span>
              </h1>
              <button className="relative group overflow-hidden border border-purple-600 md:px-14 py-3 md:py-4 rounded-full text-md text-white font-semibold w-fit">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-400 w-0 left-full group-hover:left-0 group-hover:w-full transition-all duration-[600ms] ease-in-out"></span>
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[2px] bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500"></div>
      </div>
    </div>
  );
};

export default PricePlanpage;
