import React from "react";
import {FaHandHoldingHeart} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const DonationCta = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-10/12">
      <div
        className="bg-gray-100 rounded-lg shadow-md p-6  hover:bg-blue-800 group transition duration-100 ease-in-out"
        data-aos="fade-right"
      >
        <div className="flex flex-row ">
          <FaHandHoldingHeart className="w-10 h-10 mr-4 text-[#05265F] group-hover:text-white transition duration-100"/>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-[#05265F] group-hover:text-white transition duration-100">
              Galang Dana
            </h3>
            <p className={"text-md group-hover:text-gray-300"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut inventore libero maiores non vitae?
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-100 rounded-lg shadow-md p-6 hover:bg-blue-800 group transition duration-100 ease-in-out"
        data-aos="fade-left"
      >
        <div className="flex flex-row ">
          <FaHandHoldingHeart className="w-10 h-10 mr-4 text-[#05265F] group-hover:text-white transition duration-100"/>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium text-[#05265F] group-hover:text-white transition duration-100">
              Galang Dana
            </h3>
            <p className={"text-md group-hover:text-gray-300"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut inventore libero maiores non vitae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCta;
