import React from "react";
import payment from "../../assets/benefitsMobile.webp";

const PaymentSolution = () => {
  return (
    <div className="bg-[#0b061f] min-h-screen text-white p-8">
      {/* Header Section */}

      {/* Payment Details */}
      <div className="flex justify-center items-center w-[100%] gap-10 flex-wrap">
        <div>
          <div className="text-center text-4xl font-bold mb-10   w-[100%]">
            <h2 className="text-5xl font-bold text-white mb-6 text-center">
              You Can Send Money On Yourxd
              <span className="text-[#f39c12]"> Finger Tips</span>
            </h2> 
          </div>
          <div className="bg-white w-[50%] text-black p-6  h-full shadow-lg ">
            <div className="mb-4">
              <p className="font-semibold">John Smith Sending</p>
              <p>$465.5</p>
            </div>
            <div>
              <p className="font-semibold">William Receiving</p>
              <p>$465.5</p>
            </div>
            <div className="bg-pink-500 text-white rounded-full p-2 mt-4">
               Your Payment has been successful
            </div>
          </div>
        </div>

        <div className="w-[35%]">
          <img src={payment} alt="Payment Receipt" />
        </div>
      </div>

      {/* Customer Feedback */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">
          What Customers say <span className="text-[#f39c12]">About Us</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          repellat et mollitia non expedita.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold">93k+</h3>
            <p>Satisfied Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">4.9/5</h3>
            <p>Client Rating</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">100k+</h3>
            <p>App Download</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <div className="bg-purple-500 p-4 rounded-lg mb-4">
          ⭐⭐⭐⭐ John Smith - Designer
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          ⭐⭐⭐⭐ William John - Developer
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-lg">
          ⭐⭐⭐⭐ Anna Williams - Team Lead
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSolution;
