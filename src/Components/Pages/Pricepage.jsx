const Pricepage = () => {
  return (
    <div className="flex items-center justify-center min-h-[450px] bg-[#12022d]  relative">
      <div className="w-[100%] md:w-[90%] lg:w-[85%] bg-gradient-to-r from-[#401e8d] to-[#9c6257] p-20 rounded-2xl text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pricing Plan
        </h2>
        <p className="text-white text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* Full-width Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[2px] bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500"></div>
      </div>
    </div>
  );
};

export default Pricepage;
