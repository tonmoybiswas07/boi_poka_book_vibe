import React from "react";
import bannerImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center my-16 py-10 px-20 bg-gray-200 rounded-2xl">
      <div>
        <h1 className="text-5xl font-bold">
          Books to freshen up <br /> your bookshelf
        </h1>
        <div className="mt-16">
          <button className="btn bg-[#23BE0A] py-7 font-semibold text-white px-10">
            View The List
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
