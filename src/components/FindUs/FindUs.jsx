import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-3">
      <h2 className="font-bold text-xl text-primary">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full mt-5">
          <button className="btn py-6 hover:bg-base-200 bg-base-100 justify-start join-item"> <FaFacebook className="text-xl"></FaFacebook> Facebook</button>
          <button className="btn py-6 hover:bg-base-200 bg-base-100 justify-start join-item"><FaInstagram className="text-2xl"></FaInstagram> Instagram</button>
          <button className="btn py-6 hover:bg-base-200 bg-base-100 justify-start join-item"> <FaLinkedin className="text-2xl"></FaLinkedin>LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
