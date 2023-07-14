import React from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <div>
      <div className="flex mb-10 mt-20">
        <div className="w-1/3">
          <img
            src="https://i.ibb.co/VM0qhLC/testimony-img-jpg.webp"
            alt=""
            srcset=""
          />
        </div>
        <div className="w-2/3 px-8 py-5">
          <h1 className="text-2xl font-serif text-[#796e6e]">Testimonials</h1>
          <h1 className="text-[40px] font-serif text-[#454242]">
            What Customers Say?
          </h1>
        </div>
      </div>
      <div className="text-center my-10">
        <Link to="/review">
          <button className="text-2xl text-[#454242] hover:text-white rounded-sm py-3 px-7 border border-[#454242] hover:bg-[#454242] hover:border-none font-medium">
            Add a Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
