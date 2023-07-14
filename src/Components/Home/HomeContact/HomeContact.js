import React from "react";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className="my-10">
      <div className="lg:h-[200px] p-10 mb-10 grid lg:grid-cols-2 md:grid-cols-2 md:h-[200px] bg-[url('https://i.ibb.co/y6cLjyt/1-jpg.webp')]">
        <div className="m-auto">
          <h1 className="text-[40px] text-white font-serif">Contact us now!</h1>
          <p className="mt-2 text-white">
            Contact (+12) 000-000-000 to book directly or for advice
          </p>
        </div>
        <div className="m-auto my-10">
          <Link to="/contact">
            <button className="bg-orange-400 rounded text-black font-serif px-8 py-3 text-xl">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
      <div className="grid gap-20  lg:grid-cols-5 md:grid-cols-5">
        <img
          className="mx-auto"
          src="https://i.ibb.co/dBzvxsn/p1-png.webp"
          alt=""
          srcSet=""
        />
        <img
          className="mx-auto"
          src="https://i.ibb.co/wwLTzQD/p2-png.webp"
          alt=""
          srcSet=""
        />
        <img
          className="mx-auto"
          src="https://i.ibb.co/Qks6TyS/p3-png.webp"
          alt=""
          srcSet=""
        />
        <img
          className="mx-auto h-full"
          src="https://i.ibb.co/n6CYHjL/p4-png.webp"
          alt=""
          srcSet=""
        />
        <img
          className="mx-auto"
          src="https://i.ibb.co/n1WP26D/p5-png.webp"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default HomeContact;
